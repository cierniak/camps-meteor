Camps = new Mongo.Collection('camps');

Camps.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});