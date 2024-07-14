// Crud operation : retrive , update and Delete operations

// show dbs;

// use "node5to7";

// show collections;

// Find methods

db.users.find({});

db.users.find({ "gender": "Female" })
  .projection({})
  .sort({ _id: -1 })
  .limit(100)

db.users.findOne({ "gender": "Female" })

// Find with using function

db.users.find({ "gender": "Female" })
  .sort({ _id: -1 })
  .limit(1)
  .toArray(function (err, docs) {
    if (err) {
      console.error(err);
    } else {
      console.log(docs[0]);
    }
  });



// Update Data
// Update one
db.users.updateOne(
  { 'gender': 'Female' },
  { $set: { age: 56, email: "jollyt@gmail.com" } },
  { upset: true })

// Update Many
db.users.updateMany(
  { 'gender': 'Female' },
  { $set: { "age": 45, "email": "women@gmail.com" } },
  { upset: true }
)

// Update Many with set new values
db.users.updateMany(
  { "gender": "Female" },
  { $set: { passion: "work" } },
  { upsert: true }
)


// Delete operations

// db.users.deleteOne({filter})

// Take id form objectid
db.users.deleteOne({_id :  ObjectId('668f92e522d6644ad8cc3210')});

db.users.deleteMany({'gender' : "Female" })



// Drop operation 

db.users.drop()
db.node5to7.drop();
db.dropDatabase();





// other MongoDB Methods

// use mongodbmethods;
// db.createCollection("students");


// Bulk method


var bulk = db.students.initializeOrderedBulkOp() ;
bulk.insert({
    "fitst_name" : "priyanshi",
    "last_name"  : "rabadiya"
    });
    
bulk.insert({
    "first_name" : "krishna",
    "last_name" : "rabadiya"
});


bulk.execute();

db.students.find({"fitst_name" : "priyanshi" });

db.students.find({}).forEach(print);


// Bultwrite method


db.students.bulkWrite([
    {insertOne : { document : { first_name : "shubham" , last_name : "rabadiya"  } } }
    ])


db.students.find({})
  .projection({})
  .sort({_id:-1})
  .limit(100)
  .forEach(printjson)

db.students.updateOne({"first_name" : "shubham" },{$set:{"first_name" : "shubh" }});









