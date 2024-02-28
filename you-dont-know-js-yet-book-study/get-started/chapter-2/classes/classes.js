class Publication {
	constructor(title, author, pubDate) {
		this.title = title;
		this.author = author;
		this.pubDate = pubDate;
	}
	print() {
		console.log(`
    Title: ${this.title}
    By: ${this.author}
    ${this.pubDate}
    `);
	}
}
class Book extends Publication {
	constructor(bookDetails) {
		super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
		this.publisher = bookDetails.publisher;
		this.ISBN = bookDetails.ISBN;
	}
	print() {
		super.print();
		console.log(`
      Publisher: ${this.publisher}
      ISBN: ${this.ISBN}
      `);
	}
}
class BlogPost extends Publication {
	constructor(title, author, pubDate, URL) {
		super(title, author, pubDate);
		this.URL = URL;
	}
	print() {
		super.print();
		console.log(this.URL);
	}
}

var YDKJS = new Book({
	title: "You Don't Know JS",
	author: "Kyle Simpson",
	publishedOn: "June 2014",
	publisher: "O'Reilly",
	ISBN: "123456-789",
});
YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789
var forAgainstLet = new BlogPost(
	"For and against let",
	"Kyle Simpson",
	"October 27, 2014",
	"https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let

/**
 *  Notice that both child class instances have a print() method, which was an
override of the inherited print() method from the parent Publication
class. Each of those overridden child class print() methods call
super.print() to invoke the inherited version of the print() method.

The fact that both the inherited and overridden methods can have the same
name and co-exist is called polymorphism.
*
**/