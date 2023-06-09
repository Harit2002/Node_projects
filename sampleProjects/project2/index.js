const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    fs.readFile("data.json", (err, data) => {
      if (err) response.write(err);
      else response.end(data);
    });
  } else if (request.url === "/data" && request.method === "POST") {
    var str = "";
    request.on("data", (chunk) => {
      str += chunk;
    });
    console.log(str);
    request.on("end", () => {
      //console.log(str);
      fs.appendFileSync("data.json", str);
    });

    response.end(str);
  } else response.end(http.STATUS_CODES["404"]);
});


//<---=======================  Using expresss =========================---->

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  const data = fs.readFileSync("data.json");

  res.end(data);
});

app.post("/users", (req, res) => {
  const data = fs.readFileSync("./data.json");

  const parse_data = JSON.parse(data);

  parse_data.push(req.body);

  fs.writeFileSync("./data.json", JSON.stringify(parse_data));

  res.end(JSON.stringify(parse_data));
});

app.put("/users", (req, res) => {
  const data = fs.readFileSync("./data.json");

  const parse_data = JSON.parse(data);

  //Getting the id we want to update by request parameter and then updating it with reques.body

  for (let i = 0; i < parse_data.length; i++) {
    if (parse_data[i].id == req.query.id) {
      obj = req.body;

      for (let key in obj) {
        parse_data[i][key] = obj[key];
      }

      break;
    }
  }

  fs.writeFileSync("./data.json", JSON.stringify(parse_data));

  res.end(JSON.stringify(parse_data));
});

app.delete("/users/:id", (req, res) => {
  const data = fs.readFileSync("./data.json");

  const parse_data = JSON.parse(data);

  //getting the id by path variable and then deleting it

  const newData = parse_data.filter((el) => el.id != req.params.id);

  fs.writeFileSync("./data.json", JSON.stringify(newData));

  res.end(JSON.stringify(newData));
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
