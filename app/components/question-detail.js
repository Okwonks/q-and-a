import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(question) { //you must pass your parameter question
            if(confirm('Please do not delete me!')) {
                this.sendAction('destroyQuestion', question);
            }
        }
    }
});
