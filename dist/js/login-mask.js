function hideMask() {
    let login_mask = document.getElementsByClassName("login-mask")[0];
    login_mask.className = "login-mask"
}
function showMask() {
    let login_mask = document.getElementsByClassName("login-mask")[0];
    login_mask.className = "login-mask show"
}

let currentIndex2 = 0;

let tabs = document.querySelectorAll(".login-panel > .options-panel > li");
let panes = document.querySelectorAll(".login-panel > .form-panel > li");

for (let i = 0, len = tabs.length; i < len; i++) {
    let tab = tabs[i];
    tab.onclick = function () {
        tabs[currentIndex2].className = "";
        tab.className = "current";

        panes[currentIndex2].className = "";
        panes[i].className = "current";

        currentIndex2 = i;
    }
}