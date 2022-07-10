<?php 

    require_once("Database.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    $db = new db();

    $data = json_decode(file_get_contents('php://input'), true);
    foreach($data as $i => $item) {

            if (array_key_exists("size", $item)) {

                $query = "DELETE FROM DVD_discs WHERE title = ? AND price = ?";
                $db->query($query, $item["title"], $item["price"]);

            }

            else if (array_key_exists("weight", $item)) {

                $query = "DELETE FROM books WHERE title = ? AND price = ?";
                $db->query($query, $item["title"], $item["price"]);

            }

            else {

                $query = "DELETE FROM chairs WHERE title = ? AND price = ?";
                $db->query($query, $item["title"], $item["price"]);

            }

    }
?>