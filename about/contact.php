<?php
if(isset($_POST['email'])){
	$email_to = "nyhochan.lee@gmail.com";
	$email_from = "FinanceScript";
	
	function died($error){
		echo "The form seems to be invalid because of the following errors. <br/><br/>";
		echo $error. "<br/><br/>";
		die();
	}
	// validation
	if(!isset($_POST['fname']) ||
	!isset($_POST['lname']) ||
	!isset($_POST['email']) ||
	!isset($_POST['comments'])){
	died('Oops! There appears to be a problem with the form you have submitted.');
	}
	
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$comments = $_POST['comments'];
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/';
	if(!preg_match($email_exp, $email)){
		$error_message .= 'The Email address you entered was not found.<br/>';
	}
	$string_exp = "/^[A-Za-z.'-]+$/";
	if (!preg_match($string_exp, $fname)){
		$error_message .= 'Please enter a valid English first name.<br/>';
	}
	$string_exp = "/^[A-Za-z.'-]+$/";
	if (!preg_match($string_exp, $lname)){
		$error_message .= 'Please enter a valid English last name.<br/>';
	}
	if(strlen($comments) < 2){
		$error_message .= 'Please write in more detail.<br/>';
	}
	if(strlen($error_message) > 0){
		died($error_message);
		}
		$email_message = "Form Details below.\n\n";
	function clean_string($string){
		$bad = array("content-type", "bcc:", "to:", "cc:", "href");
		return str_replace($bad, "", $string);
		$worse = array("<script>");
		return str_replace($worse, "tmzmflq", $string);
	}
		$email_message.= "Name:" .clean_string($fname) . clean_string($lname). "\n";
		$email_message.= "Email:" .clean_string($email) . "\n";
		$email_message.= "Comments:" .clean_string($comments) . "\n";
		
	// create email headers
	
	$headers = 'From: '  .$email_From . "\r\n". 'Reply-To' .$email. "\r\n" .
	'X-Mailer: PHP' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
}
?>
<!-- success message goes here-->
Thank you for contacting us. We will be in touch with you shortly. <br/>
Please click <a href="default.html"> here </a> to go back to the form.
<?php
?>