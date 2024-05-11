const translations = {
    'en': {
        'headerTitle': 'PROTOTYPE',
        'headerTagline': 'An Accessible Institutional Homepage',
        'servicesHeader': 'Our Services',
        'migrationExplanation': '(Swedish Migration Office)',
        'skatteverketExplanation': '(Swedish Tax Agency)',
        'policeExplanation': '(Swedish Police)',
        'employmentExplanation': '(Swedish Employment Agency)',
        'insuranceExplanation': '(Swedish National Insurance Agency)',
        'healthExplanation': '(Swedish Health Agency)',
        'infoHeader': 'More Information',
        'educationHeader': 'Education',
        'housingHeader': 'Housing',
        'chooseLanguageBtn': 'Choose\nLanguage',
        'contactUsBtn': 'Contact \n Us',
        'askHelpBtn': 'Ask For\nHelp',
        'homeNav': 'Home',
        'servicesNav': 'Services',
        'infoNav': 'Information',
        'footerNav': 'Footer',
        'footerInfo': 'Footer Information',
        'aboutBtn': 'About',
        'contactBtn': 'Contact',
        'selectLanguageTitle': 'Select Language',
        'applyBtn': 'Apply',
        'closeBtn': 'Close',
        'searchPlaceholder': 'Search',
        'submit': 'Submit',
        'back-to-top': 'Back\nto Top',
        'chatbotTitle': 'How can we help you?',
        'chatPlaceholder': 'Type your question here...',
        'visitBtn': 'Visit',
        'educationContent': [
            'Sweden has a highly developed education system, offering free education for all residents.',
            'Compulsory education: 9 years',
            'Upper secondary education (Gymnasium): 3 years',
            'Higher education: Universities and university colleges offer a wide range of programs, including bachelor\'s, master\'s, and doctoral degrees.',
            'Swedish universities are known for their high-quality education and research opportunities.'
        ],
        'housingContent': [
            'Finding housing in Sweden can be competitive, especially in major cities like Stockholm, Gothenburg, and Malmö.',
            'Start your search early, as it may take time to find suitable accommodation.',
            'Use online platforms such as Blocket and Booli to search for rental properties.',
            'Consider joining housing queues (Bostadskö) for municipally owned rental apartments.',
            'Be prepared to provide references and proof of income when applying for rental properties.',
            'It\'s also common to sublet (hyra i andra hand) apartments in Sweden, especially for shorter stays.'
        ]
    },
    'fr': {
        'headerTitle': 'PROTOTYPE',
        'headerTagline': 'Une page d\'accueil institutionnelle accessible',
        'servicesHeader': 'Nos Services',
        'migrationExplanation': '(Bureau de Migration Suédois)',
        'skatteverketExplanation': '(Agence Fiscale Suédoise)',
        'policeExplanation': '(Police Suédoise)',
        'employmentExplanation': '(Agence Pour l\'Emploi Suédoise)',
        'insuranceExplanation': '(Agence Nationale d\'Assurance Suédoise)',
        'healthExplanation': '(Agence de Santé Suédoise)',
        'infoHeader': 'Plus d\'Informations',
        'educationHeader': 'Éducation',
        'housingHeader': 'Logement',
        'chooseLanguageBtn': 'Choisir\nLa Langue',
        'contactUsBtn': 'Contactez\nNous',
        'askHelpBtn': 'Demander\nAide',
        'homeNav': 'Accueil',
        'servicesNav': 'Services',
        'infoNav': 'Informations',
        'footerNav': 'Pied de page',
        'footerInfo': 'Informations du pied de page',
        'aboutBtn': 'À Propos',
        'contactBtn': 'Contact',
        'selectLanguageTitle': 'Choisir la langue',
        'applyBtn': 'Appliquer',
        'closeBtn': 'Fermer',
        'searchPlaceholder': 'Chercher',
        'submit': 'Soumettre',
        'back-to-top': 'Retour\nau Début',
        'chatbotTitle': 'Comment pouvons-nous vous aider?',
        'chatPlaceholder': 'Tapez votre question ici...',
        'visitBtn': 'Visite',
        'educationContent': [
            'La Suède possède un système éducatif très développé, offrant une éducation gratuite pour tous les résidents.',
            'L\'éducation obligatoire : 9 ans',
            'L\'enseignement secondaire supérieur (Gymnasium) : 3 ans',
            'L\'enseignement supérieur : les universités et les collèges universitaires offrent une large gamme de programmes, y compris des diplômes de bachelier, de maîtrise et de doctorat.',
            'Les universités suédoises sont connues pour la qualité de leur éducation et de leurs opportunités de recherche.'
        ],
        'housingContent': [
            'Trouver un logement en Suède peut être compétitif, en particulier dans les grandes villes comme Stockholm, Göteborg et Malmö.',
            'Commencez vos recherches tôt, car il peut prendre du temps pour trouver un logement approprié.',
            'Utilisez des plateformes en ligne comme Blocket et Booli pour rechercher des propriétés à louer.',
            'Envisagez de rejoindre des files d\'attente de logement (Bostadskö) pour des appartements locatifs appartenant à la municipalité.',
            'Soyez prêt à fournir des références et une preuve de revenu lors de la demande de location de propriétés.',
            'Il est également courant de sous-louer (hyra i andra hand) des appartements en Suède, en particulier pour des séjours courts.'
        ]
    }
};

