Template.ThankYous.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('thankYous');
    });
});

Template.ThankYous.helpers({
    thankYous: ()=>{
        return ThankYous.find({}, {sort: {draft:-1}});
    }
});