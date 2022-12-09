window.addEventListener('load', function(){
    Grade(document.querySelectorAll('.lb-bg'))
})

// 轮播图切换联动效果
// 1.获取所有的标题 以及 所有的图片
let currentIndex = 0
let titles = document.querySelectorAll(".lbt>.lbt-box>.right-lbt-list>li")
let images = document.querySelectorAll(".lbt>.lbt-box>.lbt-content>li")

titles.forEach((title, index)=>{
    title.onmouseover = function () {
        titles[currentIndex].className = ""
        images[currentIndex].className = ""

        title.className = "choose"
        images[index].className = "choose"

        currentIndex = index
    }
})