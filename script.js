// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    const titles = {
        en: {
            mainTitle: "Welcome to My Blog!",
            postHeading: "Latest Posts",
        },
        uk: {
            mainTitle: "Ласкаво просимо до мого блогу!",
            postHeading: "Останні пости",
        },
    };

    // Update the content based on selected language
    document.getElementById('main-title').innerText = titles[lang].mainTitle;
    document.getElementById('post-heading').innerText = titles[lang].postHeading;
}

// Mouse movement event for the web effect
document.addEventListener('mousemove', (event) => {
    let spiderWeb = document.querySelector('.spider-web');
    
    if (!spiderWeb) {
        spiderWeb = document.createElement('div');
        spiderWeb.classList.add('spider-web');
        document.body.appendChild(spiderWeb);
    }
    
    spiderWeb.style.left = `${event.pageX - 200}px`;
    spiderWeb.style.top = `${event.pageY - 200}px`;
});
