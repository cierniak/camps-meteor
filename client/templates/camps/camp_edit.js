Template.campEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        var currentCampId = this._id;
        var campProperties = {
            url: $(e.target).find('[name=url]').val(),
            name: $(e.target).find('[name=name]').val()
        }
        Camps.update(currentCampId, {$set: campProperties}, function(error) {
            if (error) {
                // display the error to the user
                alert('Cannot update the camp: ' + error.reason);
            } else {
                Router.go('campPage', {_id: currentCampId});
            }
        });
    },
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this camp?")) {
            var currentCampId = this._id;
            Camps.remove(currentCampId);
            Router.go('campsList');
        }
    }
});