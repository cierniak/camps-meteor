Template.campSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var camp = {
            url: $(e.target).find('[name=url]').val(),
            name: $(e.target).find('[name=name]').val()
        };

        camp._id = Camps.insert(camp);
        Router.go('campPage', camp);
    }
});