
// TODO:
/*
2. append API data to character-container
3. add the click to hide/show functionality
4. add character image and format link
*/
$.ajax({
    url:'https://swapi.co/api/people/32'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/11'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/44'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/67'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
$.ajax({
    url:'https://swapi.co/api/people/79'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
