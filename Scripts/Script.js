//VAR
let texteBar = document.getElementById("TexteBar");
let switchText = document.getElementById("SwitchTexte");

const sections = [
    "Mathys Moles", "Gameplay programmeur", "Modulaire", "Passionné", "Motivé", "Game designer", "Étudiant à ISART DIGITAL"
];

//USE
document.getElementById("ContactButton").addEventListener("click", () => {
    BackFlashing(document.getElementById("Contact"), 1000, "rgb(255, 255, 255)");
});

Flashing(texteBar, 500, "rgb(255, 255, 255)", "rgba(255, 255, 255, 0)", true);

setTimeout(() => {
    let lCount = 0;
    setInterval(() => {
        lCount++;

        console.log(lCount + " contre " + (sections.length - 1));

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
    setTimeout(()=>{
    pObject.style.backgroundColor = lColor;


    },pInterval);
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
document.getElementById("ProjectButton").addEventListener("click", () => {
    document.getElementById("Projects").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
document.getElementById("ScrollButton").addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
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
