//Показати/скрити вибір мови
function showLang() {
    var langMenu = document.getElementById("lang-menu");
    if (langMenu.style.display == "none"){
        langMenu.style.display = "block";
    }
    else {
        langMenu.style.display = "none";
    }
}

//Показати/скрити меню
function showMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display == "block"){
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}