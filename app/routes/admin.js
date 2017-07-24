import Ember from 'ember';

export default Ember.Route.extend({

    body: Ember.computed('model.author', 'model.question', function() {
        return this.get('model.author') + "'s question " + this.get('model.question');
    }),
    /*** Most of the actions found in this route reflect the ones found in question route ***/
//   model(params) {
//     return this.store.findRecord('question', params.question_id)
//   },
  actions: {
    edit(question, params) {
      Object.keys(params).forEach(function (key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveAnswer(params) {
      params.upvote = 0; //this gives the upvote a value of zero to initialise the steps to come ***answerUp***
      params.downvote = 0; //this does the same to the down vote to be able to give the ***answerDown*** an intial value of zero

      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function () {
        return question.save(); //this has a promise to ensure answers are saved to the specific question
      });
      this.transitionTo('question', question);
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    }
  }
});
