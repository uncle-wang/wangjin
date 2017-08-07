Vue.component('leftMenu',{
 data:function(){
 	return {
 		items:[
	            {value:'Countries'},
	            {value:'Operators'}
              ]
            };
    },
    template:'\
	    <aside>\
            <ul class="side-list">\
			    <a href="country" class="side-item">Countries</a>\
			    <a href="operator" class="side-item">Operators</a>\
		    </ul>\
	    </aside>\
	'
	// methods:{
	// 	change:function(event){

	// 		this.href="operators.html"
	// 	}
	// }
    
})


