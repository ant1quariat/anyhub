<? 
    session_start(); 

    if (empty($_SESSION['ui_user_auth']))
        {
            header('Location: auth.html');
        }
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="lng-title">PROект</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/modules/_profile.css">
    <link rel="shortcut icon" href="../assets/img/glogo.png" type="image/x-icon">
</head>
<body>
    <div class="wrapper">
        <header class="header__wrapper">
            <div class="left__button">

            </div>
            <div class="header__logo">
                <img src="../assets/img/logo1.png" alt="">
            </div>
            <div class="header__menu">
                <a class="footer__link" onclick="elemClose('navbar')">
                    Menu
                </a>
            </div>
        </header>
        <main class="main__wrapper">
            <section class="content">
                <div class="content__news">
                   <section class="__profile_wrapper">
                       <div class="__profile_image-wrapper">
                           <img class="__profile_image" src="../assets<?= $_SESSION['ui_user_img']?>" alt="">
                        </div>
                        <div class="__profile_info">
                            <span class="__profile_title-text">
                                <?= $_SESSION['ui_user_name']?>
                            </span>
                            <div class="__profile_info-more">
                                <span class="__profile_info-banner lng-banner" id="__id-banner-1">
                                    Пользователь
                                </span>
                                <span class="__profile_info-comment">
                                    <span class="lng-comment">Комментариев:</span>
                                    <span class="__comment_value">
                                        0
                                    </span>
                                </span>
                                <span class="__profile_info-regdat">
                                    <span class="lng-regdate">Дата регистрации:</span> 
                                    <span class="__regdat_value">
                                        <?= $_SESSION['ui_user_regdata']?>
                                    </span>
                                </span>
                            </div>
                        </div>
                   </section>
                </div>
            </section>
            <section class="navigation" id="navbar">
                <span class="navigation__title lng-title-sitemenu">Site Menu</span>
                <div class="navigation__site">
                    <a class="navigation__news-element lng-home" href="../index.html">
                        Home
                    </a>
                    <a class="navigation__news-element lng-news" href="/news.php">
                        News
                    </a>
                    <a class="navigation__news-element lng-about" href="/about.html">
                        About Us
                    </a>
                    <a class="navigation__news-element lng-contacts" href="/contacts.html">
                        Contacts
                    </a>
                    <div class="button__right">
                        <select class="cnange-lang" name="lang" id="lng-change">
                            <option selected>reset</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                            <option value="de">DE</option>
                        </select>
                    </div>
                    </div>
                    <hr class="menu__hr">
                    <span class="navigation__title lng-profiles">User Profiles</span>
                <? if (empty($_SESSION['ui_user_auth'])):?>
                    <div class="account__site">
                        <a class="navigation__news-element lng-signin" href="register.html">
                            Sign In
                        </a>
                        <a class="navigation__news-element lng-signup" href="auth.html">
                            Sign Up
                        </a>
                    </div>
                <? else: ?>
                    <div class="account__site">
                        <a class="navigation__news-element lng-setting" href="settings.php">
                            Settings
                        </a>
                        <a class="navigation__news-element lng-exit" href="../assets/hangler/exit.php">
                            Exit
                        </a>
                    </div>
                <? endif; ?>
                <hr class="menu__hr">
                <span class="navigation__title lng-category">Site Categories</span>
                <div class="navigation__category">
                    <a href="#" class="navigation__news-element" id="ct1">Category 1</a>
                    <a href="#" class="navigation__news-element" id="ct2">Category 2</a>
                    <a href="#" class="navigation__news-element" id="ct3">Category 3</a>
                    <a href="#" class="navigation__news-element" id="ct4">Category 4</a>
                    <a href="#" class="navigation__news-element" id="ct5">Category 5</a>
                    <a href="#" class="navigation__news-element" id="ct6">Category 6</a>
                    <a href="#" class="navigation__news-element" id="ct7">Category 7</a>
                    <a href="#" class="navigation__news-element" id="ct8">Category 8</a>
                    <a href="#" class="navigation__news-element" id="ct9">Category 9</a>
                    <a href="#" class="navigation__news-element" id="ct10">Category 10</a>
                </div>
                <hr class="menu__hr">
            </section>
        </main>
        <footer class="footer__wrapper">
            <div class="scroll__up">
                <a class="scrollUp" onclick="ScrollUp();">
                    <img src="../assets/img/up 2.png" alt="">
                </a>
            </div>
            <div class="footer__logo">
                <span class="logo--text">
                    (c) 2022 
                    <a class="footer__link scroll_top" href="#">CUMпания</a>
                </span>
            </div>
            <div class="footer__links">

            </div>
        </footer>
    </div>
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/modules/_lang-gl.js"></script>
    <script src="../assets/js/jquery.js"></script>
</body>
</html>