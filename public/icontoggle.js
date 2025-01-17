function togglePassword() {
    var passwordField = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "https://img.icons8.com/ios/452/visible.png"; 
    } else {
        passwordField.type = "password";
        eyeIcon.src = "https://img.icons8.com/ios/452/invisible.png";
    }
}