//  SWITCH CASE

const  data = new Date('1987-04-25 00:00');
const diaSemana = data.getDay();


function getDiaSemanaTexto (diaSemana){
    
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;  
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;     
    case 5: 
        diaSemanaTexto ='Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        
} 
    return diaSemanaTexto;
}

/*switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
      break;  
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;     
    case 5: 
        diaSemanaTexto ='Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';


}

*/

/*if(diaSemana===0){
  diaSemanaTexto ='segunda';
} else if (diaSemana ===1){
    diaSemanaTexto = 'terça'
} else if(diaSemana ===2){
    diaSemanaTexto = 'quarta'
} else if ( diaSemana===3){
    diaSemanaTexto = 'quinta'
} else if (diaSemana ===4){
    diaSemanaTexto = 'sexta'
}else if(diaSemana===5){
    diaSemanaTexto = 'Sabado'
} else if(diaSemana ===6){
    diaSemanaTexto = 'Domingo'
}else {
    diaSemanaTexto = '';
}*/

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana,  diaSemanaTexto);