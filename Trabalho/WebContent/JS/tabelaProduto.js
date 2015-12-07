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

