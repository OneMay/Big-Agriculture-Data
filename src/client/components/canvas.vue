<template>
    <div :style="setstyle">
        <iframe src="/static/index.html" :width="width" :height="height"></iframe>
    </div>
</template>
<script>
export default {
    name:'canvas',
    data() {
        return {
            width:  '99.7%',
            height:'100%',
            setstyle:{
                width:'100%',
                height:window.screen.availHeight-120+'px'
            }
            //height:(document.documentElement.clientHeight-80) + 'px'
        }
    }
}
</script>

<style scoped>
.set{
    position:absolute;
    top:0;
    right:0;
    bottom: 0;
    left:0;
}
</style>
