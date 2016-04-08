Meteor.publish('thankYous', function() {
    return ThankYous.find({});
});
