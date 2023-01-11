var i = 0;
var images = [];
var time = 2000;


images[0] = './image/beefsteak.jpg';
images[1] = './image/ginataangbaboy.jpg';
images[2] = './image/adobongbaboy.jpg';
images[3] = './image/tinolangisda.webp';
images[4] = './image/hotsilog.jpg';
images[5] = './image/lumpia.jpg';
images[6] = './image/tortangtalong.jpg';
images[7] = './image/chickencurry.jpg';
images[8] = './image/chickenliver.jpg';



function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

    window.onload = changeImg;