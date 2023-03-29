var clickMenuPrincipal = document.getElementById("desplegarMenuPrincipal");
var clickCerrarMenuPrincipal = document.getElementById("cerrarMenuPrincipal");
var clickDesplegarSubmenuMujer = document.getElementById("desplegarSubmenuMujer");
var clickDesplegarSubmenuHombre = document.getElementById("desplegarSubmenuHombre");
var clickContraerSubmenuMujer = document.getElementById("contraerSubmenuMujer");
var clickContraerSubmenuHombre = document.getElementById("contraerSubmenuHombre");
var clickBotonAnterior = document.getElementById("anterior");
var clickBotonSiguiente = document.getElementById("siguiente");
var estilosLetras = ["Delicious Handrawn","Dancing Script","Edu NSW ACT Foundation"];

var indiceDiapositiva = 1;


clickMenuPrincipal.addEventListener("click",()=>{

    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegable").style.left="0em";
   
    
});


clickCerrarMenuPrincipal.addEventListener("click",()=>{

    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("desplegable").style.left="-22em";
    
});

clickDesplegarSubmenuMujer.addEventListener("click", ()=>{

        document.getElementById("submenuMujer").style.display="inherit";
        document.getElementById("desplegarSubmenuMujer").style.visibility="hidden";
        document.getElementById("contraerSubmenuMujer").style.visibility="visible";
    
   

});

clickDesplegarSubmenuHombre.addEventListener("click", ()=>{

    document.getElementById("submenuHombre").style.display="inherit";
    document.getElementById("desplegarSubmenuHombre").style.visibility="hidden";
    document.getElementById("contraerSubmenuHombre").style.visibility="visible";


    

});

clickContraerSubmenuMujer.addEventListener("click", ()=>{

    document.getElementById("submenuMujer").style.display="none";
    document.getElementById("desplegarSubmenuMujer").style.visibility="visible";
    document.getElementById("contraerSubmenuMujer").style.visibility="hidden";

});

clickContraerSubmenuHombre.addEventListener("click", ()=>{

    document.getElementById("submenuHombre").style.display="none";
    document.getElementById("desplegarSubmenuHombre").style.visibility="visible";
    document.getElementById("contraerSubmenuHombre").style.visibility="hidden";

});


mostrarDiapositiva(indiceDiapositiva);


clickBotonAnterior.addEventListener("click",()=>{

    mostrarDiapositiva(indiceDiapositiva -= 1);
    
});


clickBotonSiguiente.addEventListener("click",()=>{

    mostrarDiapositiva(indiceDiapositiva += 1);

});



setInterval(() => {
    
    mostrarDiapositiva(indiceDiapositiva += 1);
   
  }, 3000);

function mostrarDiapositiva(n) {
   
    var i;
    var diapositivas = document.getElementsByClassName("diapositivas");
    
    if (n > diapositivas.length) {

            indiceDiapositiva = 1
    
        } 
    if (n < 1) {
      
        indiceDiapositiva = diapositivas.length
    
    }
    
    for (i = 0; i < diapositivas.length; i++) {
    
        diapositivas[i].style.display = "none"; 
    
    }
 
    diapositivas[indiceDiapositiva-1].style.display = "block"; 
    document.getElementById("titulo").style.fontFamily = estilosLetras[indiceDiapositiva-1];
  
   
};


