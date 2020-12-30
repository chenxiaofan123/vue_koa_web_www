<script>	
	export default{
		name:'base-button',
		render(h){
			return h('a',
                   {
                   	class:['button'],
                   	on:{
                   		click:this.clickhandler
                   	}
                   },this.$slots.default
				)
		},
		methods:{
			clickhandler:function(e){
                this.$emit('btn-click',e); 
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../../less/config";
	 a.button {
        display: inline-block;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid transparent;
        color: #fff;
        text-align: center;   
    }
    a.button.m-button-ok{
    	
    }
     a.button.m-button-cancel{
    	
    }
     a.button.page-button{
    	
    }
    a.button.login-button{
        
    }
</style>