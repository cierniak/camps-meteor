Camps = new Mongo.Collection('camps');

Camps.allow({
    update: function(userId, post) { return ownsDocument(userId, post); },
    remove: function(userId, post) { return ownsDocument(userId, post); },
});

Camps.deny({
    update: function(userId, camp, fieldNames) {
        // may only edit the following two fields:
        return (_.without(fieldNames, 'url', 'name').length > 0);
    }
});

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