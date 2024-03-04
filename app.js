function area_rectangulo(){
    let base_rectangulo=document.getElementById("base_rectangulo").value;
    let altura_rectangulo=document.getElementById("altura_rectangulo").value;
    let area_rectangulo=base_rectangulo*altura_rectangulo;
    document.getElementById("area_rectangulo").value="El área del rectángulo es: " + area_rectangulo;
}