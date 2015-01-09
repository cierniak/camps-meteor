Template.campSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var camp = {
            url: $(e.target).find('[name=url]').val(),
            name: $(e.target).find('[name=name]').val()
        };

        Meteor.call('campInsert', camp, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);
            Router.go('campPage', {_id: result._id});
        });
    }
});