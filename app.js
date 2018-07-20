const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

// Import eucledian algorithm
const gdc = require('./eucledian-algorithm');

app.get('/api/gcd/:a?/:b?', (req, res) => {
  let a = req.params.a;
  let b = req.params.b;

  // if parameters are undefined, return API notice.
  if (a == undefined && b == undefined) {
    res.status(200).json({
      route: '/api/gdc/:a/:b',
      type: 'GET',
      description: 'Please provide 2 nonnegative integer as url parameters to find greatest common diviser.'
    });
  } else {
    // Parse parameters into integers
    a = parseInt(a);
    b = parseInt(b);

    // Call gdc() to calculate greatest common divisor
    let G = gdc(a, b);

    // End request with answer and status code 200 - OK
    res.status(200).json({
      msg: `Greatest common divisor between ${a} and ${b} is:`,
      gdc: G
    });
  }

});


// Start server on PORT 3000
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});