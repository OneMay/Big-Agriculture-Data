<template>
  <div class="producList">
      <div class="container">
          <div class="row">
              <table class="table table-hover table-bordered">
                  <thead>
                      <tr>
                          <th>产品名称</th>
                          <th>质量等级</th>
                          <th>加工工艺</th>
                          <th>产品规格</th>
                          <th>更新</th>
                          <th>删除</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in items">
                          <td v-text="item.name"></td>
                          <td v-text="item.quality"></td>
                          <td v-text="item.technology"></td>
                          <td v-text="item.specifications"></td>
                          <td><span @click="update(item)">更新</span></td>
                          <td><button class="btn btn-danger del" @click="deleteProduct(item.name)">删除</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <nav>
          <p style="text-align:center">一共有{{count}}条数据，每页最多显示{{limit}}条数据，共{{currentPage}}页，当前第{{pages}}页</p>
          <ul class="pager">
              <li class="previous"><span @click="getProducts(--page)">&larr;上一页</span></li>
              <li class="next"><span @click="getProducts(++page)">下一页 &rarr;</span></li>
          </ul>
      </nav>
  </div>
</template>
<script>
    import AXIOS from './../../axios/axios'
    const Axios = new AXIOS();
    const url = '';
    export default {
        name: 'productList',
        data() {
            return {
                items: [],
                page: 1,
                count: null,
                currentPage: null,
                pages: null,
                limit: null
            }
        },
        methods: {
            update(item) {
                this.$emit('choseUpdate', item);
                $('.product').click();
            },
            deleteProduct(name) {
                let params = {
                    api: url + '/admin/delete/product',
                    param: {
                        name: name
                    }
                }
                Axios.post(params)
                    .then(res => {
                        this.getProducts();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getProducts(num) {
                if (num > this.currentPage) {
                    num = this.currentPage;
                    this.page = this.currentPage;
                }
                if (num <= 1) {
                    num = 1;
                    this.page = 1;
                }
                let params = {
                    api: url + '/admin/find/productList' + '?page=' + num,
                    param: {
                        page: this.page
                    }
                }
                Axios.get(params)
                    .then(res => {
                        var data;
                        if (typeof(res.data) == "object" && Object.prototype.toString.call(res.data).toLowerCase() == "[object object]" && !res.data.length) {
                            data = res.data;
                        } else {
                            data = JSON.parse(res.data)
                        }
                        this.limit = data.limit;
                        this.count = data.count;
                        this.currentPage = data.currentPage;
                        this.pages = data.page;
                        this.items = data.productList;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.getProducts(this.page);
            })
        }
    }
</script>
<style scoped>
    span:hover,
    span:focus {
        cursor: pointer;
        color: red !important;
    }
</style>