var User = {
	attributes: {
		name: String,
		age: {
			type: Number,
			validations: ['notNegative']
		}
	},

	sharedMethods: {
		fullInfo: function() {
			return this.get('name') + ' - ' + this.get('age');
		},
		notNegative: function(value) {
			return value >= 0;
		}
	},

	clientMethods: {

	},

	serverMethods: {
		customMethod: function() {
      return 'Optional content';
    }
	},

	options: {
		allowREST: true,
		middlewares: []
	}
};

module.exports = User;