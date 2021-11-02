

function suma () {
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);

    let resultado = Numero1 + Numero2 
    
    document.getElementById('resultado').value = resultado
  
}
function restar () {
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);

    let resultado = Numero1 - Numero2 
    
    document.getElementById('resultado').value = resultado
  
}
function dividir () {
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);

    let resultado = Numero1 / Numero2 
    
    document.getElementById('resultado').value = resultado
  
}

function multi () {
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);

    let resultado = Numero1 * Numero2 
    
    document.getElementById('resultado').value = resultado
  
}

function NombreMasApellido () {
    let Nombre = String ( document.getElementById ("Nombre").value);
    let Apellido = String (document.getElementById("Apellido").value);
    let resultado = ( Nombre+" "+Apellido);
    document.writeln (resultado);
    //NomApelli ( Nombre +" "+ Apellido) ;
    //let NomApelli = Nombre + Apellido ;
  // const NomApelli = (NomApelli) => document.getElementById("NA").value= NomApelli; 
    //  N/A <input type= "text" id = "NA" >
    //document.getElementById('resultado').innerHTML = Nombre + Apellido;
}
function incremtar() {
    let numero = Number(mostrador.value.trim(" "));
    numero = !isNaN( numero ) ? numero + 1 : 1;
  
    mostrador.value = numero;
  }




