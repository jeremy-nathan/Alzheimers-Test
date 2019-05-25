<?php
 require('database_connect.php');

if (isset($_POST['user_id']) and isset($_POST['user_pass'])){

// Assigning POST values to variables.
$username = $_POST['user_id'];
$password = $_POST['user_pass'];

// CHECK FOR THE RECORD FROM TABLE
$query = "SELECT * FROM `user_login` WHERE username='$username' and Password='$password'";

$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);

if ($count == 1){

//echo "Login Credentials verified";
echo "<script>
alert('Login Succesful');
window.location.href='home.html';
</script>";

}else{
  echo "<script>
  alert('Login Unsuccesful.Redirecting to Login Page.');
  window.location.href='login.html';
  </script>";
//echo "Invalid Login Credentials";
}
}
?>
