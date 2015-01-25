Template.campsList.helpers({
    camps: function() {
        return Camps.find({}, {sort: {submitted: -1}});
    }
});