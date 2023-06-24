<?php
  $to = "david.arroyave@teachers.org"; // Your email address
  $subject = "New Comment"; // Subject of the email
  $name = $_POST['name'];
  $email = $_POST['email'];
  $comment = $_POST['comment'];

  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= "Comment: $comment\n";

  // Send the email
  mail($to, $subject, $message);

  // Redirect the user back to the page after submission
  header("Location: Thankyou.html");
?>