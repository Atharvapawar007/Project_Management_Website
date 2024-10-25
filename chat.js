
document.getElementById('emoji-button').addEventListener('click', function() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});


function addEmoji(emoji) {
    const inputField = document.getElementById('chat-input-field');
    inputField.value += emoji;
    document.getElementById('emoji-picker').style.display = 'none'; 
}


function sendMessage() {
    const chatMessages = document.getElementById('chat-messages');
    const inputField = document.getElementById('chat-input-field');
    const messageText = inputField.value.trim();

    if (messageText === '') return;

    
    const newMessage = document.createElement('div');
    newMessage.classList.add('chat-message', 'sent', 'highlighted');
    newMessage.innerHTML = `
        <p>${messageText}</p>
        <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <div class="reactions">
            <span class="reaction" onclick="addReaction(this)">👍</span>
            <span class="reaction" onclick="addReaction(this)">❤️</span>
            <span class="reaction" onclick="addReaction(this)">😂</span>
            <span class="reaction" onclick="addReaction(this)">😮</span>
            <span class="reaction" onclick="addReaction(this)">😢</span>
        </div>
    `;

    
    chatMessages.appendChild(newMessage);
    inputField.value = '';  

    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function addReaction(reactionElement) {
    
    const message = reactionElement.closest('.chat-message');
    message.classList.toggle('highlighted');
}
