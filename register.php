<?php
$db = new PDO('mysql:host=localhost;dbname=nplcregistration', 'root', '');
$teamname = $_POST['teamname'];
$category = $_POST['category'];


if ($category == "katdua") {
    $secondmembergender = $_POST['secondmembergender'];
    $thirdmembergender = $_POST['thirdmembergender'];
}
$coachname = $_POST['coachname'];
$coachphone = $_POST['coachphone'];
$schoolname = $_POST['schoolname'];
$schoolcity = $_POST['schoolcity'];
$schooladdress = $_POST['schooladdress'];
$schoolphone = $_POST['schoolphone'];
$firstmembername = $_POST['firstmembername'];
$firstmemberemail = $_POST['firstmemberemail'];
$firstmemberaddress = $_POST['firstmemberaddress'];
$firstmemberphone = $_POST['firstmemberphone'];
$firstmembergender = $_POST['firstmembergender'];
$secondmembername = $_POST['secondmembername'];
$secondmemberemail = $_POST['secondmemberemail'];
$secondmemberaddress = $_POST['secondmemberaddress'];
$secondmemberphone = $_POST['secondmemberphone'];
$thirdmembername = $_POST['thirdmembername'];
$thirdmemberemail = $_POST['thirdmemberemail'];
$thirdmemberaddress = $_POST['thirdmemberaddress'];
$thirdmemberphone = $_POST['thirdmemberphone'];

try {
    if ($category == "katdua") {
        $sql = $db->prepare("INSERT INTO formresult (teamname, category,coachname,coachphone,schoolname,schoolcity,schooladdress,schoolphone,firstmembername,firstmemberemail,firstmemberaddress,firstmemberphone,firstmembergender,secondmembername,secondmemberemail,secondmemberaddress,secondmemberphone,secondmembergender,thirdmembername,thirdmemberemail,thirdmemberaddress,thirdmemberphone,thirdmembergender) VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?)");
        $sql->execute(array($teamname, $category, $coachname, $coachphone, $schoolname, $schoolcity, $schooladdress, $schoolphone, $firstmembername, $firstmemberemail, $firstmemberaddress, $firstmemberphone, $firstmembergender, $secondmembername, $secondmemberemail, $secondmemberaddress, $secondmemberphone, $secondmembergender, $thirdmembername, $thirdmemberemail, $thirdmemberaddress, $thirdmemberphone, $thirdmembergender));
    } else {
        $sql = $db->prepare("INSERT INTO formresult (teamname, category,coachname,coachphone,schoolname,schoolcity,schooladdress,schoolphone,firstmembername,firstmemberemail,firstmemberaddress,firstmemberphone,firstmembergender) VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?)");
        $sql->execute(array($teamname, $category, $coachname, $coachphone, $schoolname, $schoolcity, $schooladdress, $schoolphone, $firstmembername, $firstmemberemail, $firstmemberaddress, $firstmemberphone, $firstmembergender));
    }
    echo "<script>location.href='index.html'</script>";
    echo "<script>alert('Success.')</script>";
} catch (PDOException $e) {
    echo "<script>alert('Failed.')</script>";
}
