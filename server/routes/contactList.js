module.exports = function(router, db) {
  router.get('/contactList', function(req, res) {
    db.contactList.find(function(err, docs){
      res.json(docs);
    });
  });

  router.post('/contactList', function(req, res){
    console.log("body", req.body);

    if(req.body != undefined){
      db.contactList.insert(req.body, function(err, doc) {
        res.json(doc);
      });
    }
    else {
      res.json({  });
    }
  });

  router.delete('/contactList/:id', function(req, res){
    var id = req.params.id;
    db.contactList.remove({ _id: db.ObjectId(id) }, function(err, doc) {
      res.json(doc);
    });
  });

  router.get('/contactList/:id', function(req, res){
    var id = req.params.id;
    db.contactList.findOne({ _id: db.ObjectId(id) }, function(err, doc) {
      res.json(doc);
    });
  });

  router.put('/contactList/:id', function(req, res){
    var id = req.params.id;
    console.log("edit", req.body.name);
    db.contactList.findAndModify(
      {
        query: {
          _id: db.ObjectId(id)
        },
        update: {
          $set: {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number
          }
        },
        new: true
      },
      function(err, doc) {
        res.json(doc);
      }
    );
  });
}
