<?php 

    require_once("Database.php");
    require_once("classes.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    function add_data_to_db($data) {

        $db = new db();
        $types = $db->_getTypes($data);
        $query = $db->insertTable($types)["insert"];
        $query_array = $db->insertTable($types)["query"];
        $db->query($query, $query_array);
        $db->close();

    }

    add_data_to_db(json_decode(file_get_contents('php://input'), true));
    

?>