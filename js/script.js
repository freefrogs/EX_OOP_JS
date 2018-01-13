$(function() {
	console.log('DOM loaded');

	// id generator
	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		for (var i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	// column
	function Column(name) {
		var self = this;

		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {
			// columns components
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete fa fa-trash-o').attr('title', 'DELETE column');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add new card');
			// events after clicking column buttons
			$columnDelete.click(function() {
				self.removeColumn();
			});

			$columnAddCard.click(function() {
				self.addCard(new Card(prompt('Enter the name of the card')));
			});
			// building column
			$column.append($columnTitle)
				.append($columnDelete)
				.append($columnAddCard)
				.append($columnCardList);
			// creating column
			return $column;
		}
	}

	// methods for Column
	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element); // $element is a div.column and because of that we create this.$element.chldren('ul')
		},
		removeColumn: function() {
			this.$element.remove();
		}
	};

	// Card
	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete fa fa-trash-o').attr('title', 'DELETE card');
			// event after clicking card button
			$cardDelete.click(function() {
				self.removeCard();
			});
			// building card
			$card.append($cardDelete)
				.append($cardDescription);
			// creating card
			return $card;
		}
	}
	// method for card
	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}
	// board
	var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};
	// method from jQueryUI: option drag'n'drop and method sortable
	function initSortable() {
		$('.column-card-list').sortable({		// html selector of card lists with add method sortable
			connectWith: '.column-card-list',	// attribute (in that case html class) thanks to which we can choose a list
			placeholder: 'card-placeholder'		// class for empty space where we put card (we can define its style)
		}).disableSelection();					//disable the ability to select text on cards when card is moving
	}
	// listening event on create-column button
	$('.create-column').click(function() {
		var name = prompt('Enter a column name');
		var column = new Column(name);
			board.addColumn(column);
	});
	
	// default objects and adding them to the board
	var todoColumn = new Column('To do');
	var doingColumn = new Column('In progress');
	var doneColumn = new Column('Done');

	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	var card1 = new Card('Something to do 1');
	var card2 = new Card('Something to do 2');
	var card3 = new Card('Something to do 3');

	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
	doneColumn.addCard(card3);
});