Template.campItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    }
});