(function(){
  var app = angular.module("store",[ ]);
  app.controller("StoreController", function(){
    this.products = utensils;
  });
  app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
  app.controller("GalleryController", function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });
  var utensils = [
    {
      name: "Knife",
      price: 5.95,
      description: "Humanity's pinnacle cutting and slicing tool to process and prepare food.",
      specs: {weight: "231 g", size: "132 mm", finish: "high shine"},
      canPurchase: true,
      soldOut: false,
      images:[
        "img/knife-original.jpg",
        "img/knife-2.jpg",
        "img/knife-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This utensil is amazingly versatile! I can cut and slice any kind of food with it.",
        author: "joe@email.org",
        createdOn: 1397490980837
      }, {
        stars: 3,
        body: "It works, but I've had better and intend to replace this one with a better knife. Bottom-line: low value for the money.",
        author: "theresa@email.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: "Spoon",
      price: 3.25,
      description: "Scoop anything and even hold liquids with this timeless utensil.",
      specs: {weight: "231 g", size: "132 mm", finish: "high shine"},
      canPurchase: true,
      soldOut: false,
      images:[
          "img/spoon-original.jpg",
          "img/spoon-2.jpg",
          "img/spoon-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I couldn't eat soup or a bowl of cereal without this spoon. It also doubles as a serving utensil.",
        author: "sue@email.org",
        createdOn: 1397490980837
      }, {
        stars: 3,
        body: "I was expecting a shinier finish on this spoon. It works great, but buyer beware that it's not as shiney as the pictures.",
        author: "xiahong@email.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: "Fork",
      price: 2.95,
      description: 'The classic western utensil for stabbing food.',
      specs: {weight: "231 g", size: "132 mm", finish: "high shine"},
      canPurchase: true,
      soldOut: false,
      images:[
        "img/fork-original.jpg",
        "img/fork-2.jpg",
        "img/fork-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I couldn't eat without this amazing utensil! It can stab anything and even can flip a steak in a pinch.",
        author: "amelie@email.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "I feel like such a barbarian stabbing all of my food with this utensil. I need a more civilized eating utensil and would encourage you to avoid this single-minded one.",
        author: "destin@email.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: "Chopsticks",
      price: 4.10,
      description: "The multi-purpose eastern utensil that grabs and scoops food.",
      specs: {weight: "231 g", size: "132 mm", finish: "high shine"},
      canPurchase: true,
      soldOut: false,
      images:[
        "img/chopsticks-original.jpg",
        "img/chopsticks-2.jpg",
        "img/chopsticks-3.jpg"
      ],
      reviews: [{
        stars: 2,
        body: "Difficult to use! After using these for three weeks, I'm finally able to eat a normal meal with them, but it took practice. Don't starve while learning to use these.",
        author: "fernando@email.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Great chopsticks but overpriced. If money wasn't a factor, I would recommend these chopsticks to all of my friends. However, there are more affordable chopsticks available elsewhere that will last a lifetime.",
        author: "xinpeng@email.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: "Spork",
      price: 4.10,
      description: "Western fast-food's crowning achievement in multi-purpose utensils.",
      specs: {weight: "231 g", size: "132 mm", finish: "high shine"},
      canPurchase: true,
      soldOut: false,
      images:[
        "img/spork-original.jpg",
        "img/spork-2.jpg",
        "img/spork-3.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This spork rocks! It's extremely durable and this multi-purpose utensil is the only one I carry with me when backpacking.",
        author: "albany@email.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "If I wanted a spork, I could just go to Taco Bell. Don't waste your time or money here.",
        author: "tam@email.org",
        createdOn: 1397490980837
      }]
    }
  ];
})();
