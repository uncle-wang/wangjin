Vue.component('myHeader',{
	template:`
	    <header>
	         <div class="header-logo"></div>
	         <div class="header-user">用户名:{{username}}<span></span><button @click="exit">注销</button></div>
	    </header>
	`,
	data:function(){
		return{
			username:[]
		};
	},
	created: function () {
        this.getRoute();
    },
	 methods:{
		getRoute:function(){
            var _this = this;
			this.$http.get('/vue/api/getUserInfo').then(function(data){
				_this.username = data.body.username;
			},function(){
			})
		},
		exit:function(event){
		 	this.username='';
		}
    }
})
