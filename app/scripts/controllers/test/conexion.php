<?php
	$Conexion=mysql_connect("localhost", "root", "") or die ("Problema al realizar la conexión con el servidor");
	mysql_select_db("videoclub", $Conexion) or die ("Problema al realizar la conexión con la base de datos");
?>