var bannerInteraction = false;



function toggleBanner() {
    bannerInteraction = true;
    let banners = document.getElementsByClassName("notify-banner");
    Array.from(banners).forEach(b => b.classList.toggle("hidden"));
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
    let banners = document.getElementsByClassName("notify-banner");
    Array.from(banners).forEach(b => b.classList.add("hidden"));
}