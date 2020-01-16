const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

const dbFile = path.join(__dirname, "src", "assets", "db.json");
const adapter = new FileSync(dbFile);
const db = low(adapter);

const server = jsonServer.create();
const router = jsonServer.router(dbFile);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const getBook = sourceId => {
  const result = db
    .get("books")
    .find({ sourceId: parseInt(sourceId) })
    .value();
  return result;
};

const updateBookNewCopy = (sourceId, bookItem) => {
  const result = db
    .get("books")
    .find({ sourceId: parseInt(sourceId) })
    .assign(bookItem)
    .write();
  return result;
};

const getCopy = sourceId => {
  const result = db
    .get("copies")
    .filter({ sourceId: sourceId })
    .value();
  console.log(result);
  return result;
};

const addBook = bookItem => {
  const result = db
    .get("books")
    .push(bookItem)
    .write();
  return result;
};

const addCopy = copyItem => {
  const result = db
    .get("copies")
    .push(copyItem)
    .write();
  return result;
};

// const copy = getCopy(1);
// console.log(copy);

server.post("/books", (req, res) => {
  console.log("Req****", req.body)
  let bookItem = {
    title: req.body.title,
    sourceId: parseInt(req.body.sourceId, 10),
    image: { src: req.body.image },
    author: req.body.author,
    rating: req.body.rating,
    availableBooks: 1,
    originalPrice: req.body.originalPrice,
    priceFrom: 0
  };

  let copyItem = {
    sourceId: parseInt(req.body.sourceId, 10),
    ownerId: req.body.ownerId,
    price: req.body.price,
    condition: req.body.condition,
    comment: req.body.comment,
    contact: req.body.contact,
    location: req.body.location,
    book: bookItem,
    owner: []
  };
  // console.log("req: " + req.body.sourceId)
  // console.log("copyItem: " + copyItem.sourceId)

  const result = getBook(bookItem.sourceId);
  if (result) {
    bookItem.availableBooks = getBook(bookItem.sourceId).availableBooks + 1;
    updateBookNewCopy(bookItem.sourceId, bookItem);
  } else {
    addBook(bookItem);
    res.sendStatus("201");
  }
  addCopy(copyItem);

  res.jsonp("success");
});


server.get("/copies", (req, res) => {
  console.log(req.query.sourceId);
  let bookItem = {
    sourceId: parseInt(req.query.sourceId, 10),
  };
  const result = getCopy(bookItem.sourceId);
  console.log(result);
  res.jsonp(result);
});

server.use(router);
server.listen(3333, () => {
  console.log("JSON server is running on port 3333");
});
