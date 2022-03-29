
function calcularCadena(palabra){ 
    var resp = parseInt(palabra);
    if(palabra=="")
        return 0;      
    for(var i = 0;i<palabra.length;i++){
        if(palabra[i]==","){
            resp = resp + parseInt(palabra[i+1]);
        }
    }
    return resp;        
}

export default calcularCadena;