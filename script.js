document.querySelector('.hiresection').addEventListener('click',function(){
    const contactSection=document.getElementById('Contact');
    contactSection.scrollIntoView({
        behavior:'smooth'
    });
});

//About me section
document.querySelector('.aboutsection').addEventListener('click',function(){
    const aboutSection=document.getElementById('About');
    aboutSection.scrollIntoView({
        behavior:'smooth'
    });
});

function openLink(platform){
    let url='';
    switch(platform){
        case 'linkedin':
            url='https://www.linkedin.com/in/hombahadurshrestha5820';
            break;
            case 'whatsapp':
            url='https://wa.me/9779844400188';
            break;
            case 'instagram':
            url='https://www.instagram.com/hom.shrestha.355';
            break;
            case'facebook':
            url='';
            break;
            case'github':
            url='https://github.com/HomBahadurshrestha';
            }
            window.open(url,'_blank');
}
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlinks");

menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
};
