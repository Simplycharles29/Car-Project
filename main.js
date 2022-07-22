const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;

const sectionOffset = stats.offsetTop + stats.offsetHeight;
window.addEventListener("scroll", () => {
    const pageOffset = window.innerHeight + pageYOffset;
    if(pageOffset > sectionOffset && bol === false){
        counters.forEach((counter) => {
            function updateCount() {
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                if(count < target){
                    counter.innerText = count + 1;
                    setTimeout(updateCount, speed);
                }else{
                    counter.innerText = target;
                }
            }
            updateCount();
            bol = true;
        });
    }
});
// hamburger
let toggle = document.querySelector("span");
let nav = document.querySelector("ul");
let list = document.querySelector("li")

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    // list.classList.toggle('active');
})