
let nomeHerói = 'lanterna verde';
let xp = 6000 ;


if(xp <= 1000){
    console.log("ferro");
}else if(xp > 1001 && xp <= 2000){
    console.log("bronze");
}else if(xp > 2001 && xp <= 5000){
    console.log("prata");
}else if(xp > 5001 && xp <= 7000){
    console.log("ouro");
}else if(xp > 7001 && xp <= 8000){
    console.log("platina");
}else if(xp > 8001 && xp <= 9000){
    console.log("ascendente");
}else if(xp > 9001  && xp <= 10.000){
    console.log("imortal");
}else if(xp >= 1001){
    console.log("radiante");
};
console.log(`O herói de nome ${nomeHerói} esta no nivel de ${xp} xp`);

