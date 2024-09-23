<?php
// Create a connection to your database
$conn = new mysqli("localhost", "Gerações");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
// Select your database
$conn->select_db("Gerações");
?>

<?php
// Execute your SQL file
$sql = file_get_contents("Gerações.sql");
$conn->multi_query($sql);
?>

<?php
// Close your connection
$conn->close();
?>
