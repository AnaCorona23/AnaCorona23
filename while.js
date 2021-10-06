
<script>
//uso del while
var i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

//convertir el numero a entero
var num = parseInt(prompt("Ingrese un numero: "))

while(num !=0){
    num = parseInt(prompt("Ingrese un numero: "));
}

//tablas 
for(var x = 1; x <= 10; x++){

    for(var y = 1; y <= 10; y++){
        
        console.log(x + " x " + y + " = " +  x * y);
    }
}

</script>



