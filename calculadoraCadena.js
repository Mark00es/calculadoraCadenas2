function separarCadena(palabra,delimitador){
    var tot = 0;        
    var resp = palabra.split(delimitador);
    for(var i = 0;i < resp.length; i++)
        if(parseInt(resp[i]) < 1000)        
            tot = tot + parseInt(resp[i]);
    return tot;
}
function calcularCadena(palabra){ 
    var resp = parseInt(palabra);
    if(palabra=="")
        return 0;      
    if(palabra.includes(","))
        resp = separarCadena(palabra,","); 
    else{if(palabra.includes("-"))
        resp = separarCadena(palabra,"-");     
    }
    return resp;        
}

export default calcularCadena;