var API_URL = 'https://last-airbender-api.herokuapp.com/api/v1/';

var app = new Vue({
	el: '#app',
	data: {
		cards: {},
		loader: true
	},
	updated() {
    	loadSearch();

    	$('.open-popup').magnificPopup({
    		type: 'image'
    	});
  	},
});

axios.get(API_URL + 'characters?perPage=1000&page=1').then(function (response) {
    app.cards  = response.data;
    app.loader = false;

    app.cards.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    console.log(app.cards);
});

// Search
function loadSearch() {
	var options = {
	 	valueNames: ['name', 'affiliation']
	};

	var personagensList = new List('app', options);
}

$('.scroll').click(function(event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
});