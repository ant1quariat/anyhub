<?php

    include('module/db.php');

    $userName = $_POST['name'];
    $userLogin = $_POST['login'];
    $userEmail = $_POST['email'];
    $userPassword = $_POST['password'];
    $userConfPassword = $_POST['confirm-password'];
    $userConf = $_POST['reg-confirm'];
    $userSes = $_POST ['session-save'];

    // Если в $_FILES существует "image" и она не NULL
    if (isset($_FILES['file'])) {
        $image = $_FILES['file'];

        // Получаем нужные элементы массива "image"

        $fileTmpName = $_FILES['file']['tmp_name'];
        $errorCode = $_FILES['file']['error'];

        // Проверим на ошибки

        if ($errorCode !== UPLOAD_ERR_OK || !is_uploaded_file($fileTmpName)) {

            // Массив с названиями ошибок

            $errorMessages = [
                UPLOAD_ERR_INI_SIZE   => 'Размер файла превысил значение upload_max_filesize в конфигурации PHP.',
                UPLOAD_ERR_FORM_SIZE  => 'Размер загружаемого файла превысил значение MAX_FILE_SIZE в HTML-форме.',
                UPLOAD_ERR_PARTIAL    => 'Загружаемый файл был получен только частично.',
                UPLOAD_ERR_NO_FILE    => 'Файл не был загружен.',
                UPLOAD_ERR_NO_TMP_DIR => 'Отсутствует временная папка.',
                UPLOAD_ERR_CANT_WRITE => 'Не удалось записать файл на диск.',
                UPLOAD_ERR_EXTENSION  => 'PHP-расширение остановило загрузку файла.',
            ];

            // Зададим неизвестную ошибку
           
            $unknownMessage = 'При загрузке файла произошла неизвестная ошибка.';
           
            // Если в массиве нет кода ошибки, скажем, что ошибка неизвестна
           
            $outputMessage = isset($errorMessages[$errorCode]) ? $errorMessages[$errorCode] : $unknownMessage;
           
            // Выведем название ошибки

            die($outputMessage);
        } 
        else {
            // Создадим ресурс FileInfo
            $fi = finfo_open(FILEINFO_MIME_TYPE);
            
            // Получим MIME-тип
            $mime = (string) finfo_file($fi, $fileTmpName);
            
            // Проверим ключевое слово image (image/jpeg, image/png и т. д.)
            if (strpos($mime, 'image') === false) die('Можно загружать только изображения.');

            // Результат функции запишем в переменную
            $image = getimagesize($fileTmpName);
            
            // Зададим ограничения для картинок
            $limitBytes  = 1024 * 1024 * 5;
            $limitWidth  = 1280;
            $limitHeight = 768;
            
            // Проверим нужные параметры
            if (filesize($fileTmpName) > $limitBytes) die('Размер изображения не должен превышать 5 Мбайт.');
            if ($image[1] > $limitHeight)             die('Высота изображения не должна превышать 768 точек.');
            if ($image[0] > $limitWidth)              die('Ширина изображения не должна превышать 1280 точек.');
        
            // Сгенерируем новое имя файла на основе MD5-хеша
            function getRandomFileName($path)
                {
                    $path = $path ? $path . '/' : '';
                    do {
                        $name = md5(microtime() . rand(0, 9999));
                        $file = $path . $name;
                    } while (file_exists($file));
                    
                        return $name;
                }
            $name = getRandomFileName($fileTmpName);
            
            // Сгенерируем расширение файла на основе типа картинки
            $extension = image_type_to_extension($image[2]);
            
            // Сократим .jpeg до .jpg
            $format = str_replace('jpeg', 'jpg', $extension);
            
            // Переместим картинку с новым именем и расширением в папку /upload
            if (!move_uploaded_file($fileTmpName, '../user_images/' . $name . $format)) {
                die('При записи изображения на диск произошла ошибка.');
            }

            $imageSrc = '/user_images/' . $name . $format;
            if ($userPassword !== $userConfPassword){
                die('Пароли не совпадают!');
            } 
            else {
                $sqlConnect->query("INSERT INTO `users`(`username`, `email`, `login`, `password`, `images`) VALUES ('$userName', '$userEmail', '$userLogin', '$userPassword', '$imageSrc')")or die('Запрос не получился(');
	            $sqlConnect->close();
                header('Location: ../../pages/auth.html');
            }
        }
  };



