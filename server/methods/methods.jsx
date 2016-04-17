Meteor.methods({
  insertPost (title) {
    check(arg1, String);

    Posts.insert({title});

    // .. do stuff ..

    return "some return value";
  }
});