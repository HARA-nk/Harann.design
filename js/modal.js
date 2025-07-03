
const modalOpen = document.querySelector(".ham");
const modalClose = document.querySelector(".close");
const modalNavMenu = document.querySelector(".nav-menu");

modalOpen.addEventListener("click", () => {
    console.log("click");

    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity:0
        },
        {
            opacity:1,
            display : 'block',
        }
    )   
})

modalClose.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display : 'none',
        }
    )   
})

modalNavMenu.addEventListener("click", () => {
    gsap.fromTo(
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display : 'none',
        }
    )  
})