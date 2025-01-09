function changeLanguage(lang) {
    const translations = {
        "en": {
            "home": "Home",
            "about": "About",
            "services": "Services",
            "contact": "Contact",
            "login": "Login",
            "register": "Register",
            "menuTitle": "Our Coffee Menu",
            "seeFullMenu": "See Full Menu",
            "aboutTitle": "About Us",
            "aboutText": "Welcome to our coffee shop, where we take pride in serving the finest coffee blends and creating a cozy atmosphere for all our customers. Whether you're grabbing a quick cup to-go or relaxing in our cafe, we're here to make your coffee experience exceptional!",
            "welcome": "Welcome to Our Coffee Shop",
            "tagline": "Your favorite place for coffee and comfort",
            "espresso": "Espresso",
            "espressoDescription": "A rich and bold coffee served in a small cup.",
            "espressoPrice": "5.50 GEL",
            "cappuccino": "Cappuccino",
            "cappuccinoDescription": "A smooth espresso topped with steamed milk and frothy foam.",
            "cappuccinoPrice": "7.00 GEL",
            "latte": "Latte",
            "latteDescription": "A creamy espresso combined with steamed milk.",
            "lattePrice": "11.20 GEL",
        },
        "ka": {
            "home": "მთავარი",
            "about": "ჩვენ შესახებ",
            "services": "სერვისები",
            "contact": "კონტაქტი",
            "login": "შესვლა",
            "register": "რეგისტრაცია",
            "menuTitle": "ჩვენი ყავის მენიუ",
            "seeFullMenu": "ნახე სრული მენიუ",
            "aboutTitle": "ჩვენ შესახებ",
            "aboutText": "კეთილი იყოს თქვენი მობრძანება ჩვენს ყავის მაღაზიაში, სადაც ჩვენ ვამაყობთ საუკეთესოთა ყავის შერჩევით და კომფორტული ატმოსფეროს შექმნით ჩვენს მომხმარებლებისთვის. თუ თქვენ იძენთ სწრაფად ყავას ან იმყოფებით ჩვენს კაფეში, ჩვენ ვართ აქ, რათა თქვენი ყავის გამოცდილება გამორჩეული იყოს!",
            "welcome": "კეთილი იყოს თქვენი მობრძანება ჩვენს ყავის მაღაზიაში",
            "tagline": "თქვენი საყვარელი ადგილი ყავისა და კომფორტისთვის",
            "espresso": "ესპრესო",
            "espressoDescription": "მდიდარი და მყარი ყავა პატარა თასში.",
            "espressoPrice": "5.50 GEL",
            "cappuccino": "კაპუჩინო",
            "cappuccinoDescription": "ლამაზი ესპრესო, ზედა ნაწილში რძე და ქაფი.",
            "cappuccinoPrice": "7.00 GEL",
            "latte": "ლატე",
            "latteDescription": "კრემიანი ესპრესო, რომელიც შედის სტიმულირებულ რძეში.",
            "lattePrice": "11.20 GEL",
        }
    };

    // Set the text content based on the selected language
    const langContent = translations[lang];

    document.getElementById('homeLink').textContent = langContent.home;
    document.getElementById('aboutLink').textContent = langContent.about;
    document.getElementById('servicesLink').textContent = langContent.services;
    document.getElementById('contactLink').textContent = langContent.contact;
    document.getElementById('loginBtn').textContent = langContent.login;
    document.getElementById('registerBtn').textContent = langContent.register;
    document.getElementById('menuTitle').textContent = langContent.menuTitle;
    document.getElementById('seeMenu').textContent = langContent.seeFullMenu;
    document.getElementById('aboutTitle').textContent = langContent.aboutTitle;
    document.getElementById('aboutText').textContent = langContent.aboutText;
    document.getElementById('welcome').textContent = langContent.welcome;
    document.getElementById('tagline').textContent = langContent.tagline;
    document.getElementById('espresso').textContent = langContent.espresso;
    document.getElementById('espressoDescription').textContent = langContent.espressoDescription;
    document.getElementById('espressoPrice').textContent = langContent.espressoPrice;
    document.getElementById('cappuccino').textContent = langContent.cappuccino;
    document.getElementById('cappuccinoDescription').textContent = langContent.cappuccinoDescription;
    document.getElementById('cappuccinoPrice').textContent = langContent.cappuccinoPrice;
    document.getElementById('latte').textContent = langContent.latte;
    document.getElementById('latteDescription').textContent = langContent.latteDescription;
    document.getElementById('lattePrice').textContent = langContent.lattePrice;
}