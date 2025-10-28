const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const videoPaths = ['Assets/Demo/Hope.mp4', 'Assets/Demo/PLAYER.png' ,'Assets/Demo/SHUMP _ MUSIC GAME.mp4','Assets/Demo/TOKOTEM_SOKOBAN.mp4','Assets/Demo/Miam - Serious Game.mp4','Assets/Demo/AlgoVersGamePlay-GameJam.mp4'];
let availableMedia = [...videoPaths];

// Configurable parameters
const TARGET_BUBBLES = 5; // main media bubbles
const COLLISION_THRESHOLD = 15;
const MIN_SCALE = 100;
const MAX_SCALE = 150;
const MAX_SPAWN_ATTEMPTS = 20;
const EXPLOSION_CHANCE = 0.1;

// Decorative bubble settings
let DECORATIVE_BUBBLES = 50;
const DECOR_MIN_RADIUS = 10;
const DECOR_MAX_RADIUS = 25;
const DECOR_RESPAWN_RATE = 0.05;

let mouseX = -1000, mouseY = -1000;

class Particle {
  constructor(x, y, color) {
    this.x=x; this.y=y;
    this.radius=4+Math.random()*6;
    this.speedX=(Math.random()-0.5)*6;
    this.speedY=(Math.random()-0.5)*6;
    this.life=40+Math.random()*30;
    this.color=color;
    this.opacity=1;
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.life--;
    this.opacity = Math.max(0,this.life/70);
  }
  draw(){
    const gradient=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
    gradient.addColorStop(0,`rgba(255,255,255,${this.opacity})`);
    gradient.addColorStop(0.5,`${this.color.replace('0.7',this.opacity*0.7)}`);
    gradient.addColorStop(1,'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle=gradient;
    ctx.fill();
  }
}

class Bubble {
  constructor(x,y,radius,speedX,speedY,media=false,decor=false){
    this.x=x;this.y=y;this.radius=0;this.targetRadius=radius;
    this.speedX=speedX;this.speedY=speedY;
    this.vxOffset=Math.random()*1000;this.vyOffset=Math.random()*1000;
    this.alive=true;this.growing=true;this.collisions=0;
    this.isMedia=media;this.isDecor=decor;
    this.mediaElem=null;

    if(this.isMedia){
      if(availableMedia.length===0) availableMedia=[...videoPaths];
      const mPath=availableMedia.splice(Math.floor(Math.random()*availableMedia.length),1)[0];
      if(mPath.endsWith('.mp4')){
        this.mediaElem=document.createElement('video');
        this.mediaElem.src=mPath;this.mediaElem.autoplay=true;this.mediaElem.loop=true;this.mediaElem.muted=true;
      } else {
        this.mediaElem=document.createElement('img');
        this.mediaElem.src=mPath;
      }
      this.mediaElem.classList.add('bubble-media');
      this.mediaElem.style.width=`${this.targetRadius*2}px`;
      this.mediaElem.style.height=`${this.targetRadius*2}px`;
      this.mediaElem.style.left=`${this.x-this.targetRadius}px`;
      this.mediaElem.style.top=`${this.y-this.targetRadius}px`;
       this.mediaElem.style.zIndex=`0`;
      document.body.appendChild(this.mediaElem);
    }
  }
  update(){
    if(this.growing){this.radius+=1.2;if(this.radius>=this.targetRadius){this.radius=this.targetRadius;this.growing=false;}}
    // Floating motion
    this.x+=this.speedX+Math.sin(Date.now()*0.001+this.vxOffset)*0.3;
    this.y+=this.speedY+Math.cos(Date.now()*0.001+this.vyOffset)*0.3;
    // Wall bounce
    if(this.x<this.radius||this.x>canvas.width-this.radius)this.speedX*=-1;
    if(this.y<this.radius||this.y>canvas.height-this.radius)this.speedY*=-1;
    // Mouse repulsion
    const dx=this.x-mouseX, dy=this.y-mouseY, dist=Math.hypot(dx,dy);
    const repelDist=150;
    if(dist<repelDist){
      const angle=Math.atan2(dy,dx);
      const force=(repelDist-dist)/repelDist*2;
      this.x+=Math.cos(angle)*force;
      this.y+=Math.sin(angle)*force;
    }

    if(this.isMedia){
      this.mediaElem.style.left=`${this.x-this.radius}px`;
      this.mediaElem.style.top=`${this.y-this.radius}px`;
      this.mediaElem.style.width=`${this.radius*2}px`;
      this.mediaElem.style.height=`${this.radius*2}px`;
    }
  }
  draw(){
    if(!this.alive){if(this.isMedia) this.mediaElem.remove();return;}
    const gradient=ctx.createRadialGradient(this.x-this.radius/3,this.y-this.radius/3,this.radius/4,this.x,this.y,this.radius);
    gradient.addColorStop(0,'rgba(255,255,255,0.3)');
    gradient.addColorStop(1,this.isDecor ? 'rgba(138,43,226,0.08)' : 'rgba(138,43,226,0.15)');
    ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);ctx.fillStyle=gradient;ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,0.6)';
    ctx.lineWidth=2;
    ctx.stroke();
  }
}

