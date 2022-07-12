<?php

require_once("Database.php");
require_once("classes.php");
$d = array(
    "sku"=>"asd1",
    "title"=>"title1",
    "price"=>'a1',
    "size"=>"100"
);

$db = new db();

$DVD = new DVD_disc($d);
$serialized = serialize($DVD);
print_r($serialized);
$query = "INSERT INTO DVD_discs (SKU, title, price, size) VALUES (?, ?, ?, ?)";
$db->query($query, $DVD->sku, $DVD->getTitle(), $DVD->price, $DVD->size);

?>