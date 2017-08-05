var timer;

function getAnimate(num) {
    // alert(8)
    var getDom = document.getElementById('animate');
    var dom = document.getElementsByTagName('li');
    dom[0].className = "";
    var now = parseInt(window.getComputedStyle(getDom, null).left);
    var width = parseInt(window.getComputedStyle(dom[0], null).width);
    var length = width * dom.length;
    var itemWidth = null;
    switch (num) {
        case 1:
            getDom.style.left = '0px';
            break;
        case 2:
            animate(width + 70);
            break;
        case 3:
            clearTimeout(timer)
            animate(2 * (width + 70) - now)
                //  if(this.animated==false){
                //    if(this.isTrue.isBase==false){
                //    alert(1)
                //  this.animate(-(width+70))
                //  }
                // }
    }
}

function backAnimate(num) {
    //alert(1)
    clearTimeout(timer);
    //alert(this.animated)
    var getDom = document.getElementById('animate');
    //while(this.animated==false){
    // if (num == 2 && this.isTrue.isBase == false) {
    this.animate(-(parseInt(window.getComputedStyle(getDom, null).left)));
    // }

    //alert(22)
    // }
}

function animate(offset) {
    var that = this;
    this.animated = true;
    var newleft = offset;
    var time = 300; //位移总的时间
    var interval = 10; //位移时间间隔
    var speed = offset / (300 / 10); //每次移动量
    var getDom = document.getElementById('animate');

    function go() {
        if ((speed > 0 && parseInt(window.getComputedStyle(getDom, null).left) < offset) || (speed < 0 && parseInt(window.getComputedStyle(getDom, null).left) > 0)) {
            getDom.style.left = parseInt(getDom.style.left) + speed + 'px';
            timer = setTimeout(go, interval);
        } else {
            that.animated = false;
        }

    }
    go();
}