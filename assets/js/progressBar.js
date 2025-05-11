function updateProgbar() {
    const sBars = document.querySelectorAll('.sbars');

    sBars.forEach(sBar => {
        const valueElement = sBar.querySelector('.data-val');
        const bar = sBar.querySelector('.pr');

        if (valueElement && bar) {
            const value = valueElement.textContent.trim(); // e.g., "40"
            bar.style.width = `${value}%`;
        }
    });
}

window.onload = updateProgbar;
