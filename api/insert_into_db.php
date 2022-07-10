<?php

    //read from JSON and write the content into the database
    require_once("Database.php");

    function file_json_to_db() {

        $db = new db();

        $items = file_get_contents("data/data.json");
        // Convert to array 
        $array = json_decode($items, true);
            
        foreach($array["DVD_discs"] as $element) {

            $SKU = "D" . rand(1000, 1000000);
            $sizes = [700, 4700, 8500, 25000];
            $v = $sizes[array_rand($sizes)];
            $query = "INSERT INTO DVD_discs (SKU, title, price, img, size) VALUES (?, ?, ?, ?, ?)";
            $db->query($query, $SKU, $element["title"], $element["price"], $element["img"], $v);

        }

        foreach($array["books"] as $element) {

            $SKU = "B" . rand(1000, 1000000);
            $weights = [1, 2];
            $v = $weights[array_rand($weights)];
            $price = "$" . rand(10, 45) . ".99";
            $query = "INSERT INTO books (SKU, title, author, price, img, weight) VALUES (?, ?, ?, ?, ?, ?)";
            $db->query($query, $SKU, $element["title"], $element["author"], $price, $element["img"], $v);


        }

        foreach($array["chairs"] as $element) {

            $SKU = "C" . rand(1000, 1000000);
            $dimensions = rand(19, 40) . "x" . rand(19, 40) . "x" . rand(19, 40);
            $query = "INSERT INTO chairs (SKU, title, price, img, dimensions) VALUES (?, ?, ?, ?, ?)";
            $db->query($query, $SKU, $element["title"], $element["price"], $element["img"], $dimensions); 

        }

        $db->close();

    }

    //file_json_to_db();

?>