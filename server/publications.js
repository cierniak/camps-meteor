Meteor.publish('camps', function() {
    return Camps.find();
});