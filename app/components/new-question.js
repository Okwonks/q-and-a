import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: false,
    actions: {
        questionFormShow() {
            this.set('addNewQuestion', true);
        },

        saveQuestion() {
            var params = {
                author: this.get('author'),
                asked: this.get('asked'),
                notes: this.get('notes')
            };
            this.set('addNewQuestion', false);
            this.sendAction('saveQuestion', params);
        },
        cancelQuestionForm() {
            this.set('addNewQuestion', false);
        }
    }
});
