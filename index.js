function saldoRanking(vitorias, derrotas){
  return vitorias - derrotas;
}

const saldoVitorias = saldoRanking(101, 0);

let nivel;
if (saldoVitorias < 10) {
  nivel = 'Ferro';
} else if(saldoVitorias >= 10 && saldoVitorias <=20){
  nivel = 'Bronze';
} else if(saldoVitorias > 20 && saldoVitorias <=50){
  nivel = 'Prata';
} else if(saldoVitorias > 50 && saldoVitorias <=80){
  nivel = 'Ouro';
} else if(saldoVitorias > 80 && saldoVitorias <=90){
  nivel = 'Diamante';
} else if(saldoVitorias > 90 && saldoVitorias <=100){
  nivel = 'Lendário';
} else if(saldoVitorias >=101){
  nivel = 'Imortal';
} 

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
