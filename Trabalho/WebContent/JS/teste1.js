
function validaCampos(){
	var nome = document.querySelector("#nome");
	var idade = document.querySelector("#idade");
	var b = true;
	
	if(nome.value==""){
		alert("campo nome nao foi preenchido");
		b = false;
		nome.style.background = "red";
	}
	if(idade.value==""){
		alert("campo idade não foi preenchido");
		b= false;
	}	return b;
}


var banners = ["img/camera.png", "img/logo_s1.png"];
var bannerAtual = 0;

function trocaBanner(){
	
	bannerAtual = (bannerAtual + 1)%2;
	document.querySelector('#imagem_camera').style.backgroundImage = "url("+ banners[bannerAtual]+")";
}

setInterval(trocaBanner,4000);








//setTimeout(formCadastrar,5000);

//var formCadastrar = document.querySelector("#form-cadastrar");
//formCadastrar.onsubmit = validaCampos;
/*
var baners = [];
var banerAtual = 0;

function troca(){
	banerAtual = (banerAtual+1)%2;
	Document.querySelector().src = banners[banerAtual]
}
*/