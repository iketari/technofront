(function () {
	'use strict';

	class View {
		constructor (opts) {
			Object.assign(this, opts);
			this._dataHash = {};
		}

		render (data) {
			if (!data) {
				return;
			}
			this.data = this._prepare(data);
			this.el.innerHTML = Mustache.render(this.tmpl, this.data);
			setTimeout(this._updateNew.bind(this), 1000);
		}

		_prepare (source) {
			let students = Object.keys(source).map(key => {
				source[key].time = (new Date(source[key].time)).toLocaleString();

				source[key].className = '';
				if (!this._dataHash[key]) {
					this._dataHash[key] = source[key];
					source[key].className = 'new';
				}

				return source[key];
			}).reverse();

			return { students };
		}

		_updateNew () {
			let news = this.el.querySelectorAll('.new');

			Array.prototype.forEach.call(news, el => {
				el.classList.remove('new');
			})
		}
	}

	//export
	window.View = View;
})()
