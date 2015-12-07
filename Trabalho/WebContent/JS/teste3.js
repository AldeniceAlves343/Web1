var categorias = [
           {
        	   nome:"computador",
        	   valor:"1"
           },
           {
        	   nome:"livros",
        	   valor:"2"
           }
               ];

function carregaCaixa(){
	var caixa = document.getElementById("caixa");
	for(var i=0; i<categorias.length;i++){
		var opt = document.createElement("option");
		opt.value = categorias[i].valor;
		opt.text = categorias[i].nome;
		caixa.add(opt,i);
	}
}

carregaCaixa();


//com jquery
/**
function carregaCaixa(){
	var caixa = $("caixa");
	for(var i=0; i<categorias.length;i++){
		var opt = $("option");
		opt.value = categorias[i].valor;
		opt.text = categorias[i].nome;
		caixa.appendChild(opt);
	}
}

function onChangeCaixa(){
	
}
$(caixa).onchange = onChangeCaixa()

carregaCaixa();
**/