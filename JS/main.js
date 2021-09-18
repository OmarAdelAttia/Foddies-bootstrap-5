/* ===================================== active navbar ===================================== */

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         document.documentElement.add("scroll-on");
//     } else {
//         document.documentElement.remove("scroll-on");
//     }
//     // document.documentElement.scrollTop > 20 ? document.documentElement.add("scroll-on") : document.documentElement.remove("scroll-on");
// }

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");;
// }

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let nav = document.querySelector(".navigation-wrap");
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        header.setAttribute("style", "sticky");
        nav.setAttribute("style", "background-color: white;");
    } else {
        nav.setAttribute("style", "background-color: transparent;");
    } 
})

/* ===================================== nav hide ===================================== */

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (event) {
    event.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

/* ===================================== counter design ===================================== */

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 3000);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
})

// const counters = document.querySelectorAll('.counter');
// const speed = 3000;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const increment = target / speed;

//         if (count < target) {
//             counter.innerText = Math.ceil(count + increment);
//             setTimeout(updateCount, 1);
//         } else {
//             counter.innerText = target;
//         }
//     }
//     updateCount();
// })