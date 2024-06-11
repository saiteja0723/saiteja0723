document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('ADMIN').value;
    const password = document.getElementById('password').value;
    const errorText = document.getElementById('errorText');
    if (username === 'saiteja' && password === '987654') {
        window.location.href = 'd dry fruits and spices.html';
    } else if (username === 'user1' && password === '123456') {
        window.location.href = 'combined page.html';
    } else {
        errorText.textContent = 'Invalid username or password';
    }
});
document.getElementById("logoutButton").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "login.html";
});