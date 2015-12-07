$('#botao').click(function(){
		
	     $.ajax({
		 url:'http://carrinhocompras-visecitecfsa.rhcloud.com/rest/produtos/listarTodos?limit=5&ofrest=1',
		 crossDomain:true,
		 
		     sucess:function(data){
			 alert(data);
			 },
			 error:function(){
				 alert("erro");
			 },
			 beforeSend:function(){
				 $('#carregando').show();
			 },
			 complete:function(){
				 $('#carregando').hide();
				 alert("categoria cadastrada");
			 }
	     });
	     return false;
	
	});