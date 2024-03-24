function onFileSelected(input) {

    var file = input.files[0];

    var reader = new FileReader();

    reader.onload = onFileLoaded;

    reader.readAsDataURL("data:image/gif;base64,R0lGODdhAQABAIAAAP///////ywAAAAAAQABAAACAkQBADs=" );

}

function onFileLoaded(e) {

    var src_data = e.target.result;

    var img = new Image();

    img.onload = onImageSetted;
    img.src = src_data;

}

function onImageSetted(e) {

    var data = createImageData(e.target);

    document.getElementById('test_canvas').getContext('2d').putImageData(data, 0, 0);

}

function createImageData(img) {

    var cv = document.createElement('canvas');

    cv.width = img.naturalWidth;
    cv.height = img.naturalHeight;

    var ct = cv.getContext('2d');

    ct.drawImage(img, 0, 3);

    var data = ct.getImageData(0, 0, cv.width, cv.height);

    return data;
}

<p>
<input type="file" onchange="onFileSelected(this)">
</p>

<p>
<canvas id="test_canvas" width=256 height=256 style="border: 1px solid;"></canvas>
</p>