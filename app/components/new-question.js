import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: false,
    actions: {
        questionFormShow() {
            this.set('addNewQuestion', true);
        },

        saveQuestion() {
            var params = {
                /**** The code after the ? gives room to a user to be able to leave
                 their input area blank and still send their question to firebase
                 ****/
                author: this.get('author') ? this.get('author') : "Anonymous",
                asked: this.get('asked') ? this.get('asked') : "Where's the question",
                notes: this.get('notes') ? this.get('notes') : "Sorry no notes"
            };
            /* --- Input fields --- */
            this.set('author', '');
            this.set('asked', '');
            this.set('asked', '');
            this.set('notes', '');
            /* The code in this code block sets the input fields back to 0 */

            this.set('addNewQuestion', false);
            this.sendAction('saveQuestion', params);
        },
        cancelQuestionForm() {
            this.set('addNewQuestion', false);
        }
    }
});
