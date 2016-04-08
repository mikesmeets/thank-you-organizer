if(Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('home');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('login');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()) {
        FlowRouter.go('login');
    }
}]);

FlowRouter.route('/',{
    name: 'login',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('home');
        }
        BlazeLayout.render('Login');
    }
});

FlowRouter.route('/home',{
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

