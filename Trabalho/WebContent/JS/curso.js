var tads = {
		sigla:"tads",
		nome : "tecnólogo em análise e desenvolvimento de sistemas",
			disciplinas:[
			         {
			        	 sigla:"ppw",
			        	 nome:"programacao pra WEB"
			         },
			         {
			        	 sigla:"esof",
			        	 nome:"engenharia de software"
			         }
			             ]
};

var tadsHeranca = {};// objeto em java script
//tadsHeranca.__proto__ = tads;
tadsHeranca = Object.create(tads);
console.log("sigla="+tadsHeranca.sigla);
console.log("nome="+tadsHeranca.nome);
console.log("disciplina sigla ="+disciplina.tadsHeranca[1].sigla);
console.log("disciplina nome="+disciplina.tadsHeranca[1].nome);