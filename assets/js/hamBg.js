document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#navB').addEventListener('click', () => {
    const side = document.querySelector('.sidebar');
    const navImg = document.querySelector('#navB img'); // Assuming there's an <img> inside #navB

    if (side.classList.contains('hidden')) {
    //   console.log('Sidebar is hidden');
      side.classList.remove('hidden');

      // Change nav image to "close" icon
      navImg.src = '/assets/icons/close.svg';
    } else {
    //   console.log('Sidebar is visible');
      side.classList.add('hidden');

      // Change nav image to "menu" icon
      navImg.src = '/assets/icons/menu.svg';
    }
  });
});
