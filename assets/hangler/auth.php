<?php
	session_start();
	include('module/db.php');

	$login = $_POST['login'];
	$password = $_POST['password'];

	$result = $sqlConnect->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
	
	$user = $result->fetch_assoc();

	if(count($user) == 0) {
		echo "Error, no user!";
		exit();
	}



	$_SESSION['ui_user_auth'] = $user['login'];
	$_SESSION['ui_user_name'] = $user['username'];
	$_SESSION['ui_user_regdata'] = $user['regdata'];
	$_SESSION['ui_user_img'] = $user['images'];

	header('Location: ../../pages/profile.php');
	


	