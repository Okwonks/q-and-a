import Ember from 'ember';

export default Ember.Component.extend({
    addMapForm: false,
    
    actions: {
        mapFormShow() {
            this.set('addMapForm', true)
        },
        saveMap() {
            var params = {
                latitude: this.get('latitude'),
                longitude: this.get('longitude')
            };
            this.set('latitude', '');
            this.set('longitude', '');

            this.set('addMapForm', false);
            this.sendAction('saveMap', params);
        },
        cancelForm() {
            this.set('addMapForm', false);
        }
    }
});
