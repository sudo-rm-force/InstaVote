var DocumentDBClient = require('documentdb').DocumentClient;
// var config = require('./config');
// var TaskList = require('./routes/tasklist');
// var TaskDao = require('./models/taskDao');



const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./config');

const endpoint = config.endpoint;
const key = config.key;

const client = new CosmosClient({ endpoint, key });

const HttpStatusCodes = { NOTFOUND: 404 };

const databaseId = config.databaseId;
const containerId = config.collectionId;
const partitionKey = { kind: "Hash", paths: ["/Country"] };

var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

// const CosmosClient = require('@azure/cosmos').CosmosClient; //humne

 var app = express();

// const endpoint = config.endpoint; // humne
// const key = config.key; //humne

// const client = new CosmosClient({ endpoint, key });//humne



// // ADD THIS PART TO YOUR CODE
// const HttpStatusCodes = { NOTFOUND: 404 };//humne

// const databaseId = config.databaseId;//humne
// const containerId = config.collectionId;//humne
// const partitionKey = { kind: "Hash", paths: ["/India"] }; //humne




/* yeh hamara blob ka code hai*/
const {
  Aborter,
  BlobURL,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  StorageURL,
  SharedKeyCredential,
  uploadStreamToBlockBlob
} = require('@azure/storage-blob');

const router = express.Router();
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');
const getStream = require('into-stream');
const containerName = 'voters';
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
const ONE_MINUTE = 60 * 1000;
const aborter = Aborter.timeout(30 * ONE_MINUTE);

const sharedKeyCredential = new SharedKeyCredential(
  'evoting',
  'HW1bwC3y9o43mAGE98xQDYW27Tc5IOMRk78UVxW/LIBwaBO2nd7hoXPP08lAH2KADmirYpCvx5PVzuSWprk+GQ==');
const pipeline = StorageURL.newPipeline(sharedKeyCredential);
const serviceURL = new ServiceURL(
  `https://evoting.blob.core.windows.net`,
  pipeline
);
























// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// //Todo App:
var docDbClient = new DocumentDBClient(config.host, {
    masterKey: config.authKey
});
// var taskDao = new TaskDao(docDbClient, config.databaseId, config.collectionId);
// var taskList = new TaskList(taskDao);
// taskDao.init();

// app.get('/', taskList.showTasks.bind(taskList));
// app.post('/addtask', taskList.addTask.bind(taskList));
// app.post('/completetask', taskList.completeTask.bind(taskList));
 app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// async function createDatabase() {//humne
//   const { database } = await client.databases.createIfNotExists({ id: databaseId });//humne
//   console.log(`Created database:\n${database.id}\n`);//humne
// }//humne

// /**
// * Read the database definition
// */
// async function readDatabase() {//humne
//  const { resource: databaseDefinition } = await client.database(databaseId).read();//humne
//  console.log(`Reading database:\n${databaseDefinition.id}\n`);//humne
// }

// // ADD THIS PART TO YOUR CODE 
// //humne
// function exit(message) {
//   console.log(message);
//   console.log('Press any key to exit');
//   process.stdin.setRawMode(true);
//   process.stdin.resume();
//   process.stdin.on('data', process.exit.bind(process, 0));
// };


// createDatabase()
//   .then(() => readDatabase())
//   .then(() => { exit(`Completed successfully`); })
//   .catch((error) => { exit(`Completed with error \${JSON.stringify(error)}`) });

// //humne

// 





 /**
 * Create the database if it does not exist
 */
 async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  console.log(`Created database:\n${database.id}\n`);
}

/**
* Read the database definition
*/
async function readDatabase() {
  const { resource: databaseDefinition } = await client.database(databaseId).read();
 console.log(`Reading database:\n${databaseDefinition.id}\n`);
}

/**
* Exit the app with a prompt
* @param {message} message - The message to display
*/
function exit(message) {
  console.log(message);
  console.log('Press any key to exit');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}

createDatabase()
  .then(() => readDatabase())
  .then(() => { exit(`Completed successfully`); })
  .catch((error) => { exit(`Completed with error ${JSON.stringify(error) }`) });






/**
* Create the container if it does not exist
*/

async function createContainer() {

 const { container } = await client.database(databaseId).containers.createIfNotExists({ id: containerId, partitionKey }, { offerThroughput: 400 });
 console.log(`Created container:\n${config.collectionId}\n`);
}

/**
 * Read the container definition
*/
async function readContainer() {
   const { resource: containerDefinition } = await client.database(databaseId).container(containerId).read();
 console.log(`Reading container:\n${containerDefinition.id}\n`);
}


createDatabase()
  .then(() => readDatabase())

  // ADD THIS PART TO YOUR CODE
  .then(() => createContainer())
  .then(() => readContainer())
  // ENDS HERE

  .then(() => { exit(`Completed successfully`); })
  .catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) });


  /**
* Create family item
*/
async function registerItem(itemBody) {
  const { item } = await client.database(databaseId).container(containerId).items.upsert(itemBody);
  //console.log(`Created family item with id:\n${itemBody.id}\n`);
};


const getBlobName = originalName => {
  // Use a random number to generate a unique file name, 
  // removing "0." from the start of the string.
  const identifier = Math.random().toString().replace(/0\./, ''); 
  return `${identifier}-${originalName}`;
};


app.post('/', uploadStrategy, async (req, res) => {

    console.log(req.body);
    const blobName = getBlobName(req.face_id.file.originalname);
    const stream = getStream(req.face_id.file.buffer);
    const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
    const blobURL = BlobURL.fromContainerURL(containerURL, blobName);
    const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);

    try {
      
      await uploadStreamToBlockBlob(aborter, stream,
        blockBlobURL, uploadOptions.bufferSize, uploadOptions.maxBuffers);

      res.render('success', { message: 'File uploaded to Azure Blob storage.' });   

    } catch (err) {

      res.render('error', { message: 'Something went wrong.' });

    }
});








createDatabase()
  .then(() => readDatabase())
  .then(() => createContainer())
  .then(() => readContainer())

  // ADD THIS PART TO YOUR CODE
  .then(() => registerItem(config.items.AyanKanjoos))
  // ENDS HERE

  .then(() => { exit(`Completed successfully`); })
  .catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) });




  module.exports = app;