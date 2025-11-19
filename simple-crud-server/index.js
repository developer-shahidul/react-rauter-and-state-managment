const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ssshahidulislam71_db_user
// /0QGMyMdAJT4CEZrW

const uri =
  "mongodb+srv://ssshahidulislam71_db_user:0QGMyMdAJT4CEZrW@cluster0.39yqdr4.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("userDB");
    const usersCollection = database.collection("users");

    // read kora (crud)
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // create kora (crud)
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      console.log("New User Added:", user);
      res.send(result);
    });

    // delet kora (crud)
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("pleace delet from database", id);
      /* Delete the first document in the "movies" collection that matches
    the specified query document */

      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNING");
});
// applicaton chalanur jonno listen chalabo
app.listen(port, () => {
  console.log(`simple crud running on Port : ${port}`);
});

//1
// try {
// } catch (error) {
// } finally {
// }

// 2
// async function run(params) {}

// run().catch((Error) => console.log(Error));
