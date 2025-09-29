//=========================
// VARIABLES
//=========================
//Current
let texteBar = document.getElementById("TexteBar");
let switchText = document.getElementById("SwitchTexte");

const frSections = ["Mathys Moles.", "Gameplay programmeur.", "Modulaire.", "Passionne.", "Motive.", "Game designer.", "Etudiant a ISART DIGITAL."];
const enSections = ["Mathys Moles.", "a Gameplay Programmer.", "Modular.", "Passionate.", "Motivated.", "a Game Designer.", "Student at ISART DIGITAL."];

let currentLang = true;
let sections;

let badgeButton = Array.from(document.getElementsByClassName("badge"));
let badgeToTexte = {};
badgeButton.forEach(badge => {
    badgeToTexte[badge.dataset.type] = badge.dataset.type;
});

let conteneur = document.getElementById("switchAbout");
let paragraphes = conteneur.querySelectorAll("p");

let translationsData = null;
let lang = currentLang ? "fr" : "en";

//=========================
// FONCTIONS UTILES
//=========================
function Flashing(pObject, pInterval, pInitColor, pEndColor, pLoop = false) {
    pObject.style.transition = `${pInterval * 0.001}s ease`;
    if (pLoop) {
        setInterval(() => {
            pObject.style.color = (pObject.style.color === pInitColor) ? pEndColor : pInitColor;
        }, pInterval);
    }
}

function BackFlashing(pObject, pInterval, pEndColor) {
    pObject.style.transition = `${pInterval * 0.001}s ease`;
    let lColor = pObject.style.backgroundColor;
    pObject.style.backgroundColor = pEndColor;
    setTimeout(() => {
        pObject.style.backgroundColor = lColor;
    }, pInterval);
}

function EraseTextGradually(pElement, pWord, pInterval = 200) {
    let text = pElement.textContent;
    const eraser = setInterval(() => {
        if (text.length > 0) {
            text = text.slice(0, -1);
            pElement.textContent = text;
        } else {
            clearInterval(eraser);
            WriteTextGradually(pElement, pWord, pInterval);
        }
    }, pInterval);
}

function WriteTextGradually(pElement, pWord, pInterval = 200) {
    let lLength = pWord.length;
    let count = 0;
    const lWriter = setInterval(() => {
        if (count < lLength) {
            count++;
            pElement.innerHTML = pWord.slice(0, count);
        } else {
            clearInterval(lWriter);
        }
    }, pInterval);
}

//=========================
// CHARGEMENT ET TRADUCTION
//=========================
async function loadTranslations() {
    lang = currentLang ? "fr" : "en";
    const response = await fetch("../Traduction/" + lang + ".json");
    translationsData = await response.json();
}

async function ChangeLang() {
    currentLang = !currentLang;
    sections = currentLang ? frSections : enSections;
    await loadTranslations();

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.innerHTML = translationsData[key];
    });
}

//=========================
// BOUCLE SECTIONS
//=========================
ChangeLang();

Flashing(texteBar, 500, "rgb(255, 255, 255)", "rgba(255, 255, 255, 0)", true);

setTimeout(() => {
    let lCount = 0;
    setInterval(() => {
        lCount++;
        if (lCount > sections.length - 1) lCount = 0;
        EraseTextGradually(switchText, sections[lCount], 100);
    }, 5000);
}, 3000);

//=========================
// BADGES
//=========================
badgeButton.forEach(element => {
    element.addEventListener("click", async () => {
        if (!translationsData) await loadTranslations();
        const key = element.dataset.type;

        let count = 0;
        paragraphes.forEach(p => {
            const bTexte = translationsData[`${key}${count}`];
            console.log(`${key}${count}`);

            EraseTextGradually(p, bTexte, 10);
            count++;
        });
    });
});

//=========================
// CONTACTS
//=========================
document.getElementById("ContactButton").addEventListener("click", () => {
    let contacts = Array.from(document.getElementsByClassName("contactSection"));
    contacts.forEach(element => {
        BackFlashing(element, 1000, "rgb(255, 255, 255)");
        element.style.transform = "scale(1.1)";
        setTimeout(() => { element.style.transform = "scale(1)"; }, 500);
    });
});

//=========================
// SCROLL
//=========================
let elements = Array.from(document.getElementsByClassName("ProjectButton"));
elements.forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById("Projects").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.getElementById("AboutButton").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("HomePageButton").addEventListener("click", () => {
    document.getElementById("HomePage").scrollIntoView({ behavior: "smooth", block: "start" });
});

const SCROLL_BUTTON = document.getElementById("ScrollButton");
let scrollValue = window.innerHeight;
SCROLL_BUTTON.addEventListener("click", () => {
    window.scrollBy({ top: scrollValue, left: 0, behavior: "smooth" });
});

const buttons = document.querySelectorAll("nav p.button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        SCROLL_BUTTON.style.transform = "rotate(180deg)";
        scrollValue = -document.documentElement.scrollHeight;
    } else {
        SCROLL_BUTTON.style.transform = "rotate(0deg)";
        scrollValue = window.innerHeight;
    }
});

//=========================
// FADE-UP INTERSECTION
//=========================
document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById('about');
    const elements = section.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elements.forEach((el, i) => {
                    setTimeout(() => el.classList.add('in'), i * 70);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section);
});

//=========================
// MAIL
//=========================
document.getElementById("SendMail").addEventListener("click", () => {
    window.location.href = "mailto:mathysmoles@gmail.com";
    setTimeout(() => { navigator.clipboard.writeText("mathysmoles@gmail.com"); }, 1000);
});

//=========================
// TRADUCTION BUTTON
//=========================
let tradButton = document.getElementById("TardButton");
tradButton.addEventListener("click", ChangeLang);
