//if/else if/else

let temperatura = +prompt('Qual è la temperatura oggi?');

if(temperatura < 20){
    console.log('Non ci sono più le mezze stagioni'); 
}else if(temperatura < 30){
    console.log('mi dia una Peroni sudata');
}else if(temperatura < 0){
    console.log("non è tanto il freddo quanto l'umidità");
}else if(temperatura < -10){
    console.log('copriti...ancora ti raffreddi');
}else{
    console.log('lu mare, lu sole, lu ientu');
}

//switch

let temperature = +prompt('Qual è la temperatura oggi?');
let descrizione;
switch (true) {
    case temperature < -10:
        descrizione = 'copriti...ancora ti raffreddi'
        break;
        case temperature < 0:
        descrizione = "non è tanto il freddo quanto l'umidità"
        break;
        case temperature < 20:
        descrizione = 'Non ci sono più le mezze stagioni'
        break;
        case temperature < 30:
        descrizione = 'mi dia una Peroni sudata'
        break;
    default:
        descrizione = 'lu mare, lu sole, lu ientu'
}

    console.log(descrizione);
    