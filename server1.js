const express = require('express');
require('dotenv').config(); 
const app = express();
const db = require('./db'); // This connects to MongoDB
// Load environment variables from .env file

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
const PORT = process.env.PORT || 3000;









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

 app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

























// ✅ Gracefully handle app termination (Ctrl+C, kill, etc.)
process.on('SIGINT', async () => {
  console.log('\n🛑 Caught SIGINT (app is closing)');
  await mongoose.disconnect();
  console.log('🔌 Mongoose disconnected due to app termination');
  process.exit(0);
});
