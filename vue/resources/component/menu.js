Vue.component('leftMenu',{
	data:function(){
		return {
		 	items:[
			    {value:'Countries',url:'country'},
			    {value:'Operators',url:'operator'}
		    ]
		};
    },
    template:`
			<aside>
		        <ul class="side-list" v-for="item in items">
					<a @click="change(item)" v-text="item.value"></a>
				</ul>\
			</aside>\
			`,
    methods: {
		change: function(item){
			// console.log(item.url)
		    window.location.href =item.url;


		}
	}
})

    



