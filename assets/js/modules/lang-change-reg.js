const changeLang = document.querySelector('#lng-change');
const allLang = ['ru', 'en', 'de'];
const langArr = {
    "title-reg" : {
        "ru": "Регистрация Antiquariat ID",
        "en": "Create AntiquariatID",
        "de": "Schaffung AntiquariatID"
    },
    "load-placeholder" : {
        "ru": "Загрузите фото",
        "en": "Load is photo",
        "de": "Lade ein Foto hoch"
    },
    "confid-placeholder" : {
        "ru": "Я принимаю правила и политику сайта",
        "en": "I accept the site rules and policies",
        "de": "Ich akzeptiere die Website-Regeln und -Richtlinien"
    },
    "save-placeholder" : {
        "ru": "Запомнить аккаунт",
        "en": "Save session",
        "de": "Speichern Sie die Sitzung"
    },
    "link-home" : {
        "ru": "Главная",
        "en": "Home",
        "de": "Hause"
    },
    "link-about" : {
        "ru": "О нас",
        "en": "About Us",
        "de": "about US"
    },
    "link-bug" : {
        "ru": "Нашли баг?",
        "en": "BUG report",
        "de": "Sprache bug"
    },
    "link-lang" : {
        "ru": "Смена языка",
        "en": "Change lang",
        "de": "Sprache wechseln"
    },
    "reg-button" : {
        "ru": "Зарегистрироваться",
        "en": "Create account",
        "de": "Registrieren"
    },
    "inf-check" : {
        "ru": "Есть аккаунт",
        "en": "Already registered",
        "de": "Bereits registriert"
    },
    "lng-auth" : {
        "ru": "Авторизуйся",
        "en": "Sign In",
        "de": "Eingeben"
    },
    "plh-nick" : {
        "ru": "Ваше имя",
        "en": "Your name",
        "de": "Dein name"
    },
    "plh-login" : {
        "ru": "Ваш логин",
        "en": "Your login",
        "de": "Dein Login"
    },
    "plh-pass" : {
        "ru": "Придумайте пароль",
        "en": "Create a password",
        "de": "denken Sie sich ein Passwort aus"
    },
    "plh-pass-conf" : {
        "ru": "Повторите пароль",
        "en": "Repeat password",
        "de": "Wiederholen Sie das Passwort"
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

    
    document.querySelector('.lng-title').innerHTML = langArr['title-reg'][hash];
    document.querySelector('.lng-load').innerHTML = langArr['load-placeholder'][hash];

    document.querySelector('.lng-confid').innerHTML = langArr['confid-placeholder'][hash];
    document.querySelector('.lng-save').innerHTML = langArr['save-placeholder'][hash];

    document.querySelector('.lng-btn-reg').innerHTML = langArr['reg-button'][hash];
    document.querySelector('.lng-inf').innerHTML = langArr['inf-check'][hash];
    document.querySelector('.lng-auth').innerHTML = langArr['lng-auth'][hash];

    document.querySelector('.lng-nick').setAttribute("placeholder", langArr['plh-nick'][hash]);
    document.querySelector('.lng-login').setAttribute("placeholder", langArr['plh-login'][hash]);
    document.querySelector('.lng-pass').setAttribute("placeholder", langArr['plh-pass'][hash]);
    document.querySelector('.lng-conf-pass').setAttribute("placeholder", langArr['plh-pass-conf'][hash]);

    document.querySelector('.lng-home').innerHTML = langArr['link-home'][hash];
    document.querySelector('.lng-about').innerHTML = langArr['link-about'][hash];
    document.querySelector('.lng-bug').innerHTML = langArr['link-bug'][hash];
    document.querySelector('.lng-lang').innerHTML = langArr['link-lang'][hash];

}
changeLanguage()