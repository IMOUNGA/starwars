window.onload = () => {

    // Menu
    const mobileBurger = document.querySelector('.burgerMenu');
    const mobileMenu = document.querySelector('.mobileListMenu');
    const header = document.querySelector('.header');
    const section = document.querySelector('section');
    const footer = document.querySelector('footer');

    mobileBurger.addEventListener('click', (e) => {
        e.currentTarget.classList.add('hidden');

        header.classList.add('hidden');
        section.classList.add('hidden');
        footer.classList.add('hidden');

        mobileMenu.classList.remove('hidden');
    });

    mobileMenu.addEventListener('click', (e) => {
        e.currentTarget.classList.add('hidden');

        header.classList.remove('hidden');
        section.classList.remove('hidden');
        footer.classList.remove('hidden');

        mobileBurger.classList.remove('hidden');
    })

    // Parallax
    const parallax = document.querySelectorAll('.parallax');

    for (const element of parallax){
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;

            element.classList.contains("header") ? document.querySelector('#logowars').style.top = -scrollValue / 4 + 'px' : null;
            element.style.backgroundPositionY = scrollValue / 4 + "px";
        })
    }

    // Observer Animation
    const ratio = .1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
        for (const entry of entries) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('visualize-visible');
                observer.unobserve(entry.target);
            }
        }
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    for (const element of document.querySelectorAll('.visualize')) {
        observer.observe(element)
    }
}