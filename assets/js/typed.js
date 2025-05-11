var typed = new Typed('#element', {
    strings: ['Programmer', 'Tech Geek', 'Developer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    showCursor: false,

    onComplete: function() {
        document.getElementById('after-text').classList.remove('opacity-0','translate-y-7');
    }
});