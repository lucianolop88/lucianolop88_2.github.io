var hoverTarjeta1 = document.getElementById("tarjeta1");
var hoverTarjeta2 = document.getElementById("tarjeta2");
var hoverTarjeta3 = document.getElementById("tarjeta3");


hoverTarjeta1.addEventListener("mouseover", ()=>{

    document.getElementById("imagen1tarjeta1").style.display  = "none";
    document.getElementById("imagen2tarjeta1").style.display  = "block";

        
});

hoverTarjeta1.addEventListener("mouseout", ()=>{

    document.getElementById("imagen1tarjeta1").style.display  = "block";
    document.getElementById("imagen2tarjeta1").style.display  = "none";

        
});

hoverTarjeta2.addEventListener("mouseover", ()=>{

    document.getElementById("imagen1tarjeta2").style.display  = "none";
    document.getElementById("imagen2tarjeta2").style.display  = "block";

        
});

hoverTarjeta2.addEventListener("mouseout", ()=>{

    document.getElementById("imagen1tarjeta2").style.display  = "block";
    document.getElementById("imagen2tarjeta2").style.display  = "none";

        
});


hoverTarjeta3.addEventListener("mouseover", ()=>{

    document.getElementById("imagen1tarjeta3").style.display  = "none";
    document.getElementById("imagen2tarjeta3").style.display  = "block";

        
});

hoverTarjeta3.addEventListener("mouseout", ()=>{

    document.getElementById("imagen1tarjeta3").style.display  = "block";
    document.getElementById("imagen2tarjeta3").style.display  = "none";

        
});