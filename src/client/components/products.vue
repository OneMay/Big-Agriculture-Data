<template>
    <div>
        <div class="canvas">
            <iframe src="./../../static/canvas.html" :width="width" height="300px"></iframe>
        </div>
        <div id="returnGeo">
            <geo v-on:tellToName="getProductName"></geo>
        </div>
        <!-- <router-link :to="'/detail'">产品中心</router-link><router-view></router-view> -->
        <td>
            <a href="javascript:;" class="md-trigger btn btn-primary btn-sm" id="click" data-modal="modal-4">Show Me</a>
        </td>
        <div class="md-modal md-effect-4" id="modal-4">
            <div class="md-content">
                <detail v-model="productName" :choseName="productName"></detail>
                <button class="md-close btn-sm btn-primary">Close me!</button>
            </div>
        </div>
        <div class="md-overlay"></div>
    </div>
</template>

<script>
import changeImg from './changeImg'
import geo from './geo'
import detail from './the-product'
import './../../static/css/lib/bootstrap.css'
import './../../static/css/lib/component.css'
//import './../../static/js/lib/modalEffects.js'
export default {
    name: 'products',
    data() {
        return {
            width: '100%',
            productName:''
        }
    },
    methods: {
        getProductName(msg){
            this.productName=msg;
            console.log( this.productName);
        },
        start() {
            // alert(1)
            /*!
             * classie - class helper functions
             * 
             * classie.has( elem, 'my-class' ) -> true/false
             * classie.add( elem, 'my-new-class' )
             * classie.remove( elem, 'my-unwanted-class' )
             * classie.toggle( elem, 'my-class' )
             */

            /*jshint browser: true, strict: true, undef: true */
            /*global define: false */


            //'use strict';

            // class helper functions from bonzo https://github.com/ded/bonzo

            function classReg(className) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

            // classList support for class management
            // altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ('classList' in document.documentElement) {
                hasClass = function (elem, c) {
                    return elem.classList.contains(c);
                };
                addClass = function (elem, c) {
                    elem.classList.add(c);
                };
                removeClass = function (elem, c) {
                    elem.classList.remove(c);
                };
            } else {
                hasClass = function (elem, c) {
                    return classReg(c).test(elem.className);
                };
                addClass = function (elem, c) {
                    if (!hasClass(elem, c)) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function (elem, c) {
                    elem.className = elem.className.replace(classReg(c), ' ');
                };
            }

            function toggleClass(elem, c) {
                var fn = hasClass(elem, c) ? removeClass : addClass;
                fn(elem, c);
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

            // transport
            if (typeof define === 'function' && define.amd) {
                // AMD
                define(classie);
            } else {
                // browser global
                window.classie = classie;
            }

            var ModalEffects = (function () {

                function init() {

                    var overlay = document.querySelector('.md-overlay');

                    [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
                        //alert(1111);
                        var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                            close = modal.querySelector('.md-close');

                        function removeModal(hasPerspective) {
                            classie.remove(modal, 'md-show');

                            if (hasPerspective) {
                                classie.remove(document.documentElement, 'md-perspective');
                            }
                        }

                        function removeModalHandler() {
                            removeModal(classie.has(el, 'md-setperspective'));
                        }

                        el.addEventListener('click', function (ev) {
                            // alert(ev);
                            // console.log(ev)
                            classie.add(modal, 'md-show');
                            overlay.removeEventListener('click', removeModalHandler);
                            overlay.addEventListener('click', removeModalHandler);

                            if (classie.has(el, 'md-setperspective')) {
                                setTimeout(function () {
                                    classie.add(document.documentElement, 'md-perspective');
                                }, 25);
                            }
                        });

                        close.addEventListener('click', function (ev) {
                            ev.stopPropagation();
                            removeModalHandler();
                        });

                    });

                }

                init();

            })();
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.start();
        })
    },
    components: {
        changeImg,
        geo,
        detail
    }

}
</script>

<style>
.canvas {
    height: 300px;
}

#click {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
</style>
