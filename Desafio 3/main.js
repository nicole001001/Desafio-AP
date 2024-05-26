const nombreProducto = "Marcadores";
const precioUnitario = 1000

let cantidadDeseada = prompt(`Ingrese la cantidad deseada de ${nombreProducto}: `)
parseInt (cantidadDeseada);

let CostoTotalSinDescuento = precioUnitario * cantidadDeseada

if (cantidadDeseada >= 5) {
    CostoTotalSinDescuento *= 0.9
}
alert (`El costo total de ${cantidadDeseada} ${nombreProducto} es: $${CostoTotalSinDescuento}`)