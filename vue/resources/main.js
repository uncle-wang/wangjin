
Vue.component('my-header',{
    props:[],
    data:function(){
        return {
            username:'',
            email:''
        }
    },
    //获取用户信息
    beforeMount: function() {
        var _self = this;
        axios.get('/vue/api/getUserInfo')
            .then(function (response) {
                _self.username = response.data.username;
                _self.email = response.data.email;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    template:'\
        <div class="header_box">\
            <div class="logo"></div>\
            <div class="user_info">\
                <div class="user_name">\
                     用户名:&nbsp;<span>{{username}}</span>\
                </div>\
            </div>\
        </div>\
        ',


});

Vue.component('slid-bar',{
    props:[],
    data:function(){
        return {
            nowpage:'',
            pagec:'Countries',
            pageo:'Operators',
            dataName:''
        }
    },
    methods:{
        pagechange:function(prmt){
            this.nowpage = prmt;
            this.$emit('name-change',this.nowpage);
            //    向父组件中派发事件
        }
    },
    //为了给table默认数据
    beforeMount:function(){
        var _self = this;
        var pagechange = function(){
            _self.$emit('name-change',_self.pagec);
            //    向父组件中派发事件
        }
        pagechange();
    },
    template:'\
        <div class="nav_bar">\
            <button class="countries" @click="pagechange(\'Countries\')">countries</button>\
            <button class="operators" @click="pagechange(pageo)">operators</button>\
        </div>\
        '
});

Vue.component('table-body',{
    props:['dataName'],
    data:function(){
        return {
            nowpageId:0,
            totalPage:'',
            pagesize:'',
            dataList:'',
            child_dataList:'',
            from:'',
            to:''
        }
    },
    //获取countries信息
    beforeMount: function() {
        var _self = this;
        var len=0;
        axios({
            method:'get',
            params: {
                page: _self.nowpageId
            },
            url:'/vue/api/getCountries'
        })
            .then(function (response) {
                _self.totalPage = response.data.totalPage;
                _self.dataList = response.data.list;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods:{
        up:function(parm){
            if(parm<=0){
                alert('已经是第一页了');
            }else{
                this.nowpageId-=1;
                this.updatelist(this.nowpageId);
            }
        },
        down:function(parm){
            if(parm<this.totalPage-1){
                this.nowpageId+=1;
                this.updatelist(this.nowpageId);
            }else{
                alert('已经是最后一页了');
            }
        }
        ,
        updatelist:function(ele){
            var _self = this;
            var urldes = '/vue/api/get'+this.dataName;
            axios({
                method:'get',
                params:{
                    page:ele
                },
                url:urldes
            })
                .then(function (response) {
                   _self.totalPage = response.data.totalPage;
                   _self.dataList = response.data.list;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    watch:{
        dataName:function(val,oleVal){
            var urldes = '/vue/api/get'+val;
            var _self = this;
            _self.nowpageId = 0;
            axios({
                method:'get',
                params: {
                    page: _self.nowpageId
                },
                url:urldes
            })
                .then(function (response) {
                    _self.totalPage = response.data.totalPage;
                    _self.dataList = response.data.list;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    template:'\
        <div class="data_area">\
            <div class="data_name">\
                  {{dataName}}\
            </div>\
            <div class="data_table">\
                <table>\
                    <tr class="data_name_list">\
                        <th class="table_cell"> {{dataName}}<span> &nbsp;name</span></th>\
                        <th class="table_cell"> {{dataName}}<span> &nbsp;value</span></th>\
                    </tr>\
                    <tr  v-for="item of dataList">\
                        <td class="table_cell">{{item.name}}</td>\
                        <td class="table_cell">{{item.value}}</td>\
                    </tr>\
                </table>\
            <div class="data_page">\
                <input type="button" value="上一页" @click="up(nowpageId)">\
                <span class="nowpageNum">{{nowpageId+1}}</span>\
                <input type="button" value="下一页" @click="down(nowpageId)">\
                <span class="pageTotal"> <span style="font-weight:bold">总页数:</span>{{totalPage}}</span>\
            </div>\
            \
            </div>\
            \
        </div>\
        '
});

//创建一个中间事件中心
var vm = new Vue({
    el: '#webapp',
    data:{
        aaa:'',
        prefix: ''
    },
    methods:{
        changename:function(paramater){
            // console.log(paramater);
            this.aaa=paramater;
            //    父组件中接收事件
        }
    }
});