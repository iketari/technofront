(function () {
	'use srtict';

	const config = {
		apiKey: "AIzaSyDDGWhW2CTwigQzNP1U0g4mo1YPieY7El0",
		authDomain: "technofront-f958d.firebaseapp.com",
		databaseURL: "https://technofront-f958d.firebaseio.com",
		storageBucket: "technofront-f958d.appspot.com",
	};

	class App {
		constructor () {
			this._initView();
			this._initDB();
		}

		_initView () {
			this.view = new View({
				el: document.querySelector('.js-view'),
				tmpl: document.querySelector('#tmpl').innerHTML,
				data: {}
			})
		}

		_initDB () {
			firebase.initializeApp(config);

			this.studentsRef = firebase.database().ref('students');
			this.studentsRef.orderByChild('time').on('value', snapshot => {
				console.log(snapshot.val());
				this.view.render(snapshot.val());
			});
		}
	}

	window.App = App;
})()
