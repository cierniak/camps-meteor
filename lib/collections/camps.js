Camps = new Mongo.Collection('camps');

Meteor.methods({
    campInsert: function(campAttributes) {
        check(Meteor.userId(), String);
        check(campAttributes, {
            name: String,
            url: String
        });
        var user = Meteor.user();
        var camp = _.extend(campAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var campId = Camps.insert(camp);
        return {
            _id: campId
        };
    }
});