const bubbles=[];
const particles=[];
const decorBubbles=[];

for(let i=0;i<DECORATIVE_BUBBLES;i++){
  const r = DECOR_MIN_RADIUS+Math.random()*(DECOR_MAX_RADIUS-DECOR_MIN_RADIUS);
  const x = Math.random()*(canvas.width-r*2)+r;
  const y = Math.random()*(canvas.height-r*2)+r;
  const sx=(Math.random()-0.5)*0.2;
  const sy=(Math.random()-0.5)*0.2;
  decorBubbles.push(new Bubble(x,y,r,sx,sy,false,true));
}

function isOverlapping(x,y,radius,list){
  return list.some(b=>b.alive && Math.hypot(b.x-x,b.y-y) < b.radius+radius-5);
}

function spawnBubble(){
  if(bubbles.filter(b=>b.alive).length>=TARGET_BUBBLES) return;
  let attempts=0;
  let r = MIN_SCALE + Math.random() * (MAX_SCALE - MIN_SCALE);
  let x, y;
  do {
    x = Math.random()*(canvas.width-r*2)+r;
    y = Math.random()*(canvas.height-r*2)+r;
    attempts++;
  } while(isOverlapping(x,y,r,bubbles) && attempts<MAX_SPAWN_ATTEMPTS);
  if(attempts < MAX_SPAWN_ATTEMPTS){
    let sx=(Math.random()-0.5)*0.5;
    let sy=(Math.random()-0.5)*0.5;
    bubbles.push(new Bubble(x,y,r,sx,sy,true,false));
  }
}

function spawnDecorative(){
  if(decorBubbles.filter(b=>b.alive).length<DECORATIVE_BUBBLES){
    if(Math.random()<DECOR_RESPAWN_RATE){
      const r = DECOR_MIN_RADIUS+Math.random()*(DECOR_MAX_RADIUS-DECOR_MIN_RADIUS);
      const x = Math.random()*(canvas.width-r*2)+r;
      const y = Math.random()*(canvas.height-r*2)+r;
      const sx=(Math.random()-0.5)*0.2;
      const sy=(Math.random()-0.5)*0.2;
      decorBubbles.push(new Bubble(x,y,r,sx,sy,false,true));
    }
  }
}

function explodeBubble(bubble){
  bubble.alive=false;
  if(bubble.isMedia) bubble.mediaElem.remove();
  for(let i=0;i<25;i++) particles.push(new Particle(bubble.x,bubble.y,'rgba(138,43,226,0.08)'));
  if(bubble.isMedia && bubble.mediaElem.src){
    availableMedia.push(bubble.mediaElem.src);
  }
}

