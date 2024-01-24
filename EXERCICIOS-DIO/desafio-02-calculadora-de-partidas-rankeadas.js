

//let medalhas = ['ferro','bronze','prata','ouro','diamante','ascedente','lendário','radiante'];
//medalhas = vitorias;
/*
for(let i = 0; i < medalhas.length; i++  ){
    console.log(medalhas[i]);
}
*/

function rankeadas(vitorias,derotas){
    
    let saldoRankeada =  vitorias - derotas;
    return saldoRankeada;


}

if(vitorias <= 10){
    return ( "ferro");
}else if(vitorias > 11 && vitorias <= 20){
    return ("bronze");
}else if(vitorias > 21 && vitorias <= 50){
    return ("prata" );
}else if(vitorias > 51 && vitorias <= 70){
    return ("ouro");
}else if(vitorias > 71 && vitorias <= 80){
    return ("diamante");
}else if(vitorias > 81 && vitorias <= 90){
    return ("ascendente");
}else if(vitorias > 91  && vitorias <= 100){
    return (" lendário");
}else if(vitorias >= 101){
    return ("radiante");

}
let nivel = 100;
let vitorias = rankeadas(80,20);
console.log(`O Herói tem um saldo de ${vitorias} vitorias e está no nivel ${nivel}`);



