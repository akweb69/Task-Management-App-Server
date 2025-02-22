require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oaguo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    // console.log("Successfully connected to MongoDB!");

    // Database and collection setup
    const TaskCollection = client.db("TaskNest").collection("AllTask");

    // POST API to add a task
    app.post("/add_task", async (req, res) => {
      try {
        const data = req.body;
        const result = await TaskCollection.insertOne(data);
        res.status(200).send(result);
      } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send({ error: "Failed to add task" });
      }
    });
    // completed api
    app.patch("/completed", async (req, res) => {
      try {
        const id = req.body.id;
        const query = { _id: new ObjectId(id) };
        const update = { $set: { category: "Done" } };

        const result = await TaskCollection.updateOne(query, update);
        res.send(result);
      } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    //edite api
    app.patch("/edit-task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedData = req.body;

        const query = { _id: new ObjectId(id) };
        const update = { $set: updatedData };

        const result = await TaskCollection.updateOne(query, update);
        res.send(result);
      } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    // delete api
    app.delete("/delete-task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await TaskCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    // GET API to fetch all tasks
    app.get("/all_task", async (req, res) => {
      try {
        const result = await TaskCollection.find().sort({ _id: -1 }).toArray();
        res.status(200).send(result);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send({ error: "Failed to fetch tasks" });
      }
    });

    // Initial check route
    app.get("/", (req, res) => {
      res.send("Allahu Akbar! Alhamdulillah, all is Ok!");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the run function to start the connection
run().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`The UniGrants Server Is Running At The Port: ${port}`);
});
