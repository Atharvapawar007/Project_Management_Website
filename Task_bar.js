document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const submitButton = form.querySelector('button[type="submit"]');
    const addTaskButton = document.getElementById('Add-Task');

    function validateForm() {
        if (username.value.trim() !== '' && password.value.trim() !== '') {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    validateForm();

    username.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        if (username.value.trim() === '' || password.value.trim() === '') {
            event.preventDefault();
            alert('Please fill in both fields.');
        } else {
            window.location.href = 'create.html';
        }
    });

    if (addTaskButton) {
        addTaskButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('Task added successfully');
        });
    }
});
