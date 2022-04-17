<?php

    $dbHost = "localhost";
    $dbUser = "junioch";
    $dbPass = "root";
    $dbBase = "anyhub_db";


    $sqlConnect = new mysqli($dbHost, $dbUser, $dbPass, $dbBase) or die('Не удалось подключиться к БД!');