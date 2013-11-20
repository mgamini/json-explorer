document.getElementById('apply').addEventListener('click', function() {
	init(JSON.parse(document.getElementById('jsonInput').value), document.getElementById('jsonOutput'))
})

function init(obj, el) {
	el.innerHTML = '';
	el.className = "json-explorer"

	el.addEventListener('click', function (e) {
		if (e.target.classList.contains('parent')) {
			e.target.classList.toggle('expanded')
		}
	})

	function buildList(parentObj, parentEl) {
		var rEl, rParent;

		rParent = document.createElement('ul');		

		for (var key in parentObj) {
			rEl = document.createElement('li');

			if (typeof parentObj[key] == "object") {
				rEl.className = parentObj[key] instanceof Array ? 'parent array' : 'parent';
				rEl.innerHTML = '<span class="key">' + key + '</span>: {'
				buildList(parentObj[key], rEl)
			} else {
				rEl.innerHTML = '<span class="key">' + key + '</span>: <span class="value">' + parentObj[key] + '</span>';
			}

			rParent.appendChild(rEl);
		}
		parentEl.appendChild(rParent);
	}

	buildList(obj, el);
}