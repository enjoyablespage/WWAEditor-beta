var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
    // Handle the message here
}, false);

worker.postMessage('MessageSetting');



