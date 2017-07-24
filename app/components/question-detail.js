import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(question) { //you must pass your parameter question
            if(confirm('Please do not delete me!')) {
                this.sendAction('destroyQuestion', question);
            }
        },
        destroyAnswer(answer) {
            this.sendAction('destroyAnswer', answer); //finally added the destroy answer button and brought it's actions forward. ***/
        },
        answerUp(answer) {
            this.sendAction('answerUp', answer);
        },
        answerDown(answer) {
            this.sendAction('answerDown', answer);
        }
    }
});
