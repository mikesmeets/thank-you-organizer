ThankYous = new Mongo.Collection('thankYous');

ThankYous.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

ThankYouSchema = new SimpleSchema({
    giver: {
        type: String,
        label: 'Gift Giver'
    },
    gift: {
        type: String,
        label: 'Gift'
    },
    thanksText: {
        type: String,
        label: 'Text of thank you',
        defaultValue: "Insert thank you text here..."
    },
    draft: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        label: 'Draft'
    },
    finalized: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        label: 'Finalized'
    },
    written: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        label: 'Written'
    },
    owner: {
        type: String,
        label: 'Owner',
        autoValue: function () {
            return this.userId;
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        }
    }
});

Meteor.methods({
    updateDraft: function(id,info) {
        ThankYous.update(id, {
            $set: {
                draft      : true,
                finalized  : false,
                written    : false,
                thanksText : info
            }
        })     
    },
    finalize: function(id,info) {
        ThankYous.update(id, {
            $set:  {
                draft      : false,
                finalized  : true,
                written    : false,
                thanksText : info
            }
        })
    },
    write: function(id,info) {
        ThankYous.update(id, {
            $set:  {
                draft      : false,
                finalized  : false,
                written    : true,
                thanksText : info
            }
        })
    }
});

ThankYous.attachSchema(ThankYouSchema);