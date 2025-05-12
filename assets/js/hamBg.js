document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#navB').addEventListener('click', () => {
    const side = document.querySelector('.sidebar');

    if (side.classList.contains('hidden')) {
    //   console.log('Sidebar is hidden');
      side.classList.remove('hidden');

    } else {
    //   console.log('Sidebar is visible');
      side.classList.add('hidden');

    }
  });
});


const navB = document.getElementById('navB');
const spans = navB.querySelectorAll('.hamSpan');
const navLinks = document.querySelectorAll('a[href^="#"]'); // only internal links

function resetHamburger() {
  navB.classList.remove('active');
  spans[0].classList.remove('rotate-45', 'translate-y-1.5');
  spans[1].classList.remove('opacity-0');
  spans[2].classList.remove('-rotate-45', '-translate-y-1.5');
}

navB.addEventListener('click', () => {
  navB.classList.toggle('active');
  spans[0].classList.toggle('rotate-45');
  spans[0].classList.toggle('translate-y-1.5');
  spans[1].classList.toggle('opacity-0');
  spans[2].classList.toggle('-rotate-45');
  spans[2].classList.toggle('-translate-y-1.5');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Wait a bit in case there's an animation/scroll
    setTimeout(resetHamburger, 200);
  });
});
