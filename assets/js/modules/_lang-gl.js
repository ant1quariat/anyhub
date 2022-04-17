const changeLang = document.querySelector('#lng-change');
const allLang = ['ru', 'en', 'de'];
const langArr = {
    "lng-title" : {
        "ru": "Профиль • PROект",
        "en": "Profile • PROект",
        "de": "Profil • PROект"
    },
    "lng-banner" : {
        "ru": "Пользователь",
        "en": "User",
        "de": "Benutzer"
    },
    "lng-comment" : {
        "ru": "Комментарии: ",
        "en": "Comments: ",
        "de": "der Bemerkung: "
    },
    "lng-regdate" : {
        "ru": "Дата регистрации: ",
        "en": "Register date: ",
        "de": "Registrierungsdatum: "
    },
    "lng-title-sitemenu" : {
        "ru": "Навигация",
        "en": "Menu",
        "de": "Menu"
    },
    "lng-home" : {
        "ru": "Главная",
        "en": "Home",
        "de": "Hause"
    },
    "lng-about" : {
        "ru": "О нас",
        "en": "About Us",
        "de": "Über uns"
    },
    "link-lang" : {
        "ru": "Смена языка",
        "en": "Change lang",
        "de": "Sprache wechseln"
    },
    "lng-signin" : {
        "ru": "Войти",
        "en": "Sign In",
        "de": "Eingeben"
    },
    "lng-contacts" : {
        "ru": "Контакты",
        "en": "Contacts",
        "de": "Kontakte"
    },
    "lng-signup" : {
        "ru": "Регистрация",
        "en": "Sign Up",
        "de": "Registrieren"
    },
    "lng-news" : {
        "ru": "Новости",
        "en": "News",
        "de": "Nachricht"
    },
    "lng-profiles" : {
        "ru": "Профиль",
        "en": "Profile",
        "de": "Profil"
    },
    "lng-category-title" : {
        "ru": "Категории",
        "en": "Category",
        "de": "Kategorien"
    },
    "lng-settings" : {
        "ru": "Настройки",
        "en": "Settings",
        "de": "Einstellungen"
    },
    "lng-exits" : {
        "ru": "Выйти",
        "en": "Exit",
        "de": "Ausloggen"
    }
}


changeLang.addEventListener('change', changeURLLanguage);

function changeURLLanguage()
{
    let lang = changeLang.value;
   
    location.href = window.location.pathname + '#' + lang;
    
    location.reload();



}


function changeLanguage()
{
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash))
    {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    changeLang.value = hash;

    
    document.querySelector('.lng-title').innerHTML = langArr['lng-title'][hash];

    document.querySelector('.lng-title-sitemenu').innerHTML = langArr['lng-title-sitemenu'][hash];
    document.querySelector('.lng-home').innerHTML = langArr['lng-home'][hash];
    document.querySelector('.lng-news').innerHTML = langArr['lng-news'][hash];
    document.querySelector('.lng-about').innerHTML = langArr['lng-about'][hash];
    
    if (document.querySelector('.lng-signin') ){
        document.querySelector('.lng-signin').innerHTML = langArr['lng-signin'][hash];
        document.querySelector('.lng-signup').innerHTML = langArr['lng-signup'][hash];
    } 
    else
    {
        document.querySelector('.lng-setting').innerHTML = langArr['lng-settings'][hash];
    document.querySelector('.lng-exit').innerHTML = langArr['lng-exits'][hash];
    }
    
    document.querySelector('.lng-profiles').innerHTML = langArr['lng-profiles'][hash];
    document.querySelector('.lng-banner').innerHTML = langArr['lng-banner'][hash];
    document.querySelector('.lng-comment').innerHTML = langArr['lng-comment'][hash];
    document.querySelector('.lng-regdate').innerHTML = langArr['lng-regdate'][hash];
    document.querySelector('.lng-category').innerHTML = langArr['lng-category-title'][hash];


}
changeLanguage()