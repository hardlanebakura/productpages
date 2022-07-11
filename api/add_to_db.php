<?php 

    require_once("Database.php");
    require_once("classes.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    function add_data_to_db() {

        $db = new db();
        $data = json_decode(file_get_contents('php://input'), true);
        if (array_key_exists("DVD", $data)) {

            $price = "$" . $data["price"];
            $query = "INSERT INTO DVD_discs (SKU, title, price, size) VALUES (?, ?, ?, ?)";
            $db->query($query, $data["sku"], $data["name"], $price, $data["DVD"]);

        }

        else if (array_key_exists("book", $data)) {

            $price = "$" . $data["price"];
            $query = "INSERT INTO books (SKU, title, price, weight) VALUES (?, ?, ?, ?)";
            $db->query($query, $data["sku"], $data["name"], $price, $data["book"]);

        }

        else {

            
            $price = "$" . $data["price"];
            $dimensions = $data["height"] . "x" . $data["width"] . "x" . $data["length"];
            $query = "INSERT INTO chairs (SKU, title, price, dimensions) VALUES (?, ?, ?, ?)";
            $db->query($query, $data["sku"], $data["name"], $price, $dimensions);

        }

    }

    add_data_to_db();
    

?>