Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('camps'); }
});
Router.route('/', {name: 'campsList'});