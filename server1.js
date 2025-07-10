const express = require('express');
const app = express();
const db = require('./db'); // This connects to MongoDB


const bodyParser = require('body-parser');
app.use(bodyParser.json());
 // Importing Person model
const personRoutes = require('./routes/personRoutes'); // Importing personRoutes
app.use('/person',personRoutes);
 // Importing MenuItem model
//const express = require('express');
const menuItemsRoutes = require('./routes/menuItemsRoute'); // Importing menuItemsRoutes
app.use('/menuitem', menuItemsRoutes); // Use the menuItemsRoutes for handling menu



const mongoose = require('mongoose');
const port = 3000;









 // Use the personRoutes for handling person-related requests

    
  /*newPerson.save(error, Person => {

    if (error) {
      console.log('Error saving person:', error);
      return res.status(500).send('Error saving person');
    }
    console.log('Person saved successfully:', Person);
    res.status(201).json(Person);
  });
});*/   //nowadays instead of using callback we use async await
  

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server friend!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

























// ✅ Gracefully handle app termination (Ctrl+C, kill, etc.)
process.on('SIGINT', async () => {
  console.log('\n🛑 Caught SIGINT (app is closing)');
  await mongoose.disconnect();
  console.log('🔌 Mongoose disconnected due to app termination');
  process.exit(0);
});
