
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
            navitems:[
                {num:1,  text: 'Countries'},
                {num:2,  text: 'Operators'}
            ]
        }
    },
    methods:{
        pagechange:function(prmt){
            this.nowpage = prmt;
            // 向父组件中派发事件
            this.$emit('name-change',this.nowpage);
        }
    },
    template:'\
        <div class="nav_bar">\
            <div  v-for="item in navitems">\
                <button class="nav_list" @click="pagechange(item.text)">{{item.text}}</button>\
            </div>\
        </div>\
        '
});

Vue.component('table-body',{
    props:{
        dataName:{
            type:String,
            default:'Countries',
            require:true
        }
    },
    data:function(){
        return {
            pagec:'Countries',
            nowpageId:0,
            totalPage:'',
            dataList:'',
            updatelist:function(){}
        }
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
    },
    beforeMount: function() {
        var _self = this;
        //获取navlist信息渲染界面
        _self.updatelist = function(ele){
            var urldes = '/vue/api/get'+_self.dataName;
            axios({
                method:'get',
                params: {
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
        };
        _self.updatelist(_self.nowpageId);
    },

    watch:{
        dataName:function(val,oleVal){
            var urldes = '/vue/api/get'+val;
            var _self = this;
            _self.nowpageId = 0;
            _self.updatelist(_self.nowpageId);
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
                    <tr  v-for="item in dataList">\
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
        //给子组件传入默认值
        dataname:'Countries'
    },
    methods:{
        changename:function(paramater){
            //    父组件中接收事件
            this.dataname=paramater;
        }
    }
});