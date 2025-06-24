const apiUrl = "https://api.green-api.com";

async function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiTokenInstance").value;

    if (!idInstance || !apiToken) {
        showResponse("Error: id and api token empty");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/getSettings/${apiToken}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        showResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("Error: " + error.message);
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiTokenInstance").value;

    if (!idInstance || !apiToken) {
        showResponse("Error");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/getStateInstance/${apiToken}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        showResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("Error: " + error.message);
    }
}

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiTokenInstance").value;
    const message = document.getElementById("message").value;
    const chatId = document.getElementById("chatIdMessage").value;

    if (!idInstance || !apiToken || !message || !chatId) {
        showResponse("Error: Укажите все данные (idInstance, apiToken, message, chatId)");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId: chatId, message: message })
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        showResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("Error: " + error.message);
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiTokenInstance").value;
    const fileUrl = document.getElementById("fileUrl").value;
    const chatId = document.getElementById("chatIdFile").value;

    if (!idInstance || !apiToken || !fileUrl || !chatId) {
        showResponse("Error: Укажите все данные!");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId: chatId, urlFile: fileUrl, fileName: fileUrl.split('/').pop() })
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        showResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("Error: " + error.message);
    }
}

function showResponse(text) {
    const responseElement = document.getElementById("response");
    if (responseElement) {
        responseElement.value = text; // Используем .value для <textarea>
    } else {
        console.error("Element with id 'response' not found");
    }
}
