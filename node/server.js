const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = new express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'mysql_container',
    user: 'root',
    password: '',
    database: 'kungfu_classroom'
})

// Route to fetch data from MySQL
app.get('/', (req, res) => {
    connection.query('SELECT name FROM students', (err, results) => {
        if (err) {
            res.send('MySQL connection error.');
        }

        res.json(results);
    })
})

// Route to fetch data from MySQL from monday_9_30 column
app.get('/monday_9_30', (req, res) => {
  // Execute SQL query to select student names where monday_9_30 column is true
  connection.query('SELECT student_name FROM classes WHERE monday_9_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from monday_19_00 column
app.get('/monday_19_00', (req, res) => {
  // Execute SQL query to select student names where monday_19_00 column is true
  connection.query('SELECT student_name FROM classes WHERE monday_19_00 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from tuesday_9_30 column
app.get('/tuesday_9_30', (req, res) => {
  // Execute SQL query to select student names where tuesday_9_30 column is true
  connection.query('SELECT student_name FROM classes WHERE tuesday_9_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from wednesday_9_30 column
app.get('/wednesday_9_30', (req, res) => {
  // Execute SQL query to select student names where wednesday_9_30 column is true
  connection.query('SELECT student_name FROM classes WHERE wednesday_9_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from wednesday_19_00 column
app.get('/wednesday_19_00', (req, res) => {
  // Execute SQL query to select student names where wednesday_19_00 column is true
  connection.query('SELECT student_name FROM classes WHERE wednesday_19_00 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from wednesday_19_00 column
app.get('/wednesday_19_00', (req, res) => {
  // Execute SQL query to select student names where wednesday_19_00 column is true
  connection.query('SELECT student_name FROM classes WHERE wednesday_19_00 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from friday_9_30 column
app.get('/friday_9_30', (req, res) => {
  // Execute SQL query to select student names where friday_9_30 column is true
  connection.query('SELECT student_name FROM classes WHERE friday_9_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from friday_17_30 column
app.get('/friday_17_30', (req, res) => {
  // Execute SQL query to select student names where friday_17_30 column is true
  connection.query('SELECT student_name FROM classes WHERE friday_17_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from friday_19_00 column
app.get('/friday_19_00', (req, res) => {
  // Execute SQL query to select student names where friday_19_00 column is true
  connection.query('SELECT student_name FROM classes WHERE friday_19_00 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from saturday_9_30 column
app.get('/saturday_9_30', (req, res) => {
  // Execute SQL query to select student names where saturday_9_30 column is true
  connection.query('SELECT student_name FROM classes WHERE saturday_9_30 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to fetch data from MySQL from saturday_11_00 column
app.get('/saturday_11_00', (req, res) => {
  // Execute SQL query to select student names where saturday_11_00 column is true
  connection.query('SELECT student_name FROM classes WHERE saturday_11_00 = 1', (err, results) => {
      if (err) {
          res.status(500).send('MySQL connection error.');
          return;
      }

      // Send the student names as JSON response
      res.json(results);
  });
});

// Route to handle saving data
app.post('/saveData', (req, res) => {
  const { student, classes } = req.body;

  // Construct the SQL query
  let query = 'UPDATE classes SET ';
  const columns = Object.keys(classes);
  const setColumns = columns.map(column => `${column} = ?`).join(', ');

  // Add column names to the query
  query += `${setColumns} WHERE student_name = ?`;

  // Execute the query
  const values = [...Object.values(classes).map(value => value ? 1 : 0), student];

  connection.query(query, values, (error, results, fields) => {
    if (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.sendStatus(200); // Send a success response
  });
});


  // Start the server
  const port = process.env.PORT || 3000;  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})