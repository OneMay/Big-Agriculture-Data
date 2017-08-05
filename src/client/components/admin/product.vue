<template>
  <div class="addProduct">
      <div class="container">
          <div class="row">
              <div class="form-horizontal">
                  <div class="form-group">
                      <label for="inputProductName" class="col-sm-3 control-label">产品名称</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductName" v-model="name" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductZhi" class="col-sm-3 control-label">质量等级</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductZhi" v-model="quality" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductG" class="col-sm-3 control-label">加工工艺</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductG" v-model="technology" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductGG" class="col-sm-3 control-label">产品规格</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductGG" v-model="specifications" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductL" class="col-sm-3 control-label">包装类型</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductL" v-model="packing" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductX" class="col-sm-3 control-label">含硒量</label>
                      <div class="col-sm-12">
                          <input type="text" id="inputProductX" v-model="selenium" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="inputProductM" class="col-sm-3 control-label">产品描述</label>
                      <div class="col-sm-12">
                          <!-- <input type="text" id="inputProductM" class="form-control"> -->
                          <textarea id="inputProductM" rows='10' v-model="describe" class="form-control"></textarea>
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10" style="position:absolute" v-text="message"></div>
                      <button class="btn btn-default positiion" @click="addProductData">录入</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
 import AXIOS from './../../axios/axios'
 const Axios = new AXIOS();
const url = 'http://localhost:8080';
export default {
    name:'adminProduct',
    data(){
        return {
            name:'',
            quality:'',
            technology:'',
            specifications:'',
            packing:'',
            selenium:'',
            describe:'',
            message:''
        }
    },
    methods:{
        addProductData(){
            let params={
                api:url+'/admin/add/product',
                param:{
                    name:this.name,
                    quality:this.quality,
                    technology:this.technology,
                    specifications:this.specifications,
                    packing:this.packing,
                    selenium:this.selenium,
                    describe:this.describe
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
                this.message = data.message;
                if (!data.code) {
                    setTimeout(function () {
                        window.location.reload()
                    }, 1000)
                }
            })
            .catch(err => {
                        console.log(err);
                    });
        },
        setData(){
            if(this.updateProduct){
                var setDom = document.getElementById('inputProductName');
                setDom.readOnly=true;
                this.name=this.updateProduct.name;
                this.quality=this.updateProduct.quality;
                this.technology=this.updateProduct.technology;
                this.specifications=this.updateProduct.specifications;
                this.packing=this.updateProduct.packing;
                this.selenium=this.updateProduct.selenium;
                this.describe=this.updateProduct.describe;
            }
        }
    },
    props:['updateProduct'],
    mounted(){
        this.$nextTick(function(){
            this.setData();
        })
    }
}
</script>
<style scoped>
.positiion{
    margin-left: 15px !important;
}
</style>
