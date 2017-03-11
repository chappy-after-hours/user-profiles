var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res) {
    var user = users.filter(function(value) {
      if (value.name === req.body.name && value.password === req.body.password) {
        return value;
      }
    })

    if (user[0]) {
      req.session.currentUser = user[0];
      console.log(req.session)
      res.status(200).send({userFound: true});
    } else {
      res.status(404).send({userFound: false})
    }
  },


}
