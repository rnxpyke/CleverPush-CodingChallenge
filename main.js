async function allowPush() {
    console.log("allow");
    let perm = await Notification.requestPermission();
    console.log(perm);
    if (perm === "granted") {
        var note = new Notification("Hello World!");
    }
}

async function denyPush() {
    console.log("deny");
}