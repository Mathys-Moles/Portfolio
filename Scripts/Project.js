// ======== CONSTANTES ========
const MATHYS = '<a href="https://www.linkedin.com/in/mathys-moles/" target="_blank rel="noopener"">Mathys Moles</a>';
const CHLOE = '<a href="https://www.linkedin.com/in/chloe-sedoux/" target="_blank rel="noopener"">Chloé Sedoux</a>';
const MARCO = '<a href="https://www.linkedin.com/in/marco-lepever-264229312/" target="_blank rel="noopener"">Marco Lepever</a>';
const MUHAMMAD = '<a href="https://www.linkedin.com/in/muhammad-h-fayette-mikano-a51991365/" target="_blank rel="noopener"">Muhammad H Fayette-mikano</a>';
const JACOB = '<a href="https://www.linkedin.com/in/jacob-brugier-127242203/" target="_blank rel="noopener"">Jacob Brugier</a>';

const PROJECTS = [
    {
        Title: 'Shmup - Musical Game 🎵',
        description: '<b>Premier vrai projet 🚀</b><br>Sur ce projet, <b>j’ai été accompagné d’un sound designer 🎵</b>, et je n’ai pas trouvé de plus bel hommage que de <b>baser la totalité de mon jeu sur ses sons</b> .<br>Que ce soit <b>les mouvements des ennemis</b> jusqu’au moindre <b>comportement de l’espace de jeu</b>, <u><b>tout</b> est régi par le rythme et la musique</u> 🎶.',
        tags: ['Shmup', '2D', 'Musique'],
        collabs: [`Collaborateurs :`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE} <br> ${MATHYS}`],
        video: 'Assets/Demo/SHUMP _ MUSIC GAME.mp4',
        poster: 'Assets/background/TOURAKI_WEB.png'
    },
    {
        Title: 'Miam - Serious Game 🍄',
        description: `<b>Projet réalisé pour le Centre Entipoison Belge 🍯</b><br>Le but de ce projet était de rendre <b>l'apprentissage de la nutrition</b> <u>accessible et ludique</u>, tout en mettant en avant les <b>bienfaits des produits naturels</b> 🌿🍎.<br>Il vise également à <b>prévenir</b> contre les <u>différents dangers</u> ☠️, en apprenant à reconnaître <b>les aliments comestibles — ou non</b> ❌.`,
        tags: ['Card', '2D', 'Serious Game', 'OBG', 'Mobile'],
        collabs: [`Collaborateurs :`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Miam - Serious Game.mp4',
        poster: 'Assets/Demo/Miam - Serious Game.mp4'
    },
    {
        Title: 'remix ou est Charlie - Algo Crowd 🔍',
        description: `<b>Godot jame – Invisible</b> 👀.<br> Dans ce projet, nous avons décidé de tout miser sur <u>l’originalité</u> ✨, en déformant le thème <i>invisible</i>. Telle l’exprime <b>Edgar Allan Poe</b> – dans la nouvelle <em>L’Homme des foules</em>, être invisible peut simplement vouloir dire <u>ne pas être vu</u> , <i>perdre son identité</i>. J’ai donc étudié <b>l’algorithme de crowd</b> afin de donner une <u>vie</u> et un <u>comportement</u> à notre foule, avec laquelle le joueur pourra interagir.`,
        tags: ['Game Jame', '2D', 'Algorythme', 'Puzzel'],
        collabs: [`Collaborateurs :`, `GD : <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MUHAMMAD}`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4',
        poster: 'Assets/Demo/AlgoVersGamePlay-GameJam.mp4'
    },
    {
        Title: 'Tokotem - Sokoban',
        description: `<b>Premier projet avec plusieurs développeurs 👨‍💻👩‍💻</b><br>Nous avions peu de consignes sur ce projet, l’une d’entre elles était <u>la 2D</u>.<br>Nous voulions un <i>feature</i> simple mais apportant de nombreuses options à nos joueurs.<br>Alors nous avons décidé de donner aux joueurs une consigne aussi simple que "<b>vous pouvez grimper</b> 🧗".<br>De là, notre <b>level design</b> a gagné une nouvelle dimension, avec encore plus d’options ✨.`,
        tags: ['Puzzel', '2D', 'Sokoban', 'Fake 3D'],
        collabs: [`Collaborateurs :`, `${MATHYS} `, `${JACOB} `, `${MUHAMMAD}`],
        video: 'Assets/Demo/TOKOTEM_SOKOBAN.mp4',
        poster: 'Assets/Demo/TOKOTEM_SOKOBAN.mp4'
    },
    {
        Title: 'Hope - Survival Game 🐀',
        description: `<b>Prototype</b> réalisé en <u>collaboration</u> avec la Croix-Rouge ✚.<br>Ce projet est une <i>extension</i> de la campagne <b>"Vivre en 2050"</b>.<br>Nous avons tenté d’exprimer, par le <u>gameplay</u>, qu’il était temps d’agir, car les prochaines générations n’auront plus les mêmes opportunités que nous.<br>Le jeu imposera sa fin grâce au <i>level design</i>, épuisant les ressources du joueur en trois jours, et imposant une <b>défaite inévitable</b> 💀.`,

        tags: ['Serious Game', '2D', 'Survie', 'Naratif Game'],
        collabs: [`Collaborateurs :`, `GD : <br> ${MATHYS} <br>  ${MARCO}  <br>  ${MUHAMMAD}`, `Dev : <br> ${MATHYS}`, `Art : <br> ${CHLOE}`],
        video: 'Assets/Demo/Hope.mp4',
        poster: 'Assets/Demo/Hope.mp4'
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
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
        span.innerHTML = tag;
        span.classList.add("tag");
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
