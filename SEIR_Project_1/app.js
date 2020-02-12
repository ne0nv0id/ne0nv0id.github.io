
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

Refactor:
    0. Shorten to one ajax call and use one link
    1. Access peopleNumbers to get the character by adding the value of peopleNumbers to the link above
    2. Add people/11.name to card to test
    3. Turn that into a template literal so you can have a cohesive sentence about each character.
*/
//declare cards in global scope
//declare people numbers as an array
const peopleNumbers = [32, 11, 44, 67, 79];
//access people numbers to use
const $about = $('#about');
const $anakin = $('#anakin');
const $quiGon = $('#qui-gon');
const $darthMaul = $('#darth-maul');
const $grievous = $('#grievous');
const $dooku = $('#dooku');
const $container = $('#flex-container');



$(() => {
    $flexContainer = $('#flex-container');
    $('.character-section').css('display', 'none');
    $('#about').css('display', 'block');
    //about button on click function
    $('#aboutBtn').on('click', (event) => {
        event.preventDefault();
        console.log("landing page reached");
        $('.character-section').css('display', 'none');
        $('#about').css('display', 'block');
    })
    //anakin on click function
    $('#anakinBtn').on('click', (event) => {
        event.preventDefault();
        $('.character-section').css('display', 'none');
        $.ajax({
            url:'https://swapi.co/api/people/11'
        }).then(
            (data) => {
                console.log(data.name);
                $anakinInfo = $('#anakin-info');
                $anakinInfo.text(data.name);
                $anakin.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )

    })
    //quigon on click function
    $('#quiGonBtn').on('click', (event) => {
        event.preventDefault()
        $('.character-section').css('display', 'none');
        $.ajax({
            url:'https://swapi.co/api/people/32'
        }).then(
            (data) => {
                console.log(data.name);
                $quiGonInfo = $('#quigon-info');
                $quiGonInfo.text(data.name);
                $quiGon.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )

    })
    //darth maul on click function
    $('#darthMaulBtn').on('click', (event) => {
        event.preventDefault()
        $('.character-section').css('display', 'none');
        $.ajax({
            url:'https://swapi.co/api/people/44'
        }).then(
            (data) => {
                console.log(data.name);
                $darthMaulInfo = $('#darthmaul-info');
                $darthMaulInfo.text(data.name);
                $darthMaul.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )
    })
    //grievous on click function
    $('#grievousBtn').on('click', (event) => {
        event.preventDefault()
        $('.character-section').css('display', 'none');
        $.ajax({
            url:'https://swapi.co/api/people/79'
        }).then(
            (data) => {
                console.log(data.name);
                $grievousInfo = $('#grievous-info');
                $grievousInfo.text(data.name);
                $grievous.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )
    })
    //dooku on click function
    $('#dookuBtn').on('click', (event) => {
        event.preventDefault()
        $('.character-section').css('display', 'none');
        $.ajax({
            url:'https://swapi.co/api/people/67'
        }).then(
            (data) => {
                console.log(data.name);
                $dookuInfo = $('#dooku-info');
                $dookuInfo.text(data.name);
                $dooku.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )

    })
})

// let charNumber = parseInt($(event.target).val());
// let link = `https://swapi.co/api/people/${charNumber}`;
// let characterBtn = $(event.target).attr('id');

// console.log(link);
// console.log(typeof charNumber);
// console.log(characterBtn);

// $.ajax({
//     url: link
// }).then(
//     (data) => {
//         console.log(data.name + ' ' + data.birth_year);
//         const $infoDiv = $('<div>')
//             .addClass('character-info')
//             .attr('id', 'anakin-info')
//             .css('display', 'block')
//             .text(data.name);
//         // console.log($infoDiv);
//         $anakin.append($infoDiv);
//         $anakin.css('display', 'block');
//         $('body').append($anakin);
//         // let sectionName = $(event.target).name();
//         // console.log(sectionName);
//     },
//     () => {
//         console.log('This isn\'t Tatooine!');
//     }
// )
// displayCard(characterBtn);

// const displayCard = (char) => {
//
//     $.ajax({
//         url: link
//     }).then(
//         (data) => {
//             // console.log(data.name);
//             // //set the text in the info div to char info
            // const $infoDiv = $('<div>')
            //     .addClass('character-info')
            //     .attr('id', 'anakin-info')
            //     .css('display', 'block')
            //     .text(data.name);
//             // $anakin.css('display', 'block');
//             // $anakin.append($infoDiv);
//             // $container.append($anakin);
//         },
//         () => {
//             console.log('This isn\'t Tatooine!');
//         }
//     )
//
//
// }

$.ajax({
    url:'https://swapi.co/api/people/32'
}).then(
    (data) => {
        console.log(data.name);
    },
    () => {
        console.log('This isn\'t Tatooine!');
    }
)
// $.ajax({
//     url:'https://swapi.co/api/people/11'
// }).then(
//     (data) => {
//         // console.log(data.name);
//     },
//     () => {
//         console.log('This isn\'t Tatooine!');
//     }
// )
// $.ajax({
//     url:'https://swapi.co/api/people/44'
// }).then(
//     (data) => {
//         // console.log(data.name);
//     },
//     () => {
//         console.log('This isn\'t Tatooine!');
//     }
// )
// $.ajax({
//     url:'https://swapi.co/api/people/67'
// }).then(
//     (data) => {
//         // console.log(data.name);
//     },
//     () => {
//         console.log('This isn\'t Tatooine!');
//     }
// )
// $.ajax({
//     url:'https://swapi.co/api/people/79'
// }).then(
//     (data) => {
//         // console.log(data.name);
//     },
//     () => {
//         console.log('This isn\'t Tatooine!');
//     }
// )
