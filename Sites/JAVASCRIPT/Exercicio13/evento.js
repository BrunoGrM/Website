function Tempo() {
	horario = new Date()
	hora = horario.getHours()
	minuto = horario.getMinutes()
	segundo = horario.getSeconds()
	if (hora < 10) {
		hora = "0" + hora
	}
	if (minuto < 10) {
		minuto = "0" + minuto
	}
	if (segundo < 10) {
		segundo = "0" + segundo
	}
	document.getElementById("horario").innerHTML = hora + ":" + minuto + ":" + segundo;
}
function nData() {
	data = new Date()
	dia = data.getDate()
	mes = data.getMonth() + 1
	ano = data.getFullYear()
	if (dia < 10) {
 		dia = "0" + dia
 	}
 	if (mes < 10) {
 		mes = "0" + mes
 	}
 	if(mes == "01"){
 		mes = "Janeiro";
 	}
 	if(mes == "10"){
 		mes = 'Outubro';
 	document.getElementById("n_data").innerHTML = dia + " / " + mes + " / " + ano;
}
