const express = require("express");
const app = express();
const connection = require("./db");
require("dotenv").config();
app.use(express.json());
const FormEntry = require("./model/user");
const { createArrayCsvWriter } = require("csv-writer");

//set template engine
app.set("view engine", "ejs");

//decoding data sent through html form
app.use(express.urlencoded({ extended: true }));

// Render the form
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/submit", async (req, res) => {
  console.log(req.body);
  try {
    // Create a new form entry using the submitted data
    const entry = new FormEntry(req.body);

    // Save the entry to the database
    await entry.save();

    res.redirect("/list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving form entry.");
  }
});

// Render the list of form entries
app.get("/list", async (req, res) => {
  try {
    // Retrieve all form entries from the database
    const data = await FormEntry.find();

    res.render("data", { data });
  } catch (err) {
    res.status(500).send("Error retrieving form entries.");
  }
});

app.get("/export", async (req, res) => {
  try {
    // Retrieve all form entries from the database
    const entries = await FormEntry.find();

    // Create a CSV writer
    const csvWriter = createArrayCsvWriter({
      path: "form_entries.csv",
      header: ["Name", "Email", "Address"],
    });

    // Transform entries into an array of arrays
    const csvData = entries.map((entry) => [
      entry.name=entry.name,
      entry.email=entry.email,
      entry.address=entry.address,
    ]);
    console.log(csvData);
    // Write the entries to the CSV file
    await csvWriter.writeRecords(csvData);

    // Download the CSV file
    res.download("form_entries.csv");
  } catch (err) {
    res.status(500).send("Error exporting form entries as CSV.");
  }
});

app.listen(process.env.port, async () => {
  await connection;
  console.log("App starting running at port 5500");
});
