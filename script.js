/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1200);
    }
});

/*=========================================
            HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});

/*=========================================
            SCROLL TOP
=========================================*/

const scrollTop = document.getElementById("scroll-top");

if (scrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });

    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
            CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    if (cursor) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

    if (cursor2) {

        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";

    }

});

/*=========================================
      NO BLOQUEAR LOS BOTONES
=========================================*/

if (cursor) {

    cursor.style.pointerEvents = "none";

}

if (cursor2) {

    cursor2.style.pointerEvents = "none";

}

const particles = document.getElementById("particles");

if (particles) {

    particles.style.pointerEvents = "none";

}

/*=========================================
      BOTONES DEL PORTAFOLIO
=========================================*/

document.querySelectorAll(".portfolio-btn").forEach((btn) => {

    btn.addEventListener("click", function () {

        const url = this.getAttribute("href");

        if (url && url !== "#") {

            window.location.href = url;

        }

    });

});

/*=========================================
      ANIMACIÓN TARJETAS
=========================================*/

const cards = document.querySelectorAll(".portfolio-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});

/*=========================================
      MENÚ RESPONSIVE
=========================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}