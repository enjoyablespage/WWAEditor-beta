self.addEventListener("message", function (e) {
    var result;
    self.postMessage(MessageSetting());
}, false);