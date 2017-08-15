<template>
    <div>
        <div id="box"></div>
    
    </div>
</template>

<script>
import './../../static/js/lib/jquery-1.4.2.min.js'
import AXIOS from './../axios/axios'
const Axios = new AXIOS();
export default {
    name: "chnageImg",
    data() {
        return {
            list: [
            ]
        }
    },
    props: ['getUrl', 'getHeight', 'getWidth', 'productName'],
    watch: {
        productName: {
            //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
            handler(curVal, oldVal) {

                //this.setData('2017', '08','01',7);
                //setTimeout(this.setDate(curVal.year, curVal.month),0);
                //var f = document.getElementById("box");
                var elem = document.getElementById("box");
                while (elem.hasChildNodes()) //当elem下还存在子节点时 循环继续
                {
                    elem.removeChild(elem.firstChild);
                }
                //window.location.reload()
                this.getImg();
            },
            deep: true
        }

    },
    methods: {
        getImg() {
            if (this.getUrl == './../../static/axios/dataImg.json') {
                let params = {
                    api: this.getUrl,
                    param: {}
                };
                Axios.get(params)
                    .then(res => {
                        var data;
                         if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                        this.list = []
                        this.list = data.result;
                        //console.log(res);
                        this.start('box');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                //alert(this.productName);
                let params = {
                    api: this.getUrl,
                    param: {
                        name: this.productName
                    }
                };
                Axios.post(params)
                    .then(res => {
                         var data;
                         if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                        this.list = [];
                        this.list = data.postersInfo;
                        //console.log(res.data);
                        this.start('box');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }

        },
        start(id) {
            //console.log(this.list)
            var Id = "#" + id;
            (function ($) {
                $.fn.extend({
                    fade: function (opt) {
                        //设置默认值
                        var settings = {
                            url: null,
                            boxWid: 1000,
                            boxHei: 500,
                            times: 5000
                        };
                        //合并参数
                        //合并参数
                        var o = $.extend(settings, opt);
                        //缓存容器对象
                        var $box = this;
                        var $oUl = $('<ul></ul>');
                        var $prev = $('<h3>&lt;</h3>');
                        var $next = $('<h3>&gt;</h3>');
                        //创建图片元素
                        $.each(o.url, function (index, items) {
                            $box.append('<div><img src=' + items.imgUrl + ' /><p>' + (items.content || " ") + '<p></div>');
                            $oUl.append('<li>' + (index + 1) + '</li>');
                        });
                        $box.append($oUl);
                        /*****设置样式*****/
                        //容器及图片样式
                        $box.css({
                            width: o.boxWid,
                            height: o.boxHei,
                            position: 'relative'
                        }).children('div').css({
                            width: o.boxWid,
                            height: o.boxHei,
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            display: 'none'

                        }).eq(0).show().end().find('a,img').css({
                            display: 'block',
                            width: '100%',
                            height: '100%'
                        });
                        //焦点及左右按钮样式
                        $oUl.css({
                            position: 'absolute',
                            bottom: o.boxHei / 20,
                            right: (settings.boxWid - 145) / 2,
                            overflow: 'hidden',
                            zIndex: 5,
                            listStyle: 'none'
                        }).children('li').css({
                            float: 'left',
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            background: '#333',
                            opacity: 0.5,
                            marginRight: 5,
                            cursor: 'pointer',
                            textAlign: 'center',
                            lineHeight: '30px',
                            fontSize: '16px',
                            color: '#fff'
                        }).eq(0).css('opacity', 1);
                        $box.children('h3').css({
                            position: 'absolute',
                            top: (o.boxHei - 85) / 2,
                            padding: '20px 10px',
                            fontSize: 30,
                            fontFamily: '黑体',
                            color: '#fff',
                            background: '#333',
                            cursor: 'pointer',
                            display: 'none'
                        }).hide().eq(1).css('right', '0');
                        //自动轮播
                        var $timer = setTimeout(move, o.times);
                        var $flag = true;
                        var $index = 0;
                        function move() {
                            $index++;
                            if ($index == o.url.length) {
                                $index = 0;
                            }
                            //图片切换
                            $box.children('div').eq($index).stop().fadeIn(300, function () {
                                if ($flag) {
                                    clearTimeout($timer);
                                    $timer = setTimeout(move, o.times);
                                }
                            }).siblings('div').stop().fadeOut(300);
                            //焦点切换
                            $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                        }
                        //焦点切换
                        // $oUl.children('li').click(function () {

                        //     $flag = false;
                        //     clearTimeout($timer);
                        //     $index = $(this).index();
                        //     $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        //     $(this).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                        // });

                        //左右点击切换
                        //  $box.hover(function () {
                        //    $flag = false;
                        //     clearTimeout($timer);
                        //     $(this).children('h3').stop().fadeIn(300);
                        //     $prev.off('click').click(function () {
                        //         alert(1)
                        //         $index--;
                        //         if ($index == -1) {
                        //             $index = o.url.length - 1;
                        //         }
                        //         $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        //         $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                        //     }).next('h3').off('click').click(function () {
                        //         $index++;
                        //         if ($index == o.url.length) {
                        //             $index = 0;
                        //         }
                        //         $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        //         $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                        //     })
                        // }, function () {
                        //     $flag = true;
                        //     $timer = setTimeout(move, o.times);
                        //     $(this).children('h3').stop().fadeOut(300)
                        // });
                        //阻止文本被选中
                        $box.children('li').each(function (index, items) {
                            items.onselectstart = items.onmousedown = items.onmouseup = function () {
                                return false;
                            }
                        });
                        //返回容器对象
                        return this;
                    }
                })
            }(jQuery))
            var that = this;
            $("#box").fade({
                url: this.list,
                boxWid: that.getWidth,
                boxHei: that.getHeight
            }).css({
                margin: '0 auto'
            });


        }
    },
    mounted() {
        this.$nextTick(function () {
            this.getImg();
        })
    }
}
</script>

<style scoped>
#box p {
    position: relative;
    top: -100px;
    width: 60%;
    color: #fff;
    font-size: 1.8rem;
    margin: 0 auto;
    text-align: center;
}

.boxtop {
    width: 100%;
    height: 670px;
    position: absolute;
    top: 0;
    background: #000;
    opacity: 0.5;
}
</style>