var saldo = 100.5;
var senha = 3589;
var nome = prompt("Informe seu nome completo, por favor");
alert("Olá " + nome + ", é um prazer ter você por aqui.");


function inicio() {

	var escolha = parseInt(prompt('Selecione uma opção:\n 1.) Saldo\n 2.) Depósito\n 3.) Saque\n 4.) Extrato\n 5.) Transferência\n 6.) Sair'));


	switch (escolha) {
		case 1:
			if (verificar_senha()) {
				ver_saldo();
			} else {
				inicio();
			}

			break;
		case 2:
			fazer_deposito();
			break;
		case 3:
			fazer_saque();
			break;
		case 4:
			ver_extrato();
			break;
		case 5:
			fazer_transferencia();
			break;
		case 6:
			sair();
			break;
		default:
			erro();
			break;
	}
}

function ver_saldo() {
	alert('Seu saldo atual é: ' + saldo);
	inicio();
}

function fazer_deposito() {

	var deposito = prompt('Qual o valor para depósito?');

	if (isNaN(deposito) || deposito === '') {
		alert('Por favor, informe um número');
		fazer_deposito();
	} else {
		if (verificar_senha()) {
			alert("Depósito efetuado com sucesso");
			saldo += parseFloat(deposito);
			ver_saldo();
		} else {
			alert("Depósito não efetuado")
			fazer_deposito();
		}

	}
}

function fazer_saque() {

	var saque = prompt('Qual o valor para saque?');

	if (isNaN(saque) || saque === '') {
		alert('Por favor, informe um número');
		fazer_saque();
	} else if (saque > saldo || saque <= 0) {
		alert("Saque não autorizado");
		fazer_saque();
	} else {
		if (verificar_senha()) {
			saldo -= saque;
			alert("Saque efetuado com sucesso");
			inicio();
		} else {
			fazer_saque();
		}
	}
}

function ver_extrato() {
	if (verificar_senha()) {
		alert("01/01/2022   TRANSFERÊNCIA BANCÁRIA                                     -600,00\n22/02/2022   TRANSFERÊNCIA BANCÁRIA                                   -1200,00\n12/03/2022   SAQUE                                                                       -300,00\n06/06/2022   TRANSFERÊNCIA BANCÁRIA                                     -750,00\n\nSALDO ATUAL  " + saldo);
		inicio();
	} else {
		ver_extrato();
	}

}

function fazer_transferencia() {
	var conta = prompt("Para qual conta deseja fazer a transferência?");

	if (conta === '' || isNaN(conta)) {
		alert("Informe uma conta válida");
		fazer_transferencia();
	} else {
		var valor = parseFloat(prompt("Qual o valor da transferência?"));

		if (isNaN(valor) || valor === '') {
			alert('Por favor, informe um número');
			fazer_transferencia();
		} else if (valor > saldo || valor <= 0) {
			alert("Tranferência não realizada");
			fazer_transferencia();
		} else {
			if (verificar_senha()) {
				saldo -= valor;
				alert("Transferência efetuada com sucesso");
				inicio();
			} else {
				fazer_saque();
			}
		}

	}
}

function verificar_senha() {
	var senha_digitada = prompt("É necessário informar a senha para realizar a operação");

	if (senha_digitada != senha) {
		alert("Senha incorreta");
		return false;
	} else {
		return true;
	}
}

function erro() {
	alert('Por favor, informe um número entre 1 a 6');
	inicio();
}

function sair() {
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		alert(nome + ", foi um prazer ter você por aqui");
		window.close();
	} else {
		inicio();
	}
}

document.write("<p>Bem-vindo<br>" + nome + "</p>");