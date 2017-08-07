Vue.component('list',{
    props: ['home','url'],
	data:function(){
			return{
				totalPage:'',
	            total: 10,
	            pageSize: 2,
	            cur: 1,
	            countryList:[]
			};
	    },
	template:
	`<div>
	   <table>
	        <thead>
	            <tr>
	                <th width="10%">id</th>
	                <th width="50%">{{home}}  name</th>
	                <th width="50%">{{home}}  value</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr v-for="(item,index) in countryList">
	                <td>{{index+1}}</td>
	                <td v-text="item.name"></td>
	                <td v-text="item.value"></td>
	            </tr>
	        </tbody>
	            <tfoot class="page-bar">
	               <td colspan="3">
				    <ul class="list">
				        <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
				        <li v-if="cur==1"><a class="banclick">上一页</a></li>
				        <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}">
				            <a v-on:click="btnClick(index)">{{ index }}</a>
				        </li>
				        <li v-if="cur!=totalPage"><a v-on:click="cur++,pageClick()">下一页</a></li>
				        <li v-if="cur == totalPage"><a class="banclick">下一页</a></li>
				        <li><a>共<i>{{totalPage}}</i>页</a></li>
				    </ul>
				    </td>
				</tfoot>    
	   </table>
     </div>
     `,
      mounted:function(){
          this.countryData();
      },
   
    computed: {
        indexs: function(){
            var left = 1;
            var right = this.totalPage;
            var ar = [];
                if(this.totalPage>= 5){
                    if(this.cur > 3 && this.cur < this.totalPage-2){
	                    left = this.cur - 2;
	                    right = this.cur + 2;
                    }else{
                        if(this.cur<=3){
                            left = 1;
                            right = 5;
                        }else{
		                    right = this.totalPage;
		                    left = this.totalPage -4;
                        }
                    }
                }
	            while (left <= right){
		            ar.push(left);
		            left ++;
	            }
	            return ar;
	            }
         
    },
    methods: {
        btnClick: function(data){
             if(data != this.cur){
                 this.cur = data ;
                 this.countryData();
            }
        },
        pageClick: function(){
             // console.log(this.cur);
             this.countryData();
        },
        countryData:function(){
	        var _this = this;
	        var page=parseInt(this.cur)-1;
	        this.$http.get(this.url+'?page='+page).then(function(res){
	            _this.countryList = res.body.list; 
	            _this.totalPage = res.body.totalPage;
	             // console.log(this.cur);
	             // console.log(_this.countryList);

	        });
        },
    },
    watch: {
        cur: function(oldValue , newValue){
            // console.log(arguments);
        }
        
    }
})
