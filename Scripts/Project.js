// ======== CONSTANTES ========
const MATHYS = '<a href="https://www.linkedin.com/in/mathys-moles/" target="_blank rel="noopener"">Mathys Moles</a>';
const CHLOE = '<a href="https://www.linkedin.com/in/chloe-sedoux/" target="_blank rel="noopener"">Chloé Sedoux</a>';
const MARCO = '<a href="https://www.linkedin.com/in/marco-lepever-264229312/" target="_blank rel="noopener"">Marco Lepever</a>';
const MUHAMMAD = '<a href="https://www.linkedin.com/in/muhammad-h-fayette-mikano-a51991365/" target="_blank rel="noopener"">Muhammad H Fayette-mikano</a>';
const JACOB = '<a href="https://www.linkedin.com/in/jacob-brugier-127242203/" target="_blank rel="noopener"">Jacob Brugier</a>';
const MAYSON = '<a href="https://www.linkedin.com/in/ma%C3%AFtson-pierre-749827300/" target="_blank rel="noopener"">Jacob Brugier</a>';


const PROJECTS = [

    {
        Title: 'remix ou est Charlie - Algo Crowd 🔍',
        resume: `<strong>Godot Jam – Invisible</strong> 👀.<br>Pour ce projet, j'ai voulu <em>réinventer un concept</em> pour le sublimer, ce qui m'a permis de découvrir<span style="color: #59cdacff; font-weight: bold;"> la beauté de l'algorithme de boids.</span>`,
description: ` <p>Dans ce projet, nous avons décidé de tout miser sur l’<span class="highlight">originalité</span> ✨, en déformant le thème <span class="highlight">Invisible</span>. Comme l’écrivait Edgar Allan Poe dans <em>L’Homme des foules</em>, être invisible peut aussi vouloir dire ne pas être vu, perdre son identité. J’ai étudié l’algorithme de <span class="highlight">crowd</span> afin de donner vie et comportement à notre foule, avec laquelle le joueur pouvait interagir.</p>

  <h4>Direction artistique minimaliste</h4>
  <p>Ce projet fut un vrai <span class="highlight">challenge visuel</span>. Nous n’avions que 4 jours et un artiste à temps partiel. Pour pallier ce manque, j’ai conçu un système permettant d’obtenir une foule entièrement variée sans multiplier les assets. Nous avons utilisé un <span class="highlight">corps de base neutre</span> et plusieurs accessoires pour générer des humains uniques et vivants dans la foule.</p>
  <div class="image-placeholder">[Image de concept art ou illustration]</div>

  <h4>Donner vie à la foule</h4>
  <p>L’animation manuelle de chaque personnage aurait été trop coûteuse. J’ai mis en place un effet de <span class="highlight">“shake” subtil</span>, simulant la marche et donnant du rythme au mouvement collectif.</p>
  <div class="image-placeholder">[GIF ou animation de la foule]</div>

  <h4>Algorithme de crowd</h4>
  <p>Le cœur du gameplay repose sur l’algorithme de <span class="highlight">boids</span>, adapté pour simuler des interactions sociales crédibles. Chaque individu réagit à la position du joueur tout en conservant une cohésion naturelle. Ce fut ma première vraie expérience avec la <span class="highlight">programmation comportementale en temps réel</span>.</p>
  <div class="image-placeholder">[Schéma de l’algorithme ou code]</div>

  <h4>Résultat final</h4>
  <p>En seulement quatre jours, nous avons atteint un rendu fidèle à notre intention : exprimer l’invisibilité à travers la foule. Cette expérience a confirmé mon envie de me spécialiser dans la <span class="highlight">programmation gameplay</span> et les systèmes émergents.</p>
  <div class="image-placeholder">[Capture finale du jeu]</div>`,
        tags: ['love/Game Jame','love/Algorythme', 'love/Puzzel','engine/Godot','lang/C#'],
        collabs: [`Collaborateurs :`, `GD : <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MUHAMMAD}`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4',
        poster: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4'
    },
    {
        Title: 'Miam - Serious Game 🍄',
        resume: `  <strong>Projet réalisé pour le Centre Antipoison Belge 🍯</strong><br>
    Je devais apprendre à mes joueurs différents concepts, et j'ai tout fait pour lier cela à une expérience à la fois 
    <em>fun</em> et <span style="color: #59cdacff; font-weight: bold;">innovante</span>, afin que tout le monde puisse y jouer.`,
        description: ` <p>Projet réalisé pour le <span class="highlight">Centre Antipoison Belge</span> 🍯. Le but de ce projet était de rendre l'<span class="highlight">apprentissage de la nutrition</span> accessible et ludique, tout en mettant en avant les <span class="highlight">bienfaits des produits naturels</span> 🌿🍎. Il vise également à <span class="highlight">prévenir contre les dangers alimentaires</span> ☠️, en apprenant à reconnaître les aliments <span class="highlight">comestibles</span> — ou non ❌.</p>

  <h4>Le challenge principal</h4>
  <p>La plus grande difficulté a été de trouver comment enseigner un sujet aussi <span class="highlight">complexe</span> à travers un simple <span class="highlight">jeu mobile</span>, tout en gardant le <span class="highlight">joueur engagé</span> sur l’application. Pour cela, j’ai exploré toutes mes <span class="highlight">contraintes</span> afin de mieux y répondre :</p>
  <ul>
    <li>Le jeu devait tourner sur de <span class="highlight">vieux téléphones</span> afin de toucher un maximum d’utilisateurs.</li>
    <li>Il devait être <span class="highlight">fun</span>, avec une <span class="highlight">mécanique simple</span> que l’utilisateur connaissait déjà.</li>
    <li>Il fallait que les joueurs <span class="highlight">progressent réellement</span> et puissent constater leur <span class="highlight">évolution</span>.</li>
  </ul>
  <div class="image-placeholder">[Schéma ou mockup des contraintes techniques]</div>

  <h4>Exploration des mécaniques</h4>
  <p>Pour atteindre ces objectifs, j’ai exploré plusieurs possibilités. J’ai d’abord pensé à <span class="highlight">titier</span> (un mot signifiant “l’envie de gagner”), puis à un <span class="highlight">jeu multijoueur</span>.</p>
  <p>L’approche multijoueur présentait plusieurs avantages : apprendre avec des <span class="highlight">amis</span> ou <span class="highlight">proches</span> favorise la <span class="highlight">motivation</span>. J’ai donc imaginé un <span class="highlight">TCG (Trading Card Game)</span> pour que les joueurs puissent <span class="highlight">s’affronter</span> et <span class="highlight">apprendre en s’amusant</span> : <strong>Learn to Win</strong>.</p>
  <div class="image-placeholder">[Exemple de carte ou gameplay TCG]</div>

  <h4>Les limites du multijoueur</h4>
  <p>Mais cette approche posait plusieurs problèmes :</p>
  <ul>
    <li>Le joueur aurait besoin de <span class="highlight">connaître quelqu’un</span> avec qui se lancer, ce qui réduisait ma <span class="highlight">clientèle potentielle</span>.</li>
    <li>Il fallait réussir à <span class="highlight">camoufler le cœur pédagogique</span> du jeu dans le TCG sans rendre le concept trop complexe.</li>
  </ul>
  <p>J’ai donc conservé l’idée des <span class="highlight">cartes</span>, mais avec une approche <span class="highlight">solo</span>.</p>

  <h4>Naissance du concept « Tu manges ou tu ne manges pas »</h4>
  <p>En m’inspirant des <span class="highlight">sites de rencontre</span>, j’ai trouvé que le système de <span class="highlight">like / dislike</span> était très simple à prendre en main et désormais <span class="highlight">naturel</span> pour beaucoup d’utilisateurs. C’est ainsi qu’est né mon concept : <strong><span class="highlight">Tu manges ou tu ne manges pas</span></strong>.</p>
  <p>Pour rendre le concept encore plus engageant, j’ai ajouté une <span class="highlight">couche humoristique</span> et un <span class="highlight">système de survie</span> : le joueur doit <span class="highlight">survivre</span> le plus longtemps possible, en se <span class="highlight">nourrissant de produits naturels</span> pour maximiser ses <span class="highlight">points</span> sans mourir.</p>
  <div class="image-placeholder">[Mockup gameplay final]</div>

  <h4>Résultat</h4>
  <p>Ce projet m’a permis d’allier <span class="highlight">pédagogie</span>, <span class="highlight">game design</span> et <span class="highlight">contraintes techniques</span>. En simplifiant le <span class="highlight">gameplay</span>, en gardant l’<span class="highlight">apprentissage</span> au cœur de l’expérience et en ajoutant une dimension <span class="highlight">humoristique</span> et de <span class="highlight">survie</span>, j’ai pu créer un jeu <span class="highlight">accessible</span>, <span class="highlight">amusant</span> et <span class="highlight">éducatif</span>, qui fonctionne sur une large gamme de téléphones et garde les joueurs <span class="highlight">engagés</span> tout en apprenant.</p>
  <div class="image-placeholder">[Capture finale du jeu]</div>`,
        tags: ['love/Serious Game', 'love/OBG' , 'love/Solo Dev', 'engine/Mobile','engine/Godot','lang/C#' ],
        collabs: [`Collaborateurs :`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Miam - Serious Game.mp4',
        poster: 'Assets/Demo/Miam - Serious Game.mp4'
    },
    {
        Title: 'Hope - Survival Game 🐀',
        resume: `   <strong>Prototype réalisé avec la Croix-Rouge ✚</strong><br>
    J’ai voulu faire passer un message fort à travers le <u>gameplay</u> : 
    <span style="color: #e74c3c; font-weight: bold;">il est temps d’agir</span>.  
    Le jeu se termine par une <span style="color: #8e44ad; font-weight: bold;">défaite inévitable 💀</span>, 
    rappelant que les ressources ne sont pas infinies.`,
        description: `<b>Prototype</b> réalisé en <u>collaboration</u> avec la Croix-Rouge ✚.<br>Ce projet est une <i>extension</i> de la campagne <b>"Vivre en 2050"</b>.<br>Nous avons tenté d’exprimer, par le <u>gameplay</u>, qu’il était temps d’agir, car les prochaines générations n’auront plus les mêmes opportunités que nous.<br>Le jeu imposera sa fin grâce au <i>level design</i>, épuisant les ressources du joueur en trois jours, et imposant une <b>défaite inévitable</b> 💀.`,
        tags: ['love/Serious Game','love/Survie', 'love/Naratif Game','engine/Godot','lang/C#'],
        collabs: [`Collaborateurs :`, `Dev :  <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MAYSON}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Hope.mp4',
        poster: 'Assets/Demo/Hope.mp4'
    },
    {
        Title: 'Tokotem - Sokoban',
        resume: ` <strong>Premier projet avec plusieurs développeurs 👨‍💻👩‍💻</strong><br>
    Nous avons voulu faire une <em>promesse simple</em> à nos joueurs, mais qui voulait dire beaucoup.  
    Alors nous leur avons dit : <span style="color: #59cdacff; font-weight: bold;">« Tu peux grimper. »</span><br>
    Pour cela, <span style="color: #59cdacff; font-weight: bold;">j'ai dû créer tout un système et une <em>logique 3D</em> dans un moteur 2D</span>`,
        description: `<b>Premier projet avec plusieurs développeurs 👨‍💻👩‍💻</b><br>Nous avions peu de consignes sur ce projet, l’une d’entre elles était <u>la 2D</u>.<br>Nous voulions un <i>feature</i> simple mais apportant de nombreuses options à nos joueurs.<br>Alors nous avons décidé de donner aux joueurs une consigne aussi simple que "<b>vous pouvez grimper</b> 🧗".<br>De là, notre <b>level design</b> a gagné une nouvelle dimension, avec encore plus d’options ✨.`,
        tags: ['love/Puzzel', 'love/2D', 'love/Sokoban', 'love/Fake 3D','engine/Godot','lang/C#'],
        collabs: [`Collaborateurs :`, `${MATHYS} `, `${JACOB} `, `${MUHAMMAD}`],
        video: 'Assets/Demo/TOKOTEM_SOKOBAN.mp4',
        poster: 'Assets/Demo/TOKOTEM_SOKOBAN.mp4'
    },
 
    {
        Title: 'Shmup - Musical Game 🎵',
        resume: '  <strong>Premier projet 🚀</strong><br>Pour moi, il faut toujours <em>exploiter au maximum les armes</em> qui sont mises à notre disposition.<span style="color: #59cdacff; font-weight: bold;"> J ai donc codé tout un système pour que tout puisse être <em>lié aux sons</em>.</span>',
        description: '<p><b>Premier vrai projet 🚀</b><br>Sur ce projet, <b>j’ai été accompagné d’un sound designer 🎵</b>, et je n’ai pas trouvé de plus bel hommage que de <b>baser la totalité de mon jeu sur ses sons</b> .<br>Que ce soit <b>les mouvements des ennemis</b> jusqu’au moindre <b>comportement de l’espace de jeu</b>, <u><b>tout</b> est régi par le rythme et la musique</u> 🎶.</p>',
        tags: ['love/Shmup', 'love/Musique', 'love/Solo Dev','engine/Godot','lang/C#' ],
        collabs: [`Collaborateurs :`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE} <br> ${MATHYS}`],
        video: 'Assets/Demo/SHUMP _ MUSIC GAME.mp4',
        poster: 'Assets/background/TOURAKI_WEB.png'
    },
];

// ======== AJOUT DES PROJETS ========
const CONTAINER = document.getElementById("Projects");
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