function applyTranslation(lang) {
    const langData = translations[lang];

    // Header and general texts
    document.querySelector('.LogoTagline h1').textContent = langData['headerTitle'];
    document.querySelector('.LogoTagline h2').textContent = langData['headerTagline'];
    document.getElementById('services-header').textContent = langData['servicesHeader'];
    document.getElementById('migration-explanation').textContent = langData['migrationExplanation'];
    document.getElementById('skatteverket-explanation').textContent = langData['skatteverketExplanation'];
    document.getElementById('police-explanation').textContent = langData['policeExplanation'];
    document.getElementById('employment-explanation').textContent = langData['employmentExplanation'];
    document.getElementById('insurance-explanation').textContent = langData['insuranceExplanation'];
    document.getElementById('health-explanation').textContent = langData['healthExplanation'];
    document.getElementById('info-header').textContent = langData['infoHeader'];
    document.querySelector('.education-info h3').textContent = langData['educationHeader'];
    document.querySelector('.housing-info h3').textContent = langData['housingHeader'];
    document.getElementById('footer').textContent = langData['footerInfo'];
    document.getElementById('chatbotModalTitle').textContent = langData['chatbotTitle']; // Add a 'chatbotTitle' key in your translations
    document.getElementById('chatInput').setAttribute('placeholder', langData['chatPlaceholder']); // Add a 'chatPlaceholder' key in your translations
    document.getElementById('modalTitle').textContent = langData['selectLanguageTitle'];
    document.querySelectorAll('.modal-buttons button[onclick*="changeLanguage()"]').forEach(btn => btn.textContent = langData['applyBtn']);
    document.querySelectorAll('.modal-buttons .close').forEach(btn => btn.textContent = langData['closeBtn']);
    document.getElementById('chat-submit-btn').textContent = langData['submit'];
    document.getElementById('back-to-top').textContent = langData['back-to-top'];



    // Navigation and interactive buttons
    document.getElementById('choose-language-change').innerHTML = langData['chooseLanguageBtn'];
    document.getElementById('contact-change').innerHTML = langData['contactUsBtn'];
    document.querySelectorAll('[aria-label="Ask for Help"] span').forEach(btn => btn.innerHTML = langData['askHelpBtn']);
    document.getElementById('home-change').textContent = langData['homeNav'];
    document.getElementById('services-change').textContent = langData['servicesNav'];
    document.getElementById('info-change').textContent = langData['infoNav'];
    document.getElementById('footer-change').textContent = langData['footerNav'];

    // Service article buttons
    document.querySelectorAll('.about-buttons').forEach(button => {
        button.innerHTML = `<img src="img/pepicons-print-question-5.svg" alt="Icon for more information"> ${langData['aboutBtn']}`;
    });
    document.querySelectorAll('.contact-buttons').forEach(button => {
        button.innerHTML = `<img src="img/contactgroup@2x.png" alt="Icon for contacting"> ${langData['contactBtn']}`;
    });
    document.querySelectorAll('.visit-buttons').forEach(button => {
        button.innerHTML = `<img src="img/carbon-direction-straight-right-filled.svg" alt="Icon for visiting"> ${langData['visitBtn']}`;
    });

    // Update list items for informational sections
    const updateListContent = (selector, content) => {
        const list = document.querySelector(selector);
        list.innerHTML = ''; // Clear current content
        content.forEach(item => list.innerHTML += `<li>${item}</li>`);
    };

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = langData['searchPlaceholder'];
    }

    updateListContent('.education-info ul', langData['educationContent']);
    updateListContent('.housing-info ul', langData['housingContent']);

}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }
});

document.querySelector('.modal-buttons button[onclick="changeLanguage()"]').addEventListener('click', function() {
    const selectedLang = document.getElementById('languageSelect').value;
    applyTranslation(selectedLang);
    closeLanguageModal(); // Assuming closeLanguageModal() is your function to hide the language modal
});

    
document.querySelector('.modal-buttons button').addEventListener('click', function() {
    const selectedLang = document.getElementById('languageSelect').value;
    applyTranslation(selectedLang);
    closeLanguageModal();
});
