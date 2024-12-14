const slideNavigator= name =>{
    let slides=document.querySelectorAll('.bg-slide');
    slides.forEach(slide=>{
        slide.classList.remove('active');
        if(slide.classList.contains(name)){
            slide.classList.add('active');
        }
    });
};

window.addEventListener('load', ()=>{
    const slideBtnList= document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn=>{
        btn.addEventListener('click', function(e){
            e.preventDefault();
            slideBtnList.forEach(el =>{
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

const sectionNavigator= name =>{
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if(section.classList.contains(name)){
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

window.addEventListener('load', () => {
    const navList= document.querySelectorAll('.nav-btn');
    navList.forEach(nav=>{
        nav.addEventListener('click', function(e){
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
}

const initNavigation = () => {
    const navList=document.querySelectorAll('.nav-btn');
    navList.forEach(el=>{
        el.classList.remove('active');
        if(el.getAttribute('data-target')==='about'){
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
}

const toggleMenu=()=>{
    const menu=document.querySelector('.menu');
    const navMobile= document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};


// FOR SHARE ICON

document.getElementById('shareIcon').addEventListener('click', function(event) {
    var icons = document.getElementById('shareIcons');
    icons.classList.toggle('show');
    event.stopPropagation(); // Prevent event from bubbling up to document
});

document.addEventListener('click', function(event) {
    var icons = document.getElementById('shareIcons');
    if (icons.classList.contains('show')) {
        icons.classList.remove('show');
    }
});

document.getElementById('shareIcons').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
});








document.querySelectorAll('.form-control').forEach(input => {
    const label = input.nextElementSibling;
    
    input.addEventListener('focus', () => {
        label.style.top = '0';
        label.style.transform = 'translateY(-50%) scale(0.9)';
        label.style.backgroundColor = '#fff';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            if (input.tagName === 'TEXTAREA') {
                label.style.top = '20px';
            } else {
                label.style.top = '50%';
            }
            label.style.transform = 'translateY(-50%)';
            label.style.backgroundColor = 'transparent';
        }
    });
});

