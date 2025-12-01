/*=============== RENDER WAFFLE MENU FROM PRODUCTS ===============*/
function renderWaffleMenu() {
    const appsGrid = document.querySelector('.apps__grid');
    
    if (appsGrid && typeof products !== 'undefined') {
        // Clear existing content
        appsGrid.innerHTML = '';
        
        // Generate menu items from products array
        products.forEach(product => {
            const appItem = document.createElement('a');
            appItem.href = product.link;
            appItem.className = 'app__item';
            
            appItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <span>${product.name}</span>
            `;
            
            appsGrid.appendChild(appItem);
        });
    }
}

// Call both functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderWaffleMenu();
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SHOW APPS MENU ===============*/
const waffleIcon = document.getElementById('waffle-icon'),
    appsMenu = document.getElementById('apps-menu')

if (waffleIcon) {
    waffleIcon.addEventListener('click', () => {
        appsMenu.classList.toggle('show-apps')
    })
}

/* Close apps menu when clicking outside */
document.addEventListener('click', (e) => {
    if (appsMenu && !appsMenu.contains(e.target) && !waffleIcon.contains(e.target)) {
        appsMenu.classList.remove('show-apps')
    }
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
sr.reveal(`.home__data, .care__list, .contact__img`, { delay: 500 })
sr.reveal(`.new__card`, { delay: 500, interval: 100 })
sr.reveal(`.shop__card`, { interval: 100 })

function toggleReadMore() {
    const readMore = document.getElementById('readMore');
    const btn = document.getElementById('readMoreBtn');

    if (readMore.style.display === 'none') {
        readMore.style.display = 'inline';
        btn.textContent = 'Read Less';
    } else {
        readMore.style.display = 'none';
        btn.textContent = 'Read More';
    }
}

// Update products count dynamically
    document.addEventListener('DOMContentLoaded', function() {
        const productsCountElement = document.getElementById('products-count');
        
        if (typeof products !== 'undefined' && productsCountElement) {
            const count = products.length;
            productsCountElement.textContent = count + '+';
        }
    });

// Update system status - simple fetch
document.addEventListener('DOMContentLoaded', async function() {
    const statusElement = document.getElementById('system-status');
    
    if (statusElement) {
        const statusText = statusElement.querySelector('.status-text');
        
        try {
            const response = await fetch('https://admin.globsoft.tech/api/system-status');
            const data = await response.json();
            
            statusElement.className = 'footer__status status-' + data.status;
            statusText.textContent = data.message;
        } catch (error) {
            // Fallback to products.js
            if (typeof systemStatus !== 'undefined') {
                statusElement.className = 'footer__status status-' + systemStatus.status;
                statusText.textContent = systemStatus.message;
            }
        }
    }
});
