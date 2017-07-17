import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnswer: false,
    actions: {
        answerFormShow() {
            this.set('addNewAnswer', true);
        },
        saveAnswer() {
            var params = {
                author: this.get('author'),
                answered: this.get('answered'),
                question: this.get('question')
            };
            this.set('addNewAnswer', false);
            this.sendAction('saveAnswer', params);
        },
        cancelAnswerForm() {
            this.set('addNewAnswer', false);//This will reomove the answer form incase a user doesn't want to answer.
        }
    }
});
