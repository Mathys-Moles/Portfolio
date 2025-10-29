// ======== CONSTANTES ========
const MATHYS = '<a href="https://www.linkedin.com/in/mathys-moles/" target="_blank rel="noopener"">Mathys Moles</a>';
const CHLOE = '<a href="https://www.linkedin.com/in/chloe-sedoux/" target="_blank rel="noopener"">Chloé Sedoux</a>';
const MARCO = '<a href="https://www.linkedin.com/in/marco-lepever-264229312/" target="_blank rel="noopener"">Marco Lepever</a>';
const MUHAMMAD = '<a href="https://www.linkedin.com/in/muhammad-h-fayette-mikano-a51991365/" target="_blank rel="noopener"">Muhammad H Fayette-mikano</a>';
const JACOB = '<a href="https://www.linkedin.com/in/jacob-brugier-127242203/" target="_blank rel="noopener"">Jacob Brugier</a>';
const MAYSON = '<a href="https://www.linkedin.com/in/ma%C3%AFtson-pierre-749827300/" target="_blank rel="noopener"">Jacob Brugier</a>';


const PROJECTS = [

    {
        Title: 'Remix Where’s Waldo - Crowd Algo 🔍',
        resume: `<strong>Godot Jam – Invisible</strong> 👀.<br>For this project, I wanted to <em>reinvent a concept</em> to elevate it, which allowed me to discover<span style="color: #59cdacff; font-weight: bold;"> the beauty of the boids algorithm.</span>`,
        description: ` <p>In this project, we decided to focus entirely on <span class="highlight">originality</span> ✨, by twisting the theme <span class="highlight">Invisible</span>. As Edgar Allan Poe wrote in <em>The Man of the Crowd</em>, being invisible can also mean not being seen, losing one’s identity. I studied the <span class="highlight">crowd</span> algorithm to give life and behavior to our crowd, with which the player could interact.</p>

  <h4>Minimalist Artistic Direction</h4>
  <p>This project was a true <span class="highlight">visual challenge</span>. We had only 4 days and a part-time artist. To overcome this, I designed a system to create a fully varied crowd without multiplying assets. We used a <span class="highlight">neutral base body</span> and several accessories to generate unique, lively characters in the crowd.</p>
  <div class="image-placeholder">[Concept art or illustration]</div>

  <h4>Bringing the Crowd to Life</h4>
  <p>Animating each character manually would have been too costly. I implemented a subtle <span class="highlight">“shake” effect</span>, simulating walking and giving rhythm to the collective movement.</p>
  <div class="image-placeholder">[GIF or crowd animation]</div>

  <h4>Crowd Algorithm</h4>
  <p>The heart of the gameplay relies on the <span class="highlight">boids</span> algorithm, adapted to simulate believable social interactions. Each individual reacts to the player’s position while maintaining natural cohesion. This was my first real experience with <span class="highlight">real-time behavioral programming</span>.</p>
  <div class="image-placeholder">[Algorithm diagram or code]</div>

  <h4>Final Result</h4>
  <p>In just four days, we achieved a result true to our intention: expressing invisibility through the crowd. This experience confirmed my desire to specialize in <span class="highlight">gameplay programming</span> and emergent systems.</p>
  <div class="image-placeholder">[Final game screenshot]</div>`,
        tags: ['love/Game Jame','love/Algorithm', 'love/Puzzle','love/Solo Dev','engine/Godot','lang/C#'],
        collabs: [`Collaborators:`, `GD : <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MUHAMMAD}`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4',
        poster: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4'
    },
    {
        Title: 'Miam - Serious Game 🍄',
        resume: `  <strong>Project for the Belgian Poison Center 🍯</strong><br>
    I had to teach players various concepts, and I did everything to link it to an experience that was both 
    <em>fun</em> and <span style="color: #59cdacff; font-weight: bold;">innovative</span>, so that anyone could enjoy it.`,
        description: ` <p>Project realized for the <span class="highlight">Belgian Poison Center</span> 🍯. The goal of this project was to make <span class="highlight">learning about nutrition</span> accessible and fun, while highlighting the <span class="highlight">benefits of natural products</span> 🌿🍎. It also aimed to <span class="highlight">prevent food hazards</span> ☠️, teaching players to recognize <span class="highlight">edible</span> — or not ❌ — foods.</p>

  <h4>Main Challenge</h4>
  <p>The biggest difficulty was figuring out how to teach such a <span class="highlight">complex</span> topic through a simple <span class="highlight">mobile game</span>, while keeping the <span class="highlight">player engaged</span>. To do this, I explored all my <span class="highlight">constraints</span> to respond effectively:</p>
  <ul>
    <li>The game had to run on <span class="highlight">old phones</span> to reach as many users as possible.</li>
    <li>It had to be <span class="highlight">fun</span>, with a <span class="highlight">simple mechanic</span> familiar to users.</li>
    <li>Players had to <span class="highlight">actually progress</span> and see their <span class="highlight">growth</span>.</li>
  </ul>
  <div class="image-placeholder">[Diagram or mockup of technical constraints]</div>

  <h4>Exploring Mechanics</h4>
  <p>To achieve these goals, I explored several options. I first considered <span class="highlight">titier</span> (a word meaning “desire to win”), then a <span class="highlight">multiplayer game</span>.</p>
  <p>The multiplayer approach had several advantages: learning with <span class="highlight">friends</span> or <span class="highlight">family</span> increases <span class="highlight">motivation</span>. I then imagined a <span class="highlight">TCG (Trading Card Game)</span> so players could <span class="highlight">compete</span> and <span class="highlight">learn while having fun</span>: <strong>Learn to Win</strong>.</p>
  <div class="image-placeholder">[Example of card or TCG gameplay]</div>

  <h4>Limits of Multiplayer</h4>
  <p>But this approach posed several problems:</p>
  <ul>
    <li>The player would need to <span class="highlight">know someone</span> to start, limiting the <span class="highlight">potential audience</span>.</li>
    <li>The <span class="highlight">educational core</span> had to be hidden in the TCG without making it too complex.</li>
  </ul>
  <p>I kept the idea of <span class="highlight">cards</span>, but with a <span class="highlight">solo</span> approach.</p>

  <h4>Birth of “Eat or Not” Concept</h4>
  <p>Inspired by <span class="highlight">dating apps</span>, I found that the <span class="highlight">like/dislike</span> system was simple and now <span class="highlight">intuitive</span> for many users. Thus was born my concept: <strong><span class="highlight">Eat or Not</span></strong>.</p>
  <p>To make it more engaging, I added a <span class="highlight">humorous layer</span> and a <span class="highlight">survival system</span>: the player must <span class="highlight">survive</span> as long as possible, eating <span class="highlight">natural products</span> to maximize <span class="highlight">points</span> without dying.</p>
  <div class="image-placeholder">[Final gameplay mockup]</div>

  <h4>Result</h4>
  <p>This project allowed me to combine <span class="highlight">pedagogy</span>, <span class="highlight">game design</span>, and <span class="highlight">technical constraints</span>. By simplifying <span class="highlight">gameplay</span>, keeping <span class="highlight">learning</span> central, and adding a <span class="highlight">humorous and survival</span> dimension, I created a <span class="highlight">accessible</span>, <span class="highlight">fun</span>, and <span class="highlight">educational</span> game that runs on a wide range of phones and keeps players <span class="highlight">engaged</span> while learning.</p>
  <div class="image-placeholder">[Final game screenshot]</div>`,
        tags: ['love/Serious Game', 'love/OBG' , 'love/Solo Dev', 'engine/Mobile','engine/Godot','lang/C#' ],
        collabs: [`Collaborators:`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Miam - Serious Game.mp4',
        poster: 'Assets/Demo/Miam - Serious Game.mp4'
    },
    {
        Title: 'Hope - Survival Game 🐀',
        resume: `   <strong>Prototype created with the Red Cross ✚</strong><br>
    I wanted to deliver a strong message through <u>gameplay</u>: 
    <span style="color: #e74c3c; font-weight: bold;">it’s time to act</span>.  
    The game ends with an <span style="color: #8e44ad; font-weight: bold;">inevitable defeat 💀</span>, 
    reminding that resources are not infinite.`,
        description: `  <p>Prototype developed in collaboration with the <span class="highlight">Red Cross ✚</span>. This project extends the campaign <span class="highlight">"Living in 2050"</span>. We wanted to deliver a strong message through <span class="highlight">gameplay</span>: <strong>it’s time to act</strong>.  
  The game ends with an <span class="highlight">inevitable defeat 💀</span>, reminding that <span class="highlight">resources are not infinite</span>.</p>

  <h4>Project Context</h4>
  <p>We had to create a game to support the <span class="highlight">"Living in 2050"</span> campaign by the Red Cross, an initiative raising awareness about <span class="highlight">climate challenges</span> and their human consequences.  
  The campaign aimed to encourage everyone to <span class="highlight">think today</span> about the actions needed to build a sustainable future.  
  However, we only had <span class="highlight">two days</span> to design a <span class="highlight">pitch</span> and a <span class="highlight">playable prototype</span>.</p>
  <div class="image-placeholder">[Poster or visual for "Living in 2050" campaign]</div>

  <h4>Project Challenge</h4>
  <p>The project had to be <span class="highlight">ultra-accessible</span>:  
  playable by <span class="highlight">everyone</span> in a very short time, while <span class="highlight">making a deep impression on players</span>.  
  We needed to create an experience that sparked <span class="highlight">reflection</span> and encouraged players to <span class="highlight">research the topic</span> themselves.</p>
  <ul>
    <li>Accessible to a <span class="highlight">wide audience</span>.</li>
    <li><span class="highlight">Short</span> but <span class="highlight">impactful</span> experience.</li>
    <li><span class="highlight">Emotional</span> and <span class="highlight">memorable</span> message.</li>
  </ul>
  <div class="image-placeholder">[Simple and accessible UI mockup]</div>

  <h4>Game Concept</h4>
  <p>Players control a <span class="highlight">young orphan girl</span> affected by <span class="highlight">climate migration</span>.  
  They must <span class="highlight">survive as long as possible</span> in a city, relying on <span class="highlight">inhabitants</span> and available <span class="highlight">resources</span>.</p>

  <p>The game occurs in two distinct phases:</p>
  <ul>
    <li><span class="highlight">Day phase:</span> explore the city, interact with inhabitants, discover their stories and acts of cooperation. Dialogue evolves daily, reinforcing <span class="highlight">solidarity</span> and <span class="highlight">resilience</span>.</li>
    <li><span class="highlight">Night phase:</span> manage collected resources to <span class="highlight">survive</span> until the next day.</li>
  </ul>
  <div class="image-placeholder">[Day/Night gameplay phase diagram]</div>

  <p>Each day reflects the <span class="highlight">consequences</span> of the player’s previous actions, creating a natural <span class="highlight">learning loop</span>.  
  This progression makes every attempt more <span class="highlight">meaningful</span>.</p>

  <h4>An Inevitable Ending</h4>
  <p>To reinforce the campaign’s message — <strong>act now, not in 2050</strong> — we designed a <span class="highlight">level design</span> that <span class="highlight">gradually depletes resources</span>.  
  No matter the strategy, the player cannot <span class="highlight">survive more than three days</span>.  
  This <span class="highlight">inevitable death</span> embodies the idea that, despite good intentions, <span class="highlight">if we don’t act today</span>, future generations cannot be saved.</p>
  <div class="image-placeholder">[End screen showing inevitable defeat]</div>

  <h4>Result</h4>
  <p>In just <span class="highlight">two days</span>, we created a prototype that is <span class="highlight">emotional</span> and <span class="highlight">impactful</span>, using <span class="highlight">gameplay</span> as a genuine <span class="highlight">vehicle for social message</span>.  
  This project reinforced my belief that <span class="highlight">video games</span> are a <span class="highlight">powerful medium</span> to <span class="highlight">educate</span>, <span class="highlight">move</span>, and <span class="highlight">make people think</span>.</p>
  <div class="image-placeholder">[Final prototype screenshot or title screen]</div>`,
        tags: ['love/Serious Game','love/Survival', 'love/Narrative Game','engine/Godot','lang/C#'],
        collabs: [`Collaborators:`, `Dev :  <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MAYSON}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Hope.mp4',
        poster: 'Assets/Demo/Hope.mp4'
    },
    {
        Title: 'Tokotem - Sokoban',
        resume: ` <strong>First project with multiple developers 👨‍💻👩‍💻</strong><br>
    We wanted to make a <em>simple promise</em> to our players, but one that meant a lot.  
    So we told them: <span style="color: #59cdacff; font-weight: bold;">“You can climb.”</span><br>
    For this, <span style="color: #59cdacff; font-weight: bold;">I had to create an entire system and a <em>3D logic</em> inside a 2D engine</span>`,
        description: ` <p>First project with multiple <span class="highlight">developers 👨‍💻👩‍💻</span>.  
  We had few guidelines, except one: the game had to be <span class="highlight">2D</span>.  
  We wanted to offer players a <span class="highlight">simple mechanic</span>, yet rich in possibilities.  
  This gave birth to our promise: <strong>“You can climb.” 🧗</strong></p>
  <div class="image-placeholder">[Team image or project prototype]</div>

  <h4>Simple Concept, Ambitious Execution</h4>
  <p>We wanted this simple phrase to open <span class="highlight">new gameplay and level design perspectives</span>.  
  To achieve this, I had to create <span class="highlight">3D logic inside a 2D engine</span> — a real technical but exciting challenge.</p>

  <h4>Major Technical Challenges</h4>
  <p>This project proved far more complex than a simple <span class="highlight">Sokoban</span>.  
  My team and I took a <span class="highlight">risky but unique approach</span>: recreating <span class="highlight">3D depth</span> in a 2D world.</p>

  <p>Our game relied on a <span class="highlight">specific camera angle</span>, requiring manipulation of <span class="highlight">transformation matrices</span> to properly place grid tiles.  
  Once this base was set, we had to design a coherent <span class="highlight">physical relief</span> allowing players and boxes to move in “3D”.</p>
  <div class="image-placeholder">[Grid system diagram or simulated 3D visualization]</div>

  <p>To do this, I devised a <span class="highlight">simple but effective logical calculation</span>, linking “visual” coordinates to <span class="highlight">actual positions</span> in the game space.  
  This system became the core of the <span class="highlight">spatial simulation</span>.</p>

  <h4>Explosion of Possibilities</h4>
  <p>Our mechanic seemed simple but generated a <span class="highlight">huge variety of situations</span>: over <span class="highlight">50 configurations</span> possible, with different <span class="highlight">levels</span> (0 to 3), <span class="highlight">stacked blocks</span>, <span class="highlight">climbing directions</span>, and <span class="highlight">target blocks</span>.</p>
  <div class="image-placeholder">[Illustration of different block configurations]</div>

  <p>I had to write <span class="highlight">highly modular code</span> to maintain a clear and adaptable structure.  
  But this also complicated <span class="highlight">pathfinding</span>.</p>

  <h4>Final Result</h4>
  <p>The result was extremely satisfying: players could <span class="highlight">climb, move, push</span> and <span class="highlight">solve puzzles</span> that seemed impossible at first.  
  This project taught me <span class="highlight">level design, modular programming, and 2D/3D logic</span>, a solid foundation for future projects.</p>
  <div class="image-placeholder">[Final playable level screenshot]</div>`,
        tags: ['love/Puzzle','love/CoDev','love/Logic', 'engine/Godot','lang/C#'],
        collabs: [`Collaborators:`, `Dev :  <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MUHAMMAD}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/TOKOTEM_SOKOBAN.mp4',
        poster: 'Assets/Demo/Tokotem.mp4'
    },
    {
        Title: 'Shmup - Shoot Them Up 🚀',
        resume: `<strong>First solo project</strong> 👨‍💻.<br>
    I wanted to <em>combine speed, visuals, and feedback</em>.  
    This project was the perfect laboratory for <span style="color: #59cdacff; font-weight: bold;">gameplay programming</span> experimentation.`,
        description: ` <p>My first solo project, developed to experiment with <span class="highlight">gameplay programming</span>.  
  The goal was to create a <span class="highlight">fast-paced</span>, visually stimulating <span class="highlight">shoot-em-up</span> with a focus on <span class="highlight">player feedback</span>.</p>

  <h4>Core Concept</h4>
  <p>The central idea was simple: <span class="highlight">give the player pleasure in shooting</span>.  
  For that, I worked on <span class="highlight">particle effects, camera shake, and sound feedback</span> to make every shot feel impactful.</p>
  <div class="image-placeholder">[Gameplay screenshot with particles]</div>

  <h4>Gameplay Loop</h4>
  <p>Players face waves of enemies with increasing difficulty.  
  Each wave is designed to <span class="highlight">challenge reflexes and strategy</span>, forcing the player to <span class="highlight">adapt and react quickly</span>.  
  I added a <span class="highlight">combo system</span> rewarding precision and chaining actions.</p>
  <div class="image-placeholder">[Wave progression diagram]</div>

  <h4>Visual and Feedback Experimentation</h4>
  <p>Shmup served as a <span class="highlight">testbed</span> for various <span class="highlight">feedback systems</span>:</p>
  <ul>
    <li><span class="highlight">Particles</span> on hit, destruction, and explosions.</li>
    <li><span class="highlight">Camera shake</span> for heavy hits or boss phases.</li>
    <li><span class="highlight">Score and combo UI</span> with dynamic feedback.</li>
  </ul>
  <div class="image-placeholder">[Particle and UI screenshots]</div>

  <h4>Result</h4>
  <p>This project strengthened my skills in <span class="highlight">gameplay feel, polish, and solo development</span>.  
  It also reinforced my <span class="highlight">love for programming interactivity and player experience</span>.</p>
  <div class="image-placeholder">[Final gameplay screenshot]</div>`,
        tags: ['love/Solo Dev','love/Action','love/Gameplay', 'engine/Godot','lang/C#'],
        collabs: [`Collaborators:`, `Dev :  <br> ${MATHYS}`],
        video: 'Assets/Demo/SHUMP _ MUSIC GAME.mp4',
        poster: 'Assets/Demo/Shmup.mp4'
    },
];




// ======== AJOUT DES PROJETS ========
const CONTAINER = document.getElementById("Projects");
let tags = new Map();
tags.set("All",[]);
AddProjects();

function AddProjects(projects = PROJECTS) {
    projects.forEach(project => {
        
        let card = document.createElement('div');
        card.classList.add('projectCard');
        card.innerHTML = `
            <video autoplay muted loop src="${project.video}" poster="${project.poster}"></video>
            <h3><u>${project.Title}</u></h3>
            <p>${project.resume}</p>
            <div class="tags">
                ${
                     project.tags.map(tag => {
                       if( tags.has(tag))
                       {
                            tags.get(tag).push(card);
                       }
                       else
                    {
                        tags.set(tag,[card]);
                    }
                        tags.get("All").push(card);
                    const [classe, text] = tag.split('/');
                     return `<span class="${classe} tag">${text}</span>`;
                    })
                    .join('')}
            </div>
        `;
        CONTAINER.appendChild(card);
        card.addEventListener("click", () => {
            ApplyProjectDetails(project);
            ShowDisplay(PROJECT_SCREEN);
        });
    });
}

// ======== TAGS SELECTOR ========
let tagsSelectorSection = document.getElementById("ButtonTagsContainer");

let tagbuttons = new Set();
function CreateTagsSelector()
{
   Array.from(tags.keys()).forEach(tag => {
    if(tags.get(tag).length <= 1) return; 
    let button = document.createElement("button");
    
    button.classList.add("tagButton");
    tagbuttons.add(button);

    button.innerHTML = tag.includes("/") ? tag.split("/")[1] : tag;
    button.addEventListener("click", () => {
       ApplyFilter(tag);
       tagbuttons.forEach(btn => btn.classList.remove('active'));
       button.classList.add('active');
    })
   tagsSelectorSection.appendChild(button);
})
}
CreateTagsSelector();

function ApplyFilter(filter) {
    // Parcours toutes les cartes
    document.querySelectorAll(".projectCard").forEach(card => {
        card.style.display = "none"; // on cache tout d'abord
    });

    // Montre uniquement les cartes correspondant au filtre
    if (tags.has(filter)) {
        tags.get(filter).forEach(card => {
            card.style.display = "flex";
        });
    }
}
// ======== ECRAN DU PROJET ========
const PROJECT_SCREEN = document.getElementById("ProjectScreen");
PROJECT_SCREEN.style.display = "none";
PROJECT_SCREEN.style.opacity = "0";

PROJECT_SCREEN.addEventListener("click", (event) => {
    if (event.target == PROJECT_SCREEN) HideDisplay(PROJECT_SCREEN);
});

function HideDisplay(element) {
    element.style.opacity = "0";
    setTimeout(() => { element.style.display = "none"; }, 500);
}

function ShowDisplay(element) {
    element.style.display = "";
    setTimeout(() => { element.style.opacity = "1"; }, 100);
}

// ======== ELEMENTS DU DÉTAIL ========
const PROJECT_TITLE = document.getElementById("ProjectTitel");
const PROJECT_TAGS = document.getElementById("SideTags");
const PROJECT_GAMEPLAY = document.getElementById("Gamplay");
const PROJECT_DESCRIPTION = document.getElementById("ProjectDescrib");
const PROJECT_COLLABS = document.getElementById("SideCollab");

function ApplyProjectDetails(project) {
    PROJECT_TITLE.innerHTML = project.Title;
    PROJECT_GAMEPLAY.src = project.video;
    PROJECT_DESCRIPTION.innerHTML = project.description;

    PROJECT_TAGS.innerHTML = "";
    project.tags.forEach(tag => {
        let span = document.createElement("span");
        const [classe, text] = tag.split('/');
        span.innerHTML = text;
        span.classList.add("tag");
        span.classList.add(classe);

        PROJECT_TAGS.appendChild(span);
    });

    PROJECT_COLLABS.innerHTML = "";
    project.collabs.forEach(collab => {
        let span = document.createElement("span");
        span.innerHTML = collab;
        span.classList.add("collab");
        PROJECT_COLLABS.appendChild(span);
    });
}
