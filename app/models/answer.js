import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    answered: DS.attr(),
    upvote: DS.attr('number'),
    downvote: DS.attr('number'),
    question: DS.belongsTo('question', { async: true })
});
