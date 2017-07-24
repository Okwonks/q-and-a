import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnswer: false,
    actions: {
        answerFormShow() {
            this.set('addNewAnswer', true);
        },
        saveAnswer() {
            var params = {
                author: this.get('author') ? this.get('author') : "Anonymous",
                answered: this.get('answered') ? this.get('answered') : "Oops, no answer",
                question: this.get('question'),
                dateAnswered: new Date().toISOString().substring(0,1)
            };
            //This will return the input fields to empty
            this.set('author',  ''); 
            this.set('answered', '');
            /* It ends right here ^^ */
            
            this.set('addNewAnswer', false);
            this.sendAction('saveAnswer', params);
        },
        cancelAnswerForm() {
            this.set('addNewAnswer', false);//This will reomove the answer form incase a user doesn't want to answer.
        }
    }
});
