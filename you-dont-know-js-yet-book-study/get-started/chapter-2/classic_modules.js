function Publication(title, author, pubDate) {
	var publicAPI = {
		print() {
			console.log(`
    Title: ${title}
    By: ${author}
    ${pubDate}
    `);
		},
	};
	return publicAPI;
}

const smartHomes = Publication(
	"know your home",
	"Victor",
	"16th february 2024"
);

smartHomes.print();

function Book(bookDetails) {
	var pub = Publication(
		bookDetails.title,
		bookDetails.author,
		bookDetails.publishedOn
	);
	var publicAPI = {
		print() {
			pub.print();
			console.log(`
        Publisher: ${bookDetails.publisher}
        ISBN: ${bookDetails.ISBN}
        `);
		},
	};
	return publicAPI;
}
function BlogPost(title, author, pubDate, URL) {
	var pub = Publication(title, author, pubDate);
	var publicAPI = {
		print() {
			pub.print();
			console.log(URL);
		},
	};
	return publicAPI;
}
