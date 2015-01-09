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
Router.route('/submit', {name: 'campSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'campPage'});