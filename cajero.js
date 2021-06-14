class billete {
  constructor(v, c) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  resultado.innerHTML = "";
  var entregado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  let dineroAcumulado = dinero;
  let posicion = 0;
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      caja[posicion++] = new billete(bi.valor, bi.cantidad - papeles);
      entregado.push(new billete(bi.valor, papeles));
      dinero = dinero - bi.valor * papeles;
    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "No tengo esa cantidad de dinero..." + "<br/>";
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        for (var i = 0; i < e.cantidad; i++) {
          resultado.appendChild(e.imagen.cloneNode(true)) + "<br />";
        }
        totalDisponible = totalDisponible - e.cantidad * e.valor;
      }
    }
    disponible.innerHTML =
      "Tine disponible $ " + totalDisponible + " para retirar";
    historial.innerHTML =
      historial.innerHTML + "<br /> dinero retirado: " + dineroAcumulado;
  }
  console.log(entregado);
}

function calcularDisponible(caja) {
  var total = 0;
  for (var bi of caja) {
    total += bi.valor * bi.cantidad;
  }
  return total;
}

var imagenes = [];
imagenes["billete10"] = "billete10.png";
imagenes["billete20"] = "billete20.png";
imagenes["billete50"] = "billete50.png";

var caja = [];
caja.push(new billete(50, 3));
caja.push(new billete(20, 2));
caja.push(new billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;
var totalDisponible = calcularDisponible(caja);

var button = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
var disponible = document.getElementById("disponible");
var historial = document.getElementById("historial");
button.addEventListener("click", entregarDinero);
