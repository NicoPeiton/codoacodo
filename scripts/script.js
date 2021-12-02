function resumir(){

    let precio = 200;
    let descuento = 0;
    let cantidad = 0;
    
    categoria = document.getElementById("categoria").value;
    if (categoria == "Estudiante")
        descuento = 0.2;
    if (categoria == "Trainee")
        descuento = 0.5;
    if (categoria == "Junior")
        descuento = 0.85;

    cantidad = document.getElementById("cantidad").value;
    
    resumen = document.getElementById("resumen");
    resumen.innerHTML = "Total a Pagar: $" + (precio * cantidad * descuento);
}
