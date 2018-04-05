"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee row col-6 d-inline-block">';
    html += '<h5 class="coffee">' + coffee.name +'</h5> ';
    html += '<p class="text-muted coffee padding">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function nameCompare (e){
    e.preventDefault();
    var coffeeName = "";
    coffeeName = document.querySelector('#coffeeName');
    var namedCoffee = [];
    coffees.forEach(function(x) {
        if (x.name.toUpperCase().indexOf(coffeeName.value.toUpperCase()) >= 0) {
            namedCoffee.push(x)
        }
    });
    tbody.innerHTML = renderCoffees(namedCoffee);
}

function addCoffee(e){
    e.preventDefault();
    var createCoffeeName = document.getElementById('createCoffeeName').value;
    var createRoast = document.getElementById("createRoastSelection").value;
    var coffeeObject = {
        name: createCoffeeName, roast: createRoast};
    coffees.push(coffeeObject);
    tbody.innerHTML = renderCoffees(coffees);
}

var coffees = [
    {name: 'Light City', roast: 'light'},
    {name: 'Half City', roast: 'light'},
    {name: 'Cinnamon', roast: 'light'},
    {name: 'City', roast: 'medium'},
    {name: 'American', roast: 'medium'},
    {name: 'Breakfast', roast: 'medium'},
    {name: 'High', roast: 'dark'},
    {name: 'Continental', roast: 'dark'},
    {name: 'New Orleans', roast: 'dark'},
    {name: 'European', roast: 'dark'},
    {name: 'Espresso', roast: 'dark'},
    {name: 'Viennese', roast: 'dark'},
    {name: 'Italian', roast: 'dark'},
    {name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var createButton = document.querySelector('#createSubmit');
var coffeeName = document.getElementById('coffeeName');

tbody.innerHTML = renderCoffees(coffees);

coffeeName.addEventListener('keyup', nameCompare);
submitButton.addEventListener('click', nameCompare);
roastSelection.addEventListener('change', updateCoffees);
createButton.addEventListener('click', addCoffee);"use strict"
