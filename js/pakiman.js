class Pakiman
//Definicion de un objeto
{
    constructor(n, v, a)
    {
        //this es el indicador de la instancia de la clase
        //this tambien refiere a las variables dentro de la clase
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        //obtiene el valor del nommbre que es igual a el 
        //valor del array asocitativo en imagenes
        //en ese array estan las direcciones de las 
        //imagenes con src las asigno como su valor a la imagen
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar(){
        //agrega un hijo al arbol que empieza con document q 
        //contiene el body que va a contener la imagen
        document.body.appendChild(this.imagen);
        //agrego elementos html
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>");
        document.write("vida" + this.vida + "<br>");
        document.write("Ataque" + this.ataque);
        document.write("<hr></p>");
    }
    iterator()
    {
        console.log("jajajajja");
    }
}