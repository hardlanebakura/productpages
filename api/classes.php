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

    }
    
    class DVD_disc extends Item {

        public $size;

        function __construct($data) {

            parent::__construct($data);

        }

        function getAdditionalInfo($data) { $this->size = $data["size"]; }

    }

    class Book extends Item {

        public $weight;

        function __construct($data) {

            parent::__construct($data);

        }

        function getAdditionalInfo($data) { $this->weight = $data["weight"]; }

    }

    class Chair extends Item {

        public $dimensions;

        function __construct($data) {

            parent::__construct($data);

        }

        function getAdditionalInfo($data) { $this->dimensions = $data["dimensions"]; }

    }

    $d = array(
        "sku"=>"asd1",
        "title"=>"title1",
        "price"=>'a1',
        "weight"=>"1KG"
    );

    $item = new Book($d);
    print_r($item)

?>