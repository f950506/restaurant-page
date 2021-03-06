function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Bonjour!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;