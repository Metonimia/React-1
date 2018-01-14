var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 3,
		title: 'Wielkie piękno',
		desc: 'Trzeba zobaczyć, żeby wiedzieć',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 4,
		title: 'Paterson',
		desc: 'Film o kierowcy autobusu i poecie',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 5,
		title: 'Lady Bird',
		desc: 'Jutro się dowiem :)',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	}
];

var moviesElements = movies.map(function(movies) {
	return React.createElement('li', {key: movies.id},
		React.createElement('h2', {}, movies.title),
		React.createElement('p', {}, movies.desc),
		React.createElement('img', {src: movies.pic})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));