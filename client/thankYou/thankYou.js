Template.ThankYou.helpers({
    tyClass: ()=>{
        var temp = Template.instance().data;
        if(temp.written){
            return "TY-Written";
        } else if(temp.finalized){
            return "TY-Finalized";
        } else if(temp.draft) {
            return "TY-Draft";
        } else {
            return "";
        }
    }
});

Template.ThankYou.events({
    'click .update-draft' : function(event) {
        event.preventDefault();
        var info = $(event.target).parents('form').find('textarea').val();
        Meteor.call('updateDraft', this._id, info);
    },
    'click .update-final' : function(event) {
        event.preventDefault();
        var info = $(event.target).parents('form').find('textarea').val();
        Meteor.call('finalize', this._id, info);
    },
    'click .update-write' : function(event) {
        event.preventDefault();
        var info = $(event.target).parents('form').find('textarea').val();
        Meteor.call('write', this._id, info);
    }
});