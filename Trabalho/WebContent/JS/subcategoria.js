$(document).ready(function($){
	
	$.ajax({
		url:"",
		contentType:"application/json",
		beforeSend: function(){
			
		},
		complete: function(){
			
		},
		error: function(){
			
		},
		success: function(data){
			$.each(data, function(){
				var linha = $("<tr>").appendTo("#tabela");
				$.each(this, function(chave, valor){
					
					$("<td>",{
						text:valor
					}).appendTo(linha)
				});
			});
			
			
		}
	});
                  



$(document).ready(function(){
	
	$('#caixa').load('http://carrinhocompras-visecitecfsa.rhcloud.com/categoryList');
	
	$('#botao').click(function(){
	     $.ajax({
		 url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerSubCategory?nomeSubCategoria='+ $("#nome1").val()+'&idcategoria='+$("#caixa").val(),
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
				 alert("subcategoria cadastrada");
			 }
	     });
	     return false;
	
	});
});
