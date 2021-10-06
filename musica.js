<script></script>

var  lis_generos  =  [ "Rock" , "Reguetón" , "Metal" , "Electrónica" , "Rap" ] ;

var  musica  =  {
    "genero0" : {
    "artista" : "Los Beatles" ,
    "álbum" : {
     "nombre" : "¡Ayuda!" ,
        "canciones" : [ "La noche anterior" , "Te necesito" ]
        }
    } ,
    "genero1" : {
        "artista" : "Jhay Cortez" ,
        "álbum" : {
         "nombre" : "Timelezz" ,
         "canciones" : [ "Tokio" , "Está deja" ]
        }
    } ,
    "genero2" : {
        "artista" : "Rammstein" ,
        "álbum" : {
          "nombre" : "Sehnsucht" ,
         "canciones" : [ "Du hast" , "Tier" , "Spiel mit mir" ]
        }
    } ,
    "genero3" : {
        "artista" : "Skrillex" ,
        "álbum" : {
            "nombre" : "Caja de vinilo triple" ,
            "canciones" : [ "Bangarang" , "Primero del año" ]
        }
    } ,
    "genero4" : {
     "artista" : "Bbno $" ,
     "álbum" : {
      "nombre" : "Edamame" ,
    "canciones" : [ "Lo recuerdo" , "Adamame" ]
        }
    }
}

var  genero  =  "" ;
para ( sea  a = 0 ;  a < lis_generos . length ;  a ++ ) {
    genero + = a + ".-" + lis_generos [ a ] + "\ n" ;
}

var  opc_genero = parseInt ( prompt ( "Elige un genero \ n" + genero ) ) ;

var  resultado = "" ;
if ( opc_genero < lis_generos . length ) {
    resultado + = "Genero:" + lis_generos [ opc_genero ] + "\ n" ;
    resultado + = "Artista:" + musica [ "genero" + opc_genero ] [ "artista" ] + "\ n" ;
    resultado + = "Álbum:" + musica [ "genero" + opc_genero ] [ "álbum" ] [ "nombre" ] + "\ n" ;
    for ( sea  i = 0 ;  i < musica [ "genero" + opc_genero ] [ "album" ] [ "canciones" ] . length ;  i ++ ) {
        resultado + = "\ t" + ( i + 1 ) + ".-" + musica [ "genero" + opc_genero ] [ "album" ] [ "canciones" ] [ i ] + "\ n" ;
    }
    consola . log ( resultado ) ;
} más {
    consola . log ( "No existe el genero" ) ;
} 


    