<?php
// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Example: Send email (replace with your own logic)
    $to = 'your@email.com'; // Replace with your email address
    $subject = 'New Message from Nail Salon Website';
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Send email (example using mail function, replace with appropriate email library)
    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo json_encode(array('message' => 'Message sent successfully.'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Failed to send message. Please try again later.'));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('message' => 'Method not allowed.'));
}
?>
