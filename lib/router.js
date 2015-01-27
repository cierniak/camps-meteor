Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('camps'); }
});

Router.route('/', {name: 'campsList'});
Router.route('/camps/:_id', {
    name: 'campPage',
    data: function() { return Camps.findOne(this.params._id); }
});
Router.route('/camps/:_id/edit', {
    name: 'campEdit',
    data: function() { return Camps.findOne(this.params._id); }
});
Router.route('/submit', {name: 'campSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only: 'campPage'});
Router.onBeforeAction(requireLogin, {only: 'campSubmit'});
