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

    if (!idInstance || !apiToken || !message) {
        showResponse("Error");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId: "77789265651@c.us", message: message })
        });
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

    if (!idInstance || !apiToken || !fileUrl) {
        showResponse("Error: Укажите все данные!");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chatId: "87789265651@c.us", urlFile: fileUrl, fileName: fileUrl.split('/').pop() })
        });
        const data = await response.json();
        showResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("Error: " + error.message);
    }
}

function showResponse(text) {
    document.getElementById("response").textContent = text;
}
