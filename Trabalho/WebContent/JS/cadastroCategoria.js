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
	
});


$('#botao').click(function(){
		
	     $.ajax({
		 url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerCategory?nomeCategoria='+$('#nome1').val(),
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

function validaCampos(){
	var nome = document.querySelector("#nome1");
	var b = true;
	
	if(nome.value == ""){
		alert("Preencha todos os campos");
		b = false;
	}
	return b;
}