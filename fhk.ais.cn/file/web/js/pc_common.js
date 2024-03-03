	function toModule( module ){
	  	var url = "";
	  	if(host){
	  			url ="/"+module+"?lang="+lang;
	  	}else{
	  		url ="/"+identify+"/"+module+"?lang="+lang;
	  	} 
	  	
	  	if(auth_website){
  			url += "&auth_website="+auth_website;
  		}
	    window.location.href = url;	
	 }
	 //JavaScriptä»£ç åºå
	  	layui.use('element', function(){
	    var element = layui.element;
	  });
//跳转首页
	  function goHome(){
	  	var url = "";
	  	if(host){
	  			url ="/?lang="+lang;
	  	}else{
	  		url ="/"+identify+"?lang="+lang;
	  	} 
	    window.location.href = url;	
	 }
	 
	  function eidtLang(){
			if(lang == "cn"){
			lang = "en";
			}else{
			lang = "cn";
			}
			goHome();
	 }
  
  //获取url参数
  function getQueryString(name){
	  	try{
	  		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
	  	}catch(err){
	  		return null;
	  	}
	}
		
  //跳转页面
  function toPage(type,url){
  	if(url){
  		if(type == 0){ //本页打开
	  	window.open(url,'_self');
	  	}else{  //新窗口打开
	  	window.open(url,'_blank');
	  	}
  	}
  }
	function toNew(id){
		var moduleName = $("#moduleName").val();
		var module = $("#module").val();
		
		var url = "";
	  	if(host){
	  		url ="/newModule?lang="+lang+"&newId="+id;
	  		
	  	}else{
	  		url ="/"+identify+"/newModule?lang="+lang+"&newId="+id;
	  	} 
	  	
	  	if(moduleName && module){
	  		url += "&moduleName="+moduleName+"&module="+module;
	  	}
	  	if(auth_website){
  			url += "&auth_website="+auth_website;
  		}
	    window.location.href = url;	
	}
	
	
    function stopColor(type , id) {
    	if(type == 1){
    		document.getElementById(id).style.color = "red";
    	}else if(type == 2){
            document.getElementById(id).style.color =  "black";	
    	}else if(type == 3){
            document.getElementById(id).style.color =  "white";	
    	}
     }
    
    function functModule(id){
		var url = "";
	  	if(host){
	  			url ="/functModule?lang="+lang+"&functId="+id;
	  		
	  	}else{
	  		url ="/"+identify+"/functModule?lang="+lang+"&functId="+id;
	  	} 
	  	if(auth_website){
  			url += "&auth_website="+auth_website;
  		}
	    window.location.href = url;	
	}
