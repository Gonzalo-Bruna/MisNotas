<?php

    header("content-type: application/json");
    header("Access-Control-Allow-Origin:*");

    $array = file_get_contents("php://input");

    //transformamos el array obtenido en un json
    $json = json_encode($array);

    //transformamos el json obtenido en una variable de php con la funcion decode
    $data = json_decode($json);

    echo $data;

    $archivo = fopen("datos.json", "w");
    fwrite($archivo, $data);

?>