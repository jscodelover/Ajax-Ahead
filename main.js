const cities_json='https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json';

const cities=[];

fetch(cities_json)
  .then(promise => promise.json())
  .then(promise_array => cities.push(...promise_array))
 

const searchInput=document.querySelector('#search');
const suggestion=document.querySelector('#suggestion');



searchInput.addEventListener('keyup', () => { findResult(cities,searchInput.value) } );

function findResult(cities, val) {
	let strMatch=new RegExp(val,'gi');
	suggestion.innerHTML='';
	cities.filter(place => place.name.match(strMatch) || place.state.match(strMatch)).forEach(function(place){
			const li = document.createElement("li");
			const span1 = document.createElement("span");
			const span2 = document.createElement("span");
			span1.appendChild(document.createTextNode(`${place.name}`));
			span2.appendChild(document.createTextNode(`${place.state}`));
			li.appendChild(span1);
			li.appendChild(span2);
			suggestion.appendChild(li);
	});
}					


suggestion.addEventListener('click', (e) => searchInput.value=e.path[0].innerHTML);