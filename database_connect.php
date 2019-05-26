<<<<<<< HEAD
<?php
$connection = mysqli_connect('localhost', 'root', '');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'alzheimer');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}
=======
<?php
$connection = mysqli_connect('localhost', 'root', '');
if (!$connection){
    die("Database Connection Failed" . mysqli_error($connection));
}
$select_db = mysqli_select_db($connection, 'alzheimer');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
}
>>>>>>> 91cd998ea2b7ee0c34873b678aeb1877a220e175
