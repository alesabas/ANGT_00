<?php
    include("conexion.php");

    $BP = mysql_query("SELECT a.ID_Pelicula, a.Nombre, b.Genero, c.Clasificacion, d.Formato FROM peliculas a, generos b, clasificaciones c, 
	formatos d WHERE a.Genero = b.ID_Genero AND a.Clasificacion = c.ID_Clasificacion AND a.Formato = d.ID_Formato", $Conexion) 
	or die ("Problema ".mysql_error());

    $datos = array();

    while($RBP = mysql_fetch_array($BP)){
        $datos[] = $RBP;
    }
    echo jason_encode($datos);
?>