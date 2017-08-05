<template>
  <div class="products">
      <h2>产品信息</h2>
      <div class="clearfix">
          <div class="img"><changeImg :getUrl="Url" :getHeight="height" :getWidth="width"></changeImg></div>
      <dl class="details">
          <dt>产品名称：</dt>
          <dd v-text="name"></dd>
          <dt>质量等级：</dt>
          <dd v-text="quality"></dd>
          <dt>加工工艺：</dt>
          <dd v-text="technology"></dd>
          <dt>产品规格：</dt>
          <dd v-text="specifications"></dd>
          <dt>包装类型：</dt>
          <dd v-text="packing"></dd>
          <dt>含硒量： </dt>
          <dd v-text="selenium"></dd>
      </dl>
      </div>
      <div class="clearfix">
          <dt class="describe" >产品描述:</dt>
          <dd v-text="describe"></dd>
      </div>
  </div>
</template>
<script>
import changeImg from './changeImg'
import AXIOS from './../axios/axios'
 const Axios = new AXIOS();
const url = 'http://localhost:8080';
export default {
    name:'detail',
    data(){
        return{
            height: 336,
            Url: './../../static/axios/dataImg.json',
            width:570,
            name:'',
            quality:'',
            technology:'',
            specifications:'',
            packing:'',
            selenium:'',
            describe:''
        }
    },
    props:['choseName'],
     watch: {
            choseName: {
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal, oldVal) {
                    
                   this.getProduct();
                    //setTimeout(this.setDate(curVal.year, curVal.month),0);
                },
                deep: true
            }

        },
    methods:{
        getProduct(){
            var api=url+'/api/get/product';
            if(this.choseName=='设备1'){
                var name='烘青9号（骑龙牌鹤峰茶）250g自立袋';
                let params={
                    api:api,
                    param:{
                        name:name
                    }
                }
                Axios.post(params)
                .then(res=>{
                    var data;
                        if(typeof (res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length){
                            data=res.data;
                        }else{
                            data=JSON.parse(res.data)
                        }
                    //var data=JSON.parse(res.data)||res.data;
                    this.name=data.product.name;
                    this.quality=data.product.quality;
                    this.technology=data.product.technology;
                    this.specifications=data.product.specifications;
                    this.packing=data.product.packing;
                    this.selenium=data.product.selenium;
                    this.describe=data.product.describe;
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.getProduct();
        })
    },
    components:{
        changeImg
    }
}
</script>

<style scoped>
.img{
    width:570px;
    float:left;
}
.products{
    width:1140px;
    margin:0 auto;
}
.products h2{
    text-align: center;
}
.details{
    font-size: 16px;
    width:540px;
    margin-top:25px;
    float:right;
}
.describe{
    font-size: 16px;
    font-weight: bold;
    clear: both;
    width:80px;
    text-align: left;
}
dt{
    width:100px;
    float:left;
    font-weight: bold;
    text-align: right;
    line-height: 3;
}
dd{
    margin-left:110px;
    font-size: 16px;
    line-height: 3;
    font-weight: 500;
    color:#333;
}
</style>


