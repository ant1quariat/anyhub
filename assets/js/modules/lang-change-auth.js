const changeLang = document.querySelector('#lng-change');
const allLang = ['ru', 'en', 'de'];
const langArr = {
    "title-reg" : {
        "ru": "Авторизация Antiquariat ID",
        "en": "Sign In AntiquariatID",
        "de": "Eingeben AntiquariatID"
    },
    "recover" : {
        "ru": "Восстановить",
        "en": "Recovery",
        "de": "Wiederherstellen"
    },
    "recover-ing" : {
        "ru": "Забыли пароль",
        "en": "Forgot your password",
        "de": "Passwort vergessen"
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
    "auth-button" : {
        "ru": "Войти",
        "en": "Sign In",
        "de": "Eingeben"
    },
    "inf-check" : {
        "ru": "Нет аккауна",
        "en": "No account",
        "de": "Kein Account"
    },
    "lng-auth" : {
        "ru": "Зарегистрируйся",
        "en": "Sign Up",
        "de": "Registrieren"
    },
    "plh-login" : {
        "ru": "Ваш логин",
        "en": "Your login",
        "de": "Dein Login"
    },
    "plh-pass" : {
        "ru": "Ваш пароль",
        "en": "Your password",
        "de": "Dein passwort"
    },
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

    document.querySelector('.lng-save').innerHTML = langArr['save-placeholder'][hash];

    document.querySelector('.lng-auth').innerHTML = langArr['auth-button'][hash];

    document.querySelector('.lng-not-acc').innerHTML = langArr['inf-check'][hash];
    document.querySelector('.lng-reg').innerHTML = langArr['lng-auth'][hash];
    document.querySelector('.lng-recovery-text').innerHTML = langArr['recover-ing'][hash];
    document.querySelector('.lng-recovery').innerHTML = langArr['recover'][hash];

    document.querySelector('.lng-login').setAttribute("placeholder", langArr['plh-login'][hash]);
    document.querySelector('.lng-pass').setAttribute("placeholder", langArr['plh-pass'][hash]);

    document.querySelector('.lng-home').innerHTML = langArr['link-home'][hash];
    document.querySelector('.lng-about').innerHTML = langArr['link-about'][hash];
    document.querySelector('.lng-bug').innerHTML = langArr['link-bug'][hash];
    document.querySelector('.lng-lang').innerHTML = langArr['link-lang'][hash];

}
changeLanguage()
