<template>
  <div id="app">
     <index v-if="isNotAdmin"></index> 
    <admin v-if="isAdmin"></admin>
  </div>
</template>
<script>
import 'babel-polyfill'
 import './../static/css/lib/4.2.0/css/font-awesome.min.css'
//  import './../static/js/lib/jquery-1.4.2.min.js'
 import index from './components/index'
  import admin from './components/admin/admin'
export default {
  name: 'app',
  data(){
    return {
      isNotAdmin:true,
      isAdmin:false
    }
  },
  methods:{
    setAdmin(){
      var hash = window.location.hash;
      var reg=/^(#\/admin)/g;
      if(reg.test(hash)){
        this.isAdmin=true;
        this.isNotAdmin=false;
      }else{
        this.isNotAdmin=true;
        this.isAdmin=false;
      }
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.setAdmin();
    })
  },
  components:{
    index,
    admin
  }
}
</script>
