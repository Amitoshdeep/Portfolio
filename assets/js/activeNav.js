function highlightNav() {
    // Get current file name
    const currentHash = window.location.hash || "#";
    const heroAll = document.querySelector('.hero');
    const name = document.querySelector('.name');
    const wrap = document.querySelector('.wrap');
    const hero = document.querySelectorAll('.toHero');
    const about = document.querySelector('.about');
    const resume = document.querySelector('.resume');
    const contact = document.querySelector('.contact');

    // Loop through all nav links
    document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentHash) {
        link.classList.add("text-orangee","under","duration-700");

        
    } else {
        link.classList.add("text-[#999999]");
        link.classList.remove("text-orangee" ,"under");
    }
    });

    // FOR HOME SEC ==========================================
    if (currentHash != '#'){
        
        hero.forEach(toHero => {
            toHero.classList.add('opacity-0','duration-700');
        });

        hero.forEach(toHero => {
            toHero.classList.add('hidden');
        });

        heroAll.classList.add('back');
        // wrap.classList.remove('overflow-hidden');
        heroAll.classList.remove('flex-col','h-[370px]','min-w-[90%]','justify-evenly');
        heroAll.classList.add('min-w-[80%]','justify-between','h-[70px]','items-center','bg-black','fixed','top-0');
        name.innerHTML = `<strong class="strongg text-extraOffWhite">Amitoshdeep Singh</strong>`;
    }
    else{

        hero.forEach(toHero => {
            toHero.classList.remove('opacity-0');
        });


        hero.forEach(toHero => {
            toHero.classList.remove('hidden');
        });

        heroAll.classList.remove('back');
        about.classList.add('hidden');
        // wrap.classList.add('overflow-hidden');
        heroAll.classList.add('flex-col','h-[370px]','min-w-[90%]','justify-evenly');
        heroAll.classList.remove('min-w-[80%]','justify-between','h-[70px]','items-center','bg-black','fixed','top-0');
        name.innerHTML = `I'm <strong class="strongg text-extraOffWhite"> Amitoshdeep Singh</strong>`;
    }

    // FOR ABOUT SEC ==========================================
    if(currentHash == '#about'){
        about.classList.remove('hidden');
        
        setTimeout(() => {
            about.classList.add('opacity-100');
        }, 300);
    }
    else{
        about.classList.remove('opacity-100');
        
        setTimeout(() =>{
            about.classList.add('hidden');
        },600);

    }

    // for Resume SEC ==============================================
    if(currentHash == '#resume'){
        resume.classList.remove('hidden');
        
        setTimeout(() => {
            resume.classList.add('opacity-100');
        }, 300);
    }
    else{
        resume.classList.remove('opacity-100');
        
        setTimeout(() =>{
            resume.classList.add('hidden');
        },600);

    }

    // FOR CONTACT SEC ===============================================
    if(currentHash == '#contact'){
        contact.classList.remove('hidden');
        
        setTimeout(() => {
            contact.classList.add('opacity-100');
        }, 300);
    }
    else{
        contact.classList.remove('opacity-100');
        
        setTimeout(() =>{
            contact.classList.add('hidden');
        },600);

    }

}
// Run on load
highlightNav();

// Run on hash change (when user clicks other links)
window.addEventListener("hashchange", highlightNav);