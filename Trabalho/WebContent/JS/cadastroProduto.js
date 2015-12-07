
	 $(document).ready(function(){
		 
		$('#caixa1').load('http://carrinhocompras-visecitecfsa.rhcloud.com/categoryList');
		$('#caixa2').load('http://carrinhocompras-visecitecfsa.rhcloud.com/subCategoryList?idCategoria='+$("#caixa1").val()),
		
			$('#caixa1').change(function(){
				$('#caixa2').load('http://carrinhocompras-visecitecfsa.rhcloud.com/subCategoryList?idCategoria='+$("#caixa1").val()),
		
		   $('#botao').click(function(){
			   $.ajax({
					url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerProduct?descricao='+$("#nome2")+'&valorAtual='+$("#nome3")+'&valorAnterior='+$("#nome4")+'&idSubcategoria='+$("#caixa2").val(),
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
							 alert("produto cadastrado");
						 }  
				   
			   });
			   return false;
		   });	
		    		
			});
	  });
	 