var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: function(req, res) {
    console.log(0,req.session.currentUser)
    // var friendsArr = req.session.currentUser.friends.filter(function(value) {
    //   console.log(1, value)
    //   for (var i = 0; i < profiles.length; i++) {
    //     var obj;
    //     if (profiles[i].name === value) {
    //       obj = profiles[i];
    //       console.log(obj)
    //     }
    //     return obj;
    //   }
    // });
var frien = [];
    for (var i = 0; i < req.session.currentUser.friends.length; i++) {
      var f = profiles.filter(function(value) {
        if (value.name === req.session.currentUser.friends[i]) {
          return value
        }
      })
      frien.push(f[0])
    }

console.log(5,frien)
    var finishedObject = {
      currentUser: req.session.currentUser,
      friends: frien
    }
    res.status(200).send(finishedObject)
  }
}
