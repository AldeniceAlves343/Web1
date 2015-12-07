var categorias = [
             {
            	 nome : "camera1",
            	 valor:"1"
                	  
              },
              {
            	  nome : "camera2",
            	  valor:"2"
              }
                  ];

function carregaCaixa(){
	var caixa = document.getElementById("caixa1");
	for(var i=0; i<categorias.length;i++){
		var opt = document.createElement("option");
		opt.value = categorias[i].valor;
		opt.text = categorias[i].nome;
		caixa.add(opt,i);
	}
	carregaCaixa2();
}

var categorias2 = [
          {
        	  nome : "celular",
        	  valor: "1"
	
          },
          {
        	  nome: "computador",
        	  valor: "2"
          }
          ];

function carregaCaixa2(){
	var caixa = document.getElementById("caixa2");
	for(var i=0; i<categorias.length;i++){
		var opt = document.createElement("option");
		opt.value = categorias2[i].valor;
		opt.text = categorias2[i].nome;
		caixa.add(opt,i);
	}
}

carregaCaixa();

