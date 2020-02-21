var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 100, 30) );

for (var freddito of coleccion)
    {
        freddito.mostrar();
    }
for (var x in coleccion[0])
{
    console.log(x);
}

/*var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman ("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);

pokacho.hablar();*/



