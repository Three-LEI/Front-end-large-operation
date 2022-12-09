let currentIndex = 0;

let tabs = document.querySelectorAll(".head-panel-options>li");
let panes = document.querySelectorAll(".bottom-container>.left-course-content>li");

for (let i = 0, len=tabs.length; i < len; i++) {
    let tab = tabs[i];
    tab.onclick = function () {
        tabs[currentIndex].className = "";
        tabs[i].className = "choose";

        panes[currentIndex].className = "";
        panes[i].className = "choose";
        currentIndex = i;
    }
}

let score = 5;
let star = document.querySelector(".comments-container .star");
let y_star = document.querySelector(".comments-container .yellow-star");

star.onclick = function (event) {
    score = Math.ceil(event.offsetX / star.offsetWidth * 5);
    y_star.style.width = score / 5 * 100 + "%";
}

let submit = document.querySelector(".comments-container .comments-button");
let content = document.querySelector(".comments-container .com-content");

submit.onclick = function () {
    console.log("分数：", score);
    let content_c = content.value;
    console.log("评论内容：", content_c);
}