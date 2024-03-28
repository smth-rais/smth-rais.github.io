document.addEventListener('DOMContentLoaded', function () {
    var currentLangDiv = document.getElementById('currentLang');
    var langOptions = document.querySelector('.lang-options');
    var options = langOptions.getElementsByClassName('option');
    var flagImg = currentLangDiv.querySelector('.flag img'); // This might need to change if you are using SVG instead of IMG
    var currentLangText = currentLangDiv.querySelector('span');
    // Mockup translations object (you'll need to expand this with real translations)
    var  translations = {
        "az": {
            "pageTitle": "RAIS İstilik Nasosları",
            "home": "Əsas Səhifə",
            "gallery": "Qalereya",
            "videos": "Videolar",
            "contact": "Əlaqə",
            "about":"Haqqımızda",
            "aboutContent": "RAIN Energy innovativ və davamlı enerji həlləri hazırlamağa sadiqdir. Missiyamız daha təmiz, daha səmərəli dünya yaratmaq üçün bərpa olunan mənbələrin gücündən istifadə etməkdir.",
            "team":"Komanda",
            "welcomeMessage": "Bizim Məhsulumuza Xoş Gəlmisiniz",
            "discover": "Məhsulumuzun xüsusiyyətləri və üstünlükləri ilə tanış olun.",
            "nameLabel": "Ad:",
            "emailLabel": "E-poçt:",
            "phoneLabel" : "Telefon:",
            "messageLabel" : "Mətn:",
            "submitButton" : "Göndər:"
        },
        "ru": {
            "pageTitle": "RAIS Тепловые насосы",
            "home": "Главная",
            "gallery": "Галерея",
            "videos": "Видео",
            "contact": "Контакт",
            "about":"О нас",
            "aboutContent": "Компания RAIN Energy занимается разработкой инновационных и устойчивых энергетических решений. Наша миссия - использовать силу возобновляемых ресурсов для создания более чистого и эффективного мира.",
            "team":"Команда",
            "welcomeMessage": "Добро пожаловать в наш продукт",
            "discover": "Познакомьтесь с функциями и преимуществами нашего продукта.",
            "nameLabel": "Имя:",
            "emailLabel": "Электронная почта:",
            "phoneLabel" : "Номер телефона:",
            "messageLabel" : "Сообщение:",
            "submitButton" : "Отправить:"
        },
        "en": {
            "pageTitle": "RAIS Heat Pumps",
            "home": "Home",
            "gallery": "Gallery",
            "videos": "Videos",
            "contact": "Contact",
            "about":"About",
            "aboutContent": "RAIN Energy is dedicated to providing innovative and sustainable energy solutions. Our mission is to harness the power of renewable resources to create a cleaner, more efficient world.",
            "team":"Team",
            "welcomeMessage": "Welcome to Our Product",
            "discover": "Discover the features and benefits of our product.",
            "nameLabel": "Name",
            "emailLabel": "E-mail",
            "phoneLabel" : "Phone",
            "messageLabel" : "Message",
            "submitButton" : "Submit"
        }
    };
    // Function to apply translations to the page
    function applyTranslations(lang) {
        document.querySelectorAll('[data-key]').forEach(function (element) {
            var key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
                if (element.tagName.toLowerCase() === 'title') {
                    document.title = translations[lang][key]; // Special handling for the document title
                }
            }
        });
    }

    // Function to hide the language options
    function hideLangOptions() {
        langOptions.style.display = 'none';
        currentLangDiv.classList.remove('open');
    }

    // Toggle language options on click
    currentLangDiv.addEventListener('click', function (event) {
        var isOpen = langOptions.style.display === 'block';
        langOptions.style.display = isOpen ? 'none' : 'block';
        currentLangDiv.classList.toggle('open', !isOpen);
        event.stopPropagation();
    });

    // Close the language switcher when clicking outside of it
    document.addEventListener('click', function (event) {
        var isClickInsideLangSwitcher = currentLangDiv.contains(event.target) || langOptions.contains(event.target);

        if (!isClickInsideLangSwitcher) {
            hideLangOptions();
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const currentLangDiv = document.getElementById('currentLang');
        const langOptions = document.querySelector('.lang-options');
        const options = document.querySelectorAll('.lang-options .option');
        const flagImg = currentLangDiv.querySelector('.flag img'); // Reference to the current language flag image
        const currentLangText = currentLangDiv.querySelector('span'); // Reference to the current language text
    
        currentLangDiv.addEventListener('click', function() {
            langOptions.classList.toggle('show'); // Toggle visibility of language options
        });
    
        options.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                const langText = this.querySelector('span').textContent;
                const selectedFlagSrc = this.querySelector('.flag img').src;
    
                // Update the current language display with selected language and flag
                flagImg.src = selectedFlagSrc;
                flagImg.alt = langText; // Update alt text for accessibility
                currentLangText.textContent = langText; // Update language text
    
                langOptions.classList.remove('show'); // Hide the language options
                langOptions.style.display = 'none';
            });
        });
        applyTranslations(selectedLang);
    });
    // Add click event to language options
    Array.from(options).forEach(function(option) {
        option.addEventListener('click', function () {
            var selectedLang = this.getAttribute('data-lang');
            
            // Update the current language div with the selected language and flag
            // Note: This needs to be adjusted if you're using SVG icons
            flagImg.src = this.querySelector('img').src;
            flagImg.alt = this.textContent.trim();
            currentLangText.textContent = this.textContent.trim();

            // Apply translations to the page
            applyTranslations(selectedLang);

            // Hide the options again
            hideLangOptions();
        });
    });
    // Add click event to language options
    Array.from(options).forEach(function(option) {
        option.addEventListener('click', function () {
            var selectedLang = this.getAttribute('data-lang');
            var selectedFlag = this.getElementsByTagName('svg')[0].outerHTML; // Get only the SVG part

            // Update the current language div with the selected language and flag
            currentLangDiv.innerHTML = selectedFlag + '<span>' + this.textContent.trim() + '</span>';

            // Apply translations to the page
            applyTranslations(selectedLang);

            // Hide the options again
            hideLangOptions();
        });
    });
    // Initial call to set the default language to Azerbaijani
    applyTranslations('az'); // Set Azerbaijani as the default language
});
