var bannerInteraction = false;


function banners() {
    return Array.from(document.getElementsByClassName("notify-banner"));
}

setTimeout(() => {
    if (!bannerInteraction) {
        banners().forEach(b => b.classList.remove("hidden"));
    }
}, 3000);

function toggleBanner() {
    bannerInteraction = true;
    banners().forEach(b => b.classList.toggle("hidden"));
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
    bannerInteraction = true;
    banners().forEach(b => b.classList.add("hidden"));
}