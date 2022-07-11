<?php

    class Item {

        public $sku;
        public $title;
        public $price;

        function __construct($data) {

            $this->sku = $data["sku"];
            $this->title = $data["title"];
            $this->price = $data["price"];

        }

    }
    
    class DVD_disc extends Item {

        public $size;

        function __construct($data) {

            parent::__construct($data);
            $this->size = $data["size"];

        }

    }

    class Book extends Item {

        public $weight;

        function __construct($data) {

            parent::__construct($data);
            $this->weight = $data["weight"];

        }

    }

    class Chair extends Item {

        public $dimensions;

        function __construct($data) {

            parent::__construct($data);
            $this->dimensions = $data["dimensions"];

        }

    }

    $d = array(
        "sku"=>"asd1",
        "title"=>"title1",
        "price"=>'$a1',
        "weight"=>"1KG"
    );

    $item = new Book($d);
    print_r($item)

?>