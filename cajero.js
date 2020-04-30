class billete
{
    constructor(v, c)
    {
        this.imagenes = new Image();
        this.valor = v;
        this.cantidad= c;        
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);

        }
    }
    if(dinero > 0)
        {
            resultado.innerHTML = "No tengo esa cantidad de dinero...";
        }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }       
    }
    console.log(entregado);
    mostrar()
    {

    }
}

var imagenes = [];
imagenes ["billete10"] = "billete10.png";
imagenes ["billete20"] = "billete20.png";
imagenes ["billete50"] = "billete50.png";

var caja = [];
var entregado = [];
caja.push(new billete(50, 5) );
caja.push(new billete(20, 10) );
caja.push(new billete(10, 20) ); 
var dinero = 0;
var div = 0;
var papeles = 0;


var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
