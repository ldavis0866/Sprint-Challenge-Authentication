const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');




const getAllJokes = (req, res) => {
  const decoded = req.headers.authorization;
  if (req.decoded) {
    fetch(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )

      .then(p => p.json())
      .then(jokes => res.json(jokes))
      .catch(err => res.status(500).json({ error: 'Error Fetching Jokes' }));
  } else {
    return res.status(422).json({ error: `Can't get these jokes!` });
  }
};

/*function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if(token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'you shall not pass! not decoded'
       });
      }
      next();
    });
  } else {
    res.status(401).json({ message: 'you shall not pass! no token' });
  }
}*/


module.exports = {
  getAllJokes
};
