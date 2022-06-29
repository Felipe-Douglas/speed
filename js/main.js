const itemMenu = document.querySelectorAll('.menu a[href^="#"]');

itemMenu.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const section = document.querySelector(id).offsetTop;

        window.scroll({
            top: section - 80,
            behavior: "smooth"
        });
    });
});