function handleCollisions(){
  for(let i=0;i<bubbles.length;i++){
    for(let j=i+1;j<bubbles.length;j++){
      const b1=bubbles[i],b2=bubbles[j];
      if(!b1.alive||!b2.alive) continue;
      const dx=b1.x-b2.x,dy=b1.y-b2.y,dist=Math.hypot(dx,dy),minDist=b1.radius+b2.radius;
      if(dist<minDist){
        const angle=Math.atan2(dy,dx),overlap=(minDist-dist)/2;
        b1.x+=Math.cos(angle)*overlap;b1.y+=Math.sin(angle)*overlap;
        b2.x-=Math.cos(angle)*overlap;b2.y-=Math.sin(angle)*overlap;
        [b1.speedX,b2.speedX]=[b2.speedX,b1.speedX];[b1.speedY,b2.speedY]=[b2.speedY,b1.speedY];
        b1.collisions++;b2.collisions++;
        if(b1.collisions>=COLLISION_THRESHOLD && Math.random()<EXPLOSION_CHANCE) explodeBubble(b1);
        if(b2.collisions>=COLLISION_THRESHOLD && Math.random()<EXPLOSION_CHANCE) explodeBubble(b2);
      }
    }
  }
  for(let i=0;i<decorBubbles.length;i++){
    for(let j=i+1;j<decorBubbles.length;j++){
      const b1=decorBubbles[i],b2=decorBubbles[j];
      if(!b1.alive||!b2.alive) continue;
      const dx=b1.x-b2.x,dy=b1.y-b2.y,dist=Math.hypot(dx,dy),minDist=b1.radius+b2.radius;
      if(dist<minDist){
        const angle=Math.atan2(dy,dx),overlap=(minDist-dist)/2;
        b1.x+=Math.cos(angle)*overlap;b1.y+=Math.sin(angle)*overlap;
        b2.x-=Math.cos(angle)*overlap;b2.y-=Math.sin(angle)*overlap;
      }
    }
  }
  decorBubbles.forEach(db => {
    bubbles.forEach(b => {
      if(!b.alive) return;
      const dx = db.x - b.x, dy = db.y - b.y;
      const dist = Math.hypot(dx,dy);
      const targetDist = db.radius + b.radius + 10;
      if(dist < targetDist){
        const angle = Math.atan2(dy,dx);
        const offset = (targetDist-dist)/5;
        db.x += Math.cos(angle)*offset;
        db.y += Math.sin(angle)*offset;
      }
    });
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  handleCollisions();
  spawnDecorative();
  decorBubbles.forEach(db=>{if(db.alive){db.update();db.draw();}});
  bubbles.forEach(b=>{if(b.alive){b.update();b.draw();}});
  for(let i=particles.length-1;i>=0;i--){let p=particles[i];p.update();p.draw();if(p.life<=0)particles.splice(i,1);}
  requestAnimationFrame(animate);
}
animate();

setInterval(spawnBubble, 1000);

window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

canvas.addEventListener('mousemove',e=>{
  const rect=canvas.getBoundingClientRect();
  mouseX=e.clientX-rect.left;
  mouseY=e.clientY-rect.top;
  bubbles.forEach(b=>{
    if(b.isMedia && Math.hypot(mouseX-b.x,mouseY-b.y)<b.radius){
      b.mediaElem.classList.add('hovered');
    } else if(b.isMedia && b.mediaElem) {
      b.mediaElem.classList.remove('hovered');
    }
  });
});

canvas.addEventListener('click',(e)=>{
  const rect=canvas.getBoundingClientRect();
  const mx=e.clientX-rect.left,my=e.clientY-rect.top;
  bubbles.forEach(b=>{
    if(b.alive&&Math.hypot(mx-b.x,my-b.y)<b.radius)
    {
      explodeBubble(b);
      
      let source = decodeURIComponent(new URL(b.mediaElem.src).pathname);
      source = source.replace(/^.*?Assets\//, "Assets/");
      console.log(source);
       PROJECTS.forEach(project => {
        console.log(project.video);

        if(project.video == source || project.poster == source)
        {
         console.log((project.video == source || project.poster == source));

             ApplyProjectDetails(project);
            ShowDisplay(PROJECT_SCREEN);
        }
           
       });
      console.log()
    }
  });
  decorBubbles.forEach(db=>{if(db.alive&&Math.hypot(mx-db.x,my-db.y)<db.radius)explodeBubble(db);});
});
