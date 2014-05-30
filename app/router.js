export default Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
  	this.route('active');
  	this.route('completed');
  });
});

export default Router;