let frase= prompt("Escriba una frase");
if(frase== "")
{
    alert("Debe ingresar una frase");
}
else
{
    document.write("La frase  \'  " + frase + " \'contiene " + count(frase) + " caracteres y "  + countSpaces(frase) + " espacios" );
    printString(frase);

}

function printString(frase)
{
    for (let i = 0; i < frase.length; i++)  
    {
       console.log(frase.charAt(i).toUpperCase());
    }
}
function count(frase) 
{
    let i = 0;
    for ( ;i < frase.length; i++) 
    {
    }
    return i;
}
function countSpaces(frase) {
    let cont=0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i)==" ")
        {
         cont++;
        }     
    }
    return cont;
}
