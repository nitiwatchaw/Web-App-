//herder btn
const menuBar = document.getElementById('menu-bar')
const sideRight = document.getElementById('side-right')
const openBtn = document.getElementById('while-close')
const main = document.querySelector('main')
const header = document.querySelector('header')
const hamBtn = document.querySelector('.hamburger')

function clickT0open() {

    menuBar.classList.toggle("menu-notgo390");
   
    document.body.classList.toggle("stop-scrolling");
    hamBtn.classList.toggle("is-active")

    document.onclick = function (e) {
        if (!menuBar.contains(e.target) && !openBtn.contains(e.target)) {
            menuBar.classList.remove("menu-notgo390");
            document.body.classList.remove("stop-scrolling");
           
            hamBtn.classList.remove("is-active")
        }
        else {

        }
    }

}

//search icon disapper when click search input
let containingElement = document.querySelector('.input');
document.body.addEventListener('click', function (event) {
    if (containingElement.contains(event.target)) {
        document.querySelector('.search-icon').style.display = "none"

    } else {
        document.querySelector('.search-icon').style.display = "block"

    }
});

let containingElement2 = document.querySelector('.input2');
document.body.addEventListener('click', function (event) {
    if (containingElement2.contains(event.target)) {
        document.querySelector('.search-icon2').style.display = "none"

    } else {
        document.querySelector('.search-icon2').style.display = "block"

    }
});

let containingElement3 = document.querySelector('.input3');
document.body.addEventListener('click', function (event) {
    if (containingElement3.contains(event.target)) {
        document.querySelector('.search-icon3').style.display = "none"

    } else {
        document.querySelector('.search-icon3').style.display = "block"

    }
});



//side-right-content
const sideRightcontent = document.getElementById('side-right-content')

function sideRight_clickToopen() {

    document.querySelector('.wrap-barandcontent').classList.toggle('wrap-barandcontent-none')

    sideRightcontent.style.display = "block"
    setTimeout(function () {
        sideRightcontent.style.transform = "translate(0px,0px)"

    }, 50)


    document.querySelector('.side-center').style.display = ("none");
    document.getElementById('sideRight-whileClose').style.display = "none"
    document.getElementById('sideRight-whileOpen').style.display = "flex"
}


function sideRight_clickToclose() {
    // sideRightcontent.style.translate = "0px -1300px";
    document.querySelector('.wrap-barandcontent').classList.toggle('wrap-barandcontent-none')


    sideRightcontent.style.transform = "translate(0px,-800px)"

    setTimeout(function () {
        sideRightcontent.style.display = "none"
    }, 50)

    document.querySelector('.side-center').style.display = ("block");
    document.getElementById('sideRight-whileClose').style.display = "flex"
    document.getElementById('sideRight-whileOpen').style.display = "none"

}



function allBlack() {
    header.classList.toggle("light-ad2")
    main.classList.toggle("light-ad2")
}

function allDone() {
    header.classList.remove("light-ad2")
    main.classList.remove("light-ad2")
}

