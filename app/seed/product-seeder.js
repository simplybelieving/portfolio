

var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var seedFunction =function(){

var products = [
  new Product({
    productname:'August 6, 2017',
    description:'Australia',
    producttype: 'Aiden',
    imagePath:'https://68.media.tumblr.com/ba37f1ba428ab8e403d82ab03ed0ce91/tumblr_ni4yl9JuUQ1qm6fcqo2_500.png'
  }),
  new Product({
    productname:'August 7, 2017',
    description:'Isaac',
    producttype: 'Sinapore',
    imagePath:'https://68.media.tumblr.com/ba37f1ba428ab8e403d82ab03ed0ce91/tumblr_ni4yl9JuUQ1qm6fcqo2_500.png'
  }),
  new Product({
    productname:'So many things to learn',
    description:'Should i learn login',
    producttype: 'Oh o',
    imagePath:'https://68.media.tumblr.com/ba37f1ba428ab8e403d82ab03ed0ce91/tumblr_ni4yl9JuUQ1qm6fcqo2_500.png'
  })
];

var done=0;
for(var i=0; i< products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done===products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}

}//end of seed function

module.exports = seedFunction;
