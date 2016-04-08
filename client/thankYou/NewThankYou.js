Template.NewThankYou.events({
    'submit form': function(event) {
        event.preventDefault();
        var target = event.target;
        var item = {
            giver  : target.giver.value,
            gift   : target.gift.value
        };
        ThankYous.insert(item, function(err, result) {
            console.log(err);
            console.log(result);
        });
    }
});