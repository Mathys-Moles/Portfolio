//VAR
let texteBar = document.getElementById("TexteBar");
let switchText = document.getElementById("SwitchTexte");
const frSections = ["Mathys Moles.", "Gameplay programmeur.", "Modulaire.", "Passionne.", "Motive.", "Game designer.", "Etudiant a ISART DIGITAL."];
const enSections = [   "Mathys Moles.",  "Gameplay Programmer.",     "Modular.",    "Passionate.",    "Motivated.",    "Game Designer.",    "Student at ISART DIGITAL."];
let frFlag = document.getElementById("frFlag");
let enFlag = document.getElementById("enFlag");
 const frStyle = window.getComputedStyle(frFlag);
    const enStyle = window.getComputedStyle(enFlag);


let currentLang = true;

let sections;
ChangeLang();

//USE
document.getElementById("ContactButton").addEventListener("click", () => {

    let contacts = Array.from(document.getElementsByClassName("contactSection"));

    contacts.forEach(element => {
        BackFlashing(element, 1000, "rgb(255, 255, 255)");
    element.style.transform = "scale(1.1)";
    setTimeout(()=>{element.style.transform = "scale(1)";},500);
    });
  
    
});

Flashing(texteBar, 500, "rgb(255, 255, 255)", "rgba(255, 255, 255, 0)", true);

setTimeout(() => {
    let lCount = 0;
    setInterval(() => {
        lCount++;


        if (lCount > sections.length - 1) {
            lCount = 0;
        }

        EraseTextGradually(switchText, sections[lCount], 100);

    }, 5000);

}, 3000);

//FUNCTION
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
            pElement.textContent = pWord.slice(0, count);
        } else {
            clearInterval(lWriter);
        }
    }, pInterval);
}

//#region scrollButton
let elements = Array.from(document.getElementsByClassName("ProjectButton"));

elements.forEach(element => {
    element.addEventListener("click", () => {
    document.getElementById("Projects").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
});


document.getElementById("AboutButton").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
document.getElementById("HomePageButton").addEventListener("click", () => {
    document.getElementById("HomePage").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

const SCROLL_BUTTON = document.getElementById("ScrollButton");
let scrollValue = window.innerHeight;
SCROLL_BUTTON.addEventListener("click", () => {
    window.scrollBy({
        top: scrollValue,
        left: 0,
        behavior: "smooth"
    });
});

const buttons = document.querySelectorAll("nav p.button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // On enlève active de tous
        buttons.forEach(b => b.classList.remove("active"));
        // On ajoute active au bouton cliqué
        btn.classList.add("active");
    });
});

window.addEventListener("scroll", FlipButton);
function FlipButton() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        SCROLL_BUTTON.style.transform = "rotate(180deg)";
        scrollValue = -document.documentElement.scrollHeight;
    }
    else {
        SCROLL_BUTTON.style.transform = "rotate(0deg)";
        scrollValue = window.innerHeight;
    }
}

//#endregion

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

document.getElementById("SendMail").addEventListener("click", () => {
    window.location.href = "mailto:mathysmoles@gmail.com";
    setTimeout(() => {
        navigator.clipboard.writeText("mathysmoles@gmail.com");
    }, 1000);
});


///TRADUCTION
let tradButton = document.getElementById("TardButton");
tradButton.addEventListener("click", ChangeLang);



   

function ChangeLang()
{
   

    // Appliquer les valeurs de enFlag à frFlag
    if (currentLang) {
     frFlag.style.top = "20%";
    frFlag.style.left = "40%";
    frFlag.style.zIndex = "-1";

    enFlag.style.top = "20%";
    enFlag.style.left = "-40%";
    enFlag.style.zIndex = "1";
} else {
    frFlag.style.top = "20%";
    frFlag.style.left = "20%";
    frFlag.style.zIndex = "1";

    enFlag.style.top = "20%";
    enFlag.style.left = "-20%";
    enFlag.style.zIndex = "-1";
}

    let lang;
    lang = currentLang? "fr" : "en";
    sections = currentLang? frSections : enSections;
      fetch("../Traduction/"+lang + ".json")
    .then(response => response.json())
    .then(translations => {
    
      document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key");
        el.innerHTML = translations[key]; 
      });
    });
    currentLang = !currentLang;
}