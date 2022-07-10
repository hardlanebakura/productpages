<?php

    //read from JSON and write the content into the database
    require_once("Database.php");

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    function api_items() {

        $db = new db();
        $DVD_discs = $db->query("SELECT * FROM DVD_discs")->fetchAll();
        $books = $db->query("SELECT * FROM books")->fetchAll();
        $chairs = $db->query("SELECT * FROM chairs")->fetchAll();
        $items = array(
            "DVD_discs"=>$DVD_discs,
            "books"=>$books,
            "chairs"=>$chairs
        );

        print_r(json_encode($items));

    }

    api_items();

?>