var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		pic: pictures
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny'
	},
	{
		id: 3,
		title: 'Wielkie piękno',
		desc: 'Trzeba zobaczyć, żeby wiedzieć'
	},
	{
		id: 4,
		title: 'Paterson',
		desc: 'Film o kierowcy autobusu i poecie'
	},
	{
		id: 5,
		title: 'Lady Bird',
		desc: 'Jutro się dowiem :)'

	}
];

var moviesElements = movies.map(function(movies) {
	return React.createElement('li', {key: movies.id},
		React.createElement('h2', {}, movies.title),
		React.createElement('p', {}, movies.desc),
		React.createElement('img', {}, pictures.src)
	);
});

var pictures =
	{
		name: 'harry',
		src: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	};

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));