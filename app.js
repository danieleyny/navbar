const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // TOGGLE NAV
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

    });
    //ANIMATE LINKS 
    navLinks.forEach((link, index)=>{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.7}s`;

    });

}
navSlide();
