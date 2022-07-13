<?php

    abstract class Item {

        public $sku;
        public $title;
        public $price;

        function __construct($data) {

            $this->sku = $data["sku"];
            $this->title = $data["title"];
            $this->price = '$' . $data["price"];
            $this->getAdditionalInfo($data);

        }

        function getSKU() { return $this->sku; }

        function getTitle() { return $this->title; }

        function getPrice() { return $this->price; }

        abstract function getAdditionalInfo($data);

        abstract function getTable();

    }
    
    class DVD_disc extends Item {

        public $size;

        function __construct($data) {

            parent::__construct($data);
            $this->getAdditionalInfo($data);

        }

        function getAdditionalInfo($data) { $this->size = $data["size"]; }

        function getTable() { 

            $class_v = get_class_vars(get_class($this)); 
            //print_r($class_v);
            return "DVD_discs"; 

        }

        function getProperties() {

            $class_v = get_class_vars(get_class($this)); 
            return $class_v;

        }

    }

    class Book extends Item {

        public $weight;

        function __construct($data) {

            parent::__construct($data);
            $this->getAdditionalInfo($data);

        }

        function getAdditionalInfo($data) { $this->weight = $data["weight"]; }

        function getTable() { return "books"; }

        function getProperties() {

            $class_v = get_class_vars(get_class($this)); 
            return $class_v;

        }

    }

    class Chair extends Item {

        public $dimensions;

        function __construct($data) {

            parent::__construct($data);
            $this->getAdditionalInfo($data);

        }

        function getAdditionalInfo($data) { $this->dimensions = $data["height"] . "x" . $data["width"] . "x" . $data["length"]; }

        function getTable() { return "chairs"; }

        function getProperties() {

            $class_v = get_class_vars(get_class($this)); 
            return $class_v;

        }

    }

    require_once("Database.php");
    $db = new db();

?>