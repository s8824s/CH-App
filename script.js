function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value;
    if (message === "") return;

    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("chatBox").appendChild(li);

    input.value = "";
}