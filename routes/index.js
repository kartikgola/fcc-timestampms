var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:input', function(req, res, next) {
  
  var input = req.params.input;
  var unix, natural;
  if (parseInt(input)) { // It is milliseconds
      var d = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
          
      unix = parseInt(input);
      d.setTime(unix);
      natural = d.toLocaleDateString('en-US', options);
  } 
  else { // It is date or some random text
    if (Date.parse(input)){ // It is date 
      unix = Date.parse(input);
      natural = input;
    } else { // It is some random text
      unix = null;
      natural = null;
    }
  }

  res.json({ unix : unix, natural : natural  });

});

module.exports = router;
