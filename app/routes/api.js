var Product = require('../models/product');
var seedFunction =require('../seed/product-seeder');
module.exports = function(router){

  router.post('/products', function(req, res){
  var product = new Product();
  product.productname = req.body.productname;
  product.description = req.body.description;
  product.producttype = req.body.producttype;
  product.imagePath = req.body.imagePath;
  product.save();
  res.send('product created!');
});

router.get('/morecatalogue/:currentPage/:type', function(req, res){
      var type = req.params.type;
       var varskip = 8 * (parseInt(req.params.currentPage)-1);
       console.log("TYPE HERE:" + type);
      Product.find({"producttype": type},{}, {limit:8, skip: varskip}).exec(function(err, items){
       console.log('WHY NO RUN');
       res.json({ items: items });
     });
});

 router.get('/catalogues', function(req, res){

    Product.find({}, function(err, items){
    console.log(items[0].productname);
    res.json({ items: items });
  });
});



  router.get('/productdetails/:id', function(req, res) {
       var idcheck = req.params.id; // Assign the _id from parameters to variable
                   Product.findOne({ _id: idcheck }, function(err, product) {
                       if (err) throw err; // Throw error if cannot connect
                           console.log("Heyoooooooo"+ product.productname + idcheck);
                           res.json({ product: product }); // Return the user to be editted
           });
       });


  //seedFunction();

  return router;
}
