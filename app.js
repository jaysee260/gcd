const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

// Import eucledian algorithm
const gcd = require('./eucledian-algorithm');


///// ROUTES /////

app.get('/gcd/:a?/:b?', (req, res) => {
  let a = req.params.a;
  let b = req.params.b;

  // if parameters are undefined, return API notice.
  if (a == undefined && b == undefined) {
    let description = 'Please provide 2 nonnegative integer as url parameters to find greatest common diviser.';
    res.status(200).json({
      route: '/api/gdc/:a/:b',
      type: 'GET',
      description
    });
  } else {
    // Parse parameters into integers
    a = parseInt(a);
    b = parseInt(b);

    // Call gcd() to calculate greatest common divisor
    let G = gcd(a, b);

    // End request with answer and status code 200 - OK
    res.status(200).json({
      msg: `Greatest common divisor between ${a} and ${b} is:`,
      gdc: G
    });
  }

});

app.get('*', (req, res) => {
  res.json({
    available_routes: [
      "/api/gdc/:a/:b"
    ]
  });
});


// Start server on PORT 3000
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});