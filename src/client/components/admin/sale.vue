<template>
  <div class="addStaticEvironment">
      <div class="container">
          <div class="row">
              <div class="form-horizontal">
                  <div class="form-group">
                      <div class="col-sm-12">
                          <label class="control-label col-sm-2">年份</label>
                          <input type="text" v-model="time2" class="form-control" placeholder="2017">
                      </div>
                  </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                          <label class="control-label col-sm-2">月份</label>
                          <input type="text" v-model="time" class="form-control" placeholder="7">
                      </div>
                  </div>
                  <div class="form-group">
                          <div class="col-sm-12">
                              <select id="test" class="form-control">
                             <option v-text="temperature" value="staticTemperature"></option>
                                <option v-text="humidity" value="staticHumidity"></option>
                                <option v-text="rainfall" value="staticRainfall"></option>
                                <option v-text="soilhumidity" value="staticSoilhumidity"></option>
                            </select> 
                         </div>
                  </div>
                  <div class="form-group">
                      <div class="col-sm-12">
                          <input type="text" id="inputProductName" v-model="data" class="form-control">
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10" style="position:absolute" v-text="message"></div>
                      <button class="btn btn-default positiion" @click="addStaticEvironment">录入</button>
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
    name:'addStaticEvironment',
    data(){
        return {
            data:'',
            message:'',
            temperature:'烘青8号（骑龙牌鹤峰茶）50g自立袋',
            humidity:'烘青9号（骑龙牌鹤峰茶）250g自立袋',
            rainfall:'烘青9号（骑龙牌鹤峰茶）100g自立袋',
            soilhumidity:'1号白茶（骑龙白茶）',
            time:'',
            time2:''
        }
    },
    methods:{
        addStaticEvironment(){
            $("#test option:selected").val()
            let params={
                api:url+'/admin/add/sale',
                param:{
                    year:this.time2,
                    month:this.time,
                    salesVolume:this.data,
                    name:$("#test option:selected").text()
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
        sendDatas(){
        }
    },
    // props:['updateProduct'],
    mounted(){
        this.$nextTick(function(){
            this.sendDatas();
        })
    }
}
</script>
<style scoped>
.positiion{
    margin-left: 15px !important;
}
</style>
