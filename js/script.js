$(function() {
	console.log('DOM loaded');

	function Button(text) {
			this.text = text || 'Hello';
	}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		$('body').append(this.$element); // or this.$element.appendTo($('body'));
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
	}
};

	var btn1 = new Button('Hello!');
	var btn2 = new Button('bla bla bla');
	btn1.create();
	btn2.create();
});