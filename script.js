function submitName() {
    const nameInput = document.getElementById('name-input').value;
    const nameDisplay = document.getElementById('name-display');
    const inputContainer = document.getElementById('input-container');
    const messageContainer = document.getElementById('message-container');

    if (nameInput) {
        nameDisplay.textContent = nameInput;
        inputContainer.classList.remove('active');
        messageContainer.classList.add('active');
    } else {
        alert('Harap masukkan nama Anda.');
    }
}
