var data1 = new Date(2015, 11, 09);
var data2 = new Date(2014, 11, 09);

function dataMaior(data1, data2){
    if(data1 > data2){
        return data1
    }else{
        return data2
    }
}

function intervaloData(data1, data2){
  if(data1 < data2){
    console.log("A primeira data é menor que a segunda");
  }else{
        const diffEmMilissegundos = Math.abs(data1 - data2);
        const Dia = 24 * 60 * 60 * 1000;
        const intervaloDias = Math.floor(diffEmMilissegundos / Dia);
        return intervaloDias;
  }
        
}

function dataAtual() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

console.log("A maior data é: " + dataMaior(data1,data2));
console.log("O intervalo de dia é : " + intervaloData(data1,data2));
console.log("A hora atual " + dataAtual())

