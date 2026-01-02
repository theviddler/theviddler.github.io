function checkAccess(event) {
    event.preventDefault();

    const input = document.getElementById('passwordField');
    const pass = input.value;
    const correctPassword = "gator";

    if (pass === correctPassword) {
        alert("Hello! I am a browser alert box!");
        window.location.href = "https://www.google.com";
    } else {
        input.value = "";
        input.focus();
    }
}

document.getElementById('access').addEventListener('submit', checkAccess);

document.addEventListener('click', () => {
    document.getElementById('passwordField').focus();
});
