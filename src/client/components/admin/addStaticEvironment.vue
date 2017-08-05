<template>
  <div class="addStaticEvironment">
      <div class="container">
          <div class="row">
              <div class="form-horizontal">
                  <div class="form-group">
                      <div class="col-sm-12">
                          <label class="control-label col-sm-2">时间</label>
                          <input type="text" v-model="time2" class="form-control" placeholder="2017-07-31">
                      </div>
                  </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                          <label class="control-label col-sm-2">时间</label>
                          <input type="text" v-model="time" class="form-control" placeholder="必须为整点(0:00-23:00)">
                      </div>
                  </div>
                  <div class="form-group">
                          <div class="col-sm-12">
                              <select id="test" class="form-control">
                             <option v-text="temperature" value="staticTemperature"></option>
                                <option v-text="humidity" value="staticHumidity"></option>
                                <option v-text="rainfall" value="staticRainfall"></option>
                                <option v-text="soilhumidity" value="staticSoilhumidity"></option>
                                <option v-text="windspeed" value="staticWindspeed"></option>
                                <option v-text="pm" value="staticPm"></option>
                                <option v-text="light" value="staticLight"></option>
                                <option v-text="pressure" value="staticPressure"></option>
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
            temperature:'温度',
            humidity:'湿度',
            rainfall:'降雨量',
            soilhumidity:'土壤湿度',
            windspeed:'风速风向',
            pm:'PM2.5',
            light:'光照强度',
            pressure:'气压',
            time:'',
            time2:''
        }
    },
    methods:{
        addStaticEvironment(){
            let params={
                api:url+'/admin/add/'+$("#test option:selected").val(),
                param:{
                    date:this.time2,
                    hour:this.time,
                    data:this.data
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
        }
        //,
        //setData(){
            // $.ajax({
            //      url:'http://www.apqte.com/api/1.0/ll/trace/getBase',
			// 	 cache:true,
			// 	type:'post',
			// 	 dataType:'jsonp',
			// 	 crossDomain:true,
			// 	 jsonp:'callback',
            //     // data:{
                //     "traceCode":"9693256390009800000000010",
                //     "baseNo":"BN001",
                //     "measureTime":1478486579,
                //     "itemName":"Temperature",

                // },
            //     data:{
            //         "traceCode":"9693256390009800000000010 "
            //     },
            //     success:function(data){
            //         console.log(data);
            //     },
            //     error:function(err){
            //         console.log(err)
            //     }
            // })
            // let params={
            //     api:'http://www.apqte.com/api/1.0/ll/enterprise/environment/getAllMeasureData',
            //     param:{
            //        itemName: "Temperature",
            //        measureTime:1501459200
            //     }
            // }
            // Axios.post(params)
            // .then(res=>{
            //     console.log(res.data);
            // })
            // .catch(err => {
            //             console.log(err);
            //         });
        //}
        // setData(){
        //     if(this.updateProduct){
        //         var setDom = document.getElementById('inputProductName');
        //         setDom.readOnly=true;
        //         this.name=this.updateProduct.name;
        //         this.quality=this.updateProduct.quality;
        //         this.technology=this.updateProduct.technology;
        //         this.specifications=this.updateProduct.specifications;
        //         this.packing=this.updateProduct.packing;
        //         this.selenium=this.updateProduct.selenium;
        //         this.describe=this.updateProduct.describe;
        //     }
        // }
    }
    // props:['updateProduct'],
    // mounted(){
    //     this.$nextTick(function(){
    //         this.getDate();
    //     })
    // }
}
</script>
<style scoped>
.positiion{
    margin-left: 15px !important;
}
</style>
