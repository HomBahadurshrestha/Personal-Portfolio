// Hire Button Scroll
document.querySelector('.hiresection').addEventListener('click', function () {
    document.getElementById('Contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// About Button Scroll
document.querySelector('.aboutsection').addEventListener('click', function () {
    document.getElementById('About').scrollIntoView({
        behavior: 'smooth'
    });
});

// Social Media Links
function openLink(platform) {

    let url = '';

    switch(platform){

        case 'linkedin':
            url = 'https://www.linkedin.com/in/hombahadurshrestha5820';
            break;

        case 'whatsapp':
            url = 'https://wa.me/9779844400188';
            break;

        case 'instagram':
            url = 'https://www.instagram.com/hom.shrestha.355';
            break;

        case 'github':
            url = 'https://github.com/HomBahadurshrestha';
            break;

        case 'facebook':
            url = '';
            break;
    }

    window.open(url, '_blank');
}

/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu after clicking links */

document.querySelectorAll(".navlinks a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* <button type="button" class="downloadcv" onclick="downloadCV()">Download CV</button> */

  function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Hom Bahadur Shrestha(CV) (1) updated.pdf';
    // link.download = 'Hom_Bahadur_Shrestha_CV.pdf';
    link.click();
  }

  