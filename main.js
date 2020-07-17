// Tracks if the User already has interacted with the popup.
var popupInteraction = false;

// Helper function to get all popups by class
function popups() {
    return Array.from(document.getElementsByClassName("notify-popup"));
}

// Show Popup if User didn't interact and doesn't block/allow notifications
// already
setTimeout(() => {
    if (!popupInteraction && !(Notification.permission !== "default")) {
        popups().forEach(b => b.classList.remove("hidden"));
    }
}, 3000);

// Toggle the visibility of the popup
function togglePopup() {
    popupInteraction = true;
    popups().forEach(b => b.classList.toggle("hidden"));
}


// allow action:
// request notification permisson and show hello word notification
async function requestPush() {
    let perm = await Notification.requestPermission();
    if (perm === "granted") {
        var note = new Notification("Hello World!");
    } else {
        console.error("user denied notification permission");
    }
}

// no, thinks action:
// close the popup
function denyPush() {
    popupInteraction = true;
    popups().forEach(b => b.classList.add("hidden"));
}