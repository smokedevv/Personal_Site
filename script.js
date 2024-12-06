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
