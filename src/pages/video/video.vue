<style lang="less" scoped>
@import "../../less/config";
</style>

<template>
<div>
        <v-header></v-header>
        <v-content class="row" style="padding-top:50px;">
        	<div id="youkuplayer" style="width:100%;height:650px;"></div>
        </v-content>
        <v-footer></v-footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            	vid:{
            		'1':'XMTQ3NjIwNjkyOA==',
            		'2':'XMTQ3NjIyMzUwOA==',
            		'3':'XMTQyMjkwNTYwNA==',
            		'4':'XMTQ3NjIxMTA3Mg==',
            		'5':'XMTYzOTgzNzM4OA=='
            	}
            }
        },
         beforeCreate:function(){
		window.scrollTo(0,0);
	    },
        created(){
        	
        	 var _youkuProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
		     var _youkuUrl = (("https:" == document.location.protocol) ? "players.youku.com/jsapi" : "player.youku.com/jsapi");
	     	document.write(unescape("%3Cscript src='"+ _youkuProtocol
						+_youkuUrl+"' type='text/javascript'%3E%3C/script%3E"));
        },
        mounted(){ 
        	var  id=this.$router.currentRoute.params.id
        	var  vid=this.vid[id];
        	var that=this;
        	
        	
        	function run  (){       		
        		try{
        			 var 	player = new YKU.Player('youkuplayer',{
				styleid: '0',
				client_id: '6372e3b1bd5c0a29',
				vid: vid,
				autoplay: true,
				show_related: false
			     });
        		}
        		catch(err){
        			setTimeout(function(){
        	  	 	run();
        	  	 },1000)
        		}
        	}
        	run();
        	  
        
       },
       methods:{
       	
       	
       }
        }
</script>

