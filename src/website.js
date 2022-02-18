import loadHome from "./home-page";
import loadMenu from "./menu-page";

function createHeader() {
    console.log("header");
    const header = document.createElement("header");
    header.classList.add("header");

    const headerText = document.createElement("h1");
    headerText.classList.add("header-text");
    headerText.textContent = ("Restaurant Name");
    
    header.appendChild(headerText);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const navBar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", loadHome);

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", loadMenu);

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);

    return navBar;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.textContent = "footer";

    return footer;
}

function initializeContent() {
    console.log("init content");
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default initializeContent;