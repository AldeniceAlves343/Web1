$(document).ready(function(){
				var heightProduto = 1800;
				alert("chamou!");
				$(window).scroll(function(){
				
					if($(this).scrollTop() + $(this).height() >= heightProduto){
						heightProduto+=192;
						console.log("fim");
					}
				});
});	


function verificaScroll(){
        var posicaoAtual = $(window).scrollTop();
        var documentSize = $(document).height();
        var sizeWindow = $(window).height();
    
        $(window).scroll(function () {
            posicaoAtual = $(window).scrollTop();
            if ( posicaoAtual >= (documentSize - sizeWindow) ) {
                preencheListaProd();
            }
        });
    }