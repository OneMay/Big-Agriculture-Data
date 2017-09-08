<template>
    <div>
        <header class="clearfix">
      <div class="logo">
        <i class="fa fa-futbol-o"></i>
        <p class="logo-text">农业大数据
          <br>
          <span>Big agricultural data</span>
        </p>
      </div>
      <div class="router-link meun">
        <ul class="clearfix" id="chose">
  
          <li :class="{current:isTrue.index}" @click="choseHover(isTrue,0)">
            <router-link :to="'/index/main'" >首页</router-link>
          </li>
          <li :class="{current:isTrue.isBase}" @click="choseHover(isTrue,1)">
            <router-link :to="'/index/database'" >数据基地</router-link>
          </li>
          <li :class="{current:isTrue.isProducts}" @click="choseHover(isTrue,2)">
            <router-link :to="'/index/products'" >产品中心</router-link>
          </li>
          <li :class="{current:isTrue.isTransport}" @click="choseHover(isTrue,2)">
            <router-link :to="'/index/transport'">运输中心</router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <login  v-on:showHead="showIndex" v-if="isFalse=false"></login>
    <footer>
      <p>Copyright©2008-2016 All Rights Reserved
        <i class="fa fa-futbol-o"></i>
      </p>
    </footer>
    </div>
</template>
<script>
 import './../../static/css/page/style.css'
 //import './../../static/js/lib/jquery-1.4.2.min.js'
export default {
  name: 'app',
  data() {
    return {
      isTrue: {
        index: false,
        isBase: false,
        isProducts: false,
        isTransport:false
      },
      num: ['index/main', 'index/isBase', 'index/isProducts','index/isTransport'],
      animated: true,
      show:true
    }
  },
  methods: {
    showIndex(msg){
      this.show=false;
     // alert(false);
    },
    choseHover(name, i) {
      var newnum = ['index/main', 'index/isBase', 'index/isProducts','index/isTransport'] ;
      newnum.splice(i, 1);
      for (var n = 0; n < newnum.length; n++) {
        name[newnum[n]] = false;
      }
      name[this.num[i]] = true;
    },
    setNav() {
      var arr = {
        '#/index/main': 0,
        '#/index/database': 1,
        '#/index/products': 2,
        '#/index/transport':3
      };
      var hash = window.location.hash;
      //alert(hash);
      // var reg=/^(#\/admin)/g;
      // if(reg.test(hash)){
      //   this.show=false;
      // }
      if (hash == '#/index/'||hash == '#/')
        hash = '#/index/main';
      var number = arr[hash];
      this.isTrue[this.num[number]] = true;
       this.setm(number);
    },
    setm(number) {
      /** jQuery Easing */
      jQuery.easing = {
        easein: function (x, t, b, c, d) { return c * (t /= d) * t + b },
        easeinout: function (x, t, b, c, d) { if (t < d / 2) return 2 * c * t * t / (d * d) + b; var a = t - d / 2; return -2 * c * a * a / (d * d) + 2 * c * a / d + c / 2 + b },
        easeout: function (x, t, b, c, d) { return -c * t * t / (d * d) + 2 * c * t / d + b },
        expoin: function (x, t, b, c, d) {
          var a = 1;
          if (c < 0) {
            a *= -1;
            c *= -1
          }
          return a * (Math.exp(Math.log(c) / d * t)) + b
        },
        expoout: function (x, t, b, c, d) {
          var a = 1;
          if (c < 0) {
            a *= -1;
            c *= -1
          }
          return a * (-Math.exp(-Math.log(c) / d * (t - d)) + c + 1) + b
        },
        expoinout: function (x, t, b, c, d) {
          var a = 1;
          if (c < 0) {
            a *= -1;
            c *= -1
          }
          if (t < d / 2) return a * (Math.exp(Math.log(c / 2) / (d / 2) * t)) + b;
          return a * (-Math.exp(-2 * Math.log(c / 2) / d * (t - d)) + c + 1) + b
        },
        bouncein: function (x, t, b, c, d) { return c - jQuery.easing['bounceout'](x, d - t, 0, c, d) + b },
        bounceout: function (x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b } else if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b } else if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b } },
        bounceinout: function (x, t, b, c, d) { if (t < d / 2) return jQuery.easing['bouncein'](x, t * 2, 0, c, d) * .5 + b; return jQuery.easing['bounceout'](x, t * 2 - d, 0, c, d) * .5 + c * .5 + b },
        elasin: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b },
        elasout: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b },
        elasinout: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5); if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b },
        backin: function (x, t, b, c, d) { var s = 1.70158; return c * (t /= d) * t * ((s + 1) * t - s) + b },
        backout: function (x, t, b, c, d) {
          var s = 1.70158;
          return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
        },
        backinout: function (x, t, b, c, d) { var s = 1.70158; if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b },
        linear: function (x, t, b, c, d) { return c * t / d + b }
      };
      /** jquery.lavalamp.min */
      (function ($) {

        $.fn.lavaLamp = function (o) {
          o = $.extend({ fx: "linear", speed: 500, click: function () { } }, o || {});
          return this.each(function () {
            var b = $('#chose'),
              noop = function () { },
              $back = $('<li class="back"><div class="left"></div><div class="arrow"><span class="icon"></span></div></li>').appendTo(b),
              $li = $("li", this),
              curr = $("li.current", this)[0] || $($li[number]).addClass("current")[0];
            $li.not(".back").hover(function () { move(this) }, noop);
            $(this).hover(noop, function () { move(curr) });
            $li.click(function (e) { setCurr(this); return o.click.apply(this, [e, this]) });
            setCurr(curr);

            function setCurr(a) {
              if(a){

              
              $back.css({ "left": a.offsetLeft + "px", "width": a.offsetWidth + "px" });
              curr = a}
            };

            function move(a) { $back.each(function () { $.dequeue(this, "fx") }).animate({ width: a.offsetWidth, left: a.offsetLeft }, o.speed, o.fx) }
          })
        }
        $(".meun").lavaLamp({

          fx: "backout",

          speed: 700,

          click: function (event, menuItem) {

            return true;

          }

        });
      })(jQuery);
    }
  }
  ,
  mounted() {
    this.$nextTick(function () {
      this.setNav();
      // var dom = document.getElementsByTagName('li');
      // var width = parseInt(window.getComputedStyle(dom[0], null).width);
      // var getDom = document.getElementById('animate');
      // if (this.isTrue.index) {
      //   getDom.style.left = '0px';
      // }
      // if (this.isTrue.isBase) {
      //   getDom.style.left = width + 70 + 'px';
      // }
      // if (this.isTrue.isProducts) {
      //   getDom.style.left = 2 * (width + 70) + 'px';

      // }
    })
  },
  components:{
  
  }
}
</script>
<style>
.current {
  color: #fff;
}

.aHover {
  color: #000 !important;
}

#chose {
  position: relative;
}

#animate {
  position: relative;
  opacity: 1;
  top: -70px;
  width: 100px;
  height: 70px;
  z-index: -10;
  background: url(./../../static/img/animate.png) repeat;
  transform: skewX(-20deg);
}


.meun_bg {
  position: absolute;
  top: 0px;
  left: 0px;
  background: url(./../../static/img/image87.png) no-repeat;
  height: 8px;
  width: 980px;
  overflow: hidden;
}



.meun li.back {
  position: absolute;
  background: url(./../../static/img/animate.png) repeat;
  opacity: 1;

  width: 100px;
  height: 70px;
  z-index: -10;
  transform: skewX(-20deg);
  margin: 0;
}
</style>
