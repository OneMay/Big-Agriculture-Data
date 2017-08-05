<template>
    <div class="loginCanvas">
        <iframe src="./../../../static/canvas.html" width="100%" height="100%"></iframe>
    </div>
</template>
<script>
export default {
    name: 'loginCanvas',
    data() {
        return {
            show: false
        }
    },
    methods: {
        setTrue() {
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.setTrue();
        })
    }
}
</script>
<style>
.loginCanvas{
position: absolute;
top:0;
right: 0;
left:0;
bottom:0;
}
#logcanvas {
    width: 100%;
    height: 100%;
}
</style>