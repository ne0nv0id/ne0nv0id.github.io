
// TODO:
/*
2. append API data to character-container
    a. First, pull specific key/value pairs from API and log them
    b. Append pairs to char info divs
    c. Use template literals to append the pairs inside of sentences and organize the information
3. add the click to hide/show functionality
    a. consider using one function and passing the current and next div as parameters
    b. display none to current div and display block to next div
4. lol styling
*/
const $body = $('body');
const $container = $('<div>').attr('id', 'flex-container');
$(() => {
    const $charDiv = $('<div>').addClass('character-section').css('display', 'none');
    $('body').append($charDiv);
})

$.ajax({
    url:'https://swapi.co/api/people/32'
}).then(
    (data) => {
        // console.log(data);
        console.log(data.name)
        const $anakinInfo = $('<div>')
            .addClass('character-info')
            .attr('id', 'anakin-info')
            .text(data.name + data.birth_year);
        console.log($anakinInfo);
        $('#anakin').append($anakinInfo);

    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/11'
}).then(
    (data) => {
        // console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/44'
}).then(
    (data) => {
        // console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/67'
}).then(
    (data) => {
        // console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/79'
}).then(
    (data) => {
        // console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
