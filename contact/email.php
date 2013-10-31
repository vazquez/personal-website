<?php
  //  setting variables
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $msg = $_POST['message'];

  //checking spam
  if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!";
    exit;
}

//if(IsInjected($visitor_email))
//{
//    echo "Bad email value!";
//    exit;
//}

  $email_from = $visitor_email;
  $email_subject = "New Form Submission From $name";
  $email_body = "You have received a new message from the user $name.\n"."Here is the message:\n $msg";

  $to = "hello@rvazquez.ca";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply to: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header('Location: thanks.html');

//  function IsInjected($str) {
//    $injections = array('(\n+)',
//           '(\r+)',
//           '(\t+)',
//           '(%0A+)',
//           '(%0D+)',
//           '(%08+)',
//           '(%09+)'
//           );
//    $inject = join('|', $injections);
//    $inject = "/$inject/i";
//    if(preg_match($inject,$str))
//    {
//      return true;
//    }
//    else
//    {
//      return false;
//    }
//}
//if(IsInjected($visitor_email))
//{
//    echo "Bad email value!";
//    exit;
//}

?>

