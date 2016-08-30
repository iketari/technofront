(function () {
	'use strict';

	class View {
		constructor (opts) {
			Object.assign(this, opts);
		}

		render (data) {
			this.data = this._prepare(data);
			this.el.innerHTML = Mustache.render(this.tmpl, this.data);
		}

		_prepare (source) {
			let students = Object.keys(source).map(key => {
				source[key].time = (new Date(source[key].time)).toLocaleString();
				return source[key];
			});

			return { students };
		}
	}

	//export
	window.View = View;
})()
