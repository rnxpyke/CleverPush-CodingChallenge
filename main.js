// Tracks if the User already has interacted with the popup.
var popupInteraction = false;

// Helper fun
function popups() {
    return Array.from(document.getElementsByClassName("notify-popup"));
}

setTimeout(() => {
    if (!popupInteraction) {
        popups().forEach(b => b.classList.remove("hidden"));
    }
}, 3000);

function togglePopup() {
    popupInteraction = true;
    popups().forEach(b => b.classList.toggle("hidden"));
}

async function requestPush() {
    console.log("allow");
    let perm = await Notification.requestPermission();
    if (perm === "granted") {
        var note = new Notification("Hello World!");
    } else {
        console.error("user denied notification permission");
    }
}

async function denyPush() {
    popupInteraction = true;
    popups().forEach(b => b.classList.add("hidden"));
}