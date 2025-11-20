/**********************
 * mongodb connection
 * ********************
 * 1.create account
 * 2.create an user with passwoard
 * 3.whitelist IP address
 * 4.database > connect > driver > Node > view full code
 * 5.Change the passwoard the uri
 *
 *......................................
 * 1.CREATE --- POST
 * ....................................
 * 2.App.post("/users",(req,res)=>{})
 * 3.make the function async to use await inside it
 * 4.make sure you use the express.json() middleware
 * 5.access data from the body: const user = req.body
 * 6.const result = await userCollection.insertOne(user);
 * 7.res.send(result);
 *
 * CLIENT...................
 *
 * 1.create fetch
 * 2.as an secend parameter as an objcet
 * 3.provide methood: "POST"
 * 4.added headers:{"content-type" : "Applicaton/json"}
 * 5.add body:JSON.Stringify(user)
 *
 *......................................
 * READ MANY
 *......................................
 * 1.create a cursor = userCollection.find()
 * 2. const result = Await cursor.toArray()
 *
 *......................................
 * DELET
 *......................................
 * 1.create app.delete("/users/:id", async(req,res)=>{})
 * 2.specify unique ObjectId to delete  the right user
 * 3.const query ={_id: new ObjectId(id)}
 * 4.const result = await userCollection.deleteOne(query)
 *
 * CLIENT SITE
 * 1.create dainamic url with id
 * 2.mention the DELETE methood
 *
 */
