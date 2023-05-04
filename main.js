const mainContainer = document.querySelector(".main-section__container");
const whoContainer = document.querySelector(".who__main-container");
const offerContainer = document.querySelector(".offer__main-container");
const responsiveMenuContainer = document.querySelector(
    ".nav__list-container-responsive",
);

document.getElementById("calendy-button-main").addEventListener("click", () => {
    window.open("https://calendly.com/ccgarciapsico/terapia", "_blank");
});

document.getElementById("calendy-button-who").addEventListener("click", () => {
    window.open("https://calendly.com/ccgarciapsico/terapia", "_blank");
});

document.getElementById("hamburger-menu").addEventListener("click", () => {
    if (responsiveMenuContainer.style.display === "initial") {
        responsiveMenuContainer.style.display = "none";
    } else {
        responsiveMenuContainer.style.display = "initial";
    }
});

document
    .getElementById("calendy-button-offer")
    .addEventListener("click", () => {
        window.open("https://calendly.com/ccgarciapsico/terapia", "_blank");
    });

document.getElementById("nav__logo").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.getElementById("nav__who").addEventListener("click", () => {
    window.scrollTo({
        top: mainContainer.offsetHeight,
        left: 0,
        behavior: "smooth",
    });
});

document.getElementById("nav__offer").addEventListener("click", () => {
    window.scrollTo({
        top: mainContainer.offsetHeight + whoContainer.offsetHeight,
        left: 0,
        behavior: "smooth",
    });
});

document.getElementById("nav__contact").addEventListener("click", () => {
    window.scrollTo({
        top:
            mainContainer.offsetHeight +
            whoContainer.offsetHeight +
            offerContainer.offsetHeight,
        left: 0,
        behavior: "smooth",
    });
});

document.getElementById("nav__who-responsive").addEventListener("click", () => {
    responsiveMenuContainer.style.display = "none";
    window.scrollTo({
        top: mainContainer.offsetHeight,
        left: 0,
        behavior: "smooth",
    });
});

document
    .getElementById("nav__offer-responsive")
    .addEventListener("click", () => {
        responsiveMenuContainer.style.display = "none";
        window.scrollTo({
            top: mainContainer.offsetHeight + whoContainer.offsetHeight,
            left: 0,
            behavior: "smooth",
        });
    });

document
    .getElementById("nav__contact-responsive")
    .addEventListener("click", () => {
        responsiveMenuContainer.style.display = "none";
        window.scrollTo({
            top:
                mainContainer.offsetHeight +
                whoContainer.offsetHeight +
                offerContainer.offsetHeight,
            left: 0,
            behavior: "smooth",
        });
    });
