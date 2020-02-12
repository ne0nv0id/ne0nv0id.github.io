
// Summary:
    // Initially wanted to refactor the code to run off of one on-click listener and plug/play the character name into the link like we did with the NYPD complaints app. However, I couldn't make the "one" universal function work properly, and went for a less dry but working approach to give each button a specific ajax call inside of a click event listener.
//declare cards in global scope
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
                $anakinInfo.text(
                    `${data.name}, born in ${data.birth_year}, played many roles in the Star Wars universe. From starting a protege with budding potential to ending as the chosen one to bring down the Empire, he remains my favorite charcter to this day. He was and still is regarded as the strongest force user to live aside from Yoda himself.`
                );
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
                $quiGonInfo.text(
                    `${data.name}, born in ${data.birth_year}, was a Jedi master seen in Star Wars Episode I. His apprentice was the legendary Obi Wan Kenobi, and he was very learned with the Force and the Jedi way. Up until his end fighing Darth Maul, he carried his calm and cool demeanor.`
                );
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
                $darthMaulInfo.text(
                    `${data.name}, born in ${data.birth_year}, was the ominous agent of the Sith during Episode I. From the planet of Dathomir, much of Darth Maul's origin is explained in the extended literature including his brutally aggressive combat style. Brutal enough to bring down Qui-Gon Jinn.`
                );
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
                $grievousInfo.text(
                    `General ${data.name}, birth year ${data.birth_year}, is the only one in this list that had no capabilities with the force. Not much is known about him, but Grievous belonged to a warrior tribe of hominid aliens, and was equipped with his cybernetic parts by the Empire - sent after Republic/Jedi targets by Dooku himself.`
                );
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
                $dookuInfo.text(
                    `${data.name} Tyrannus, born in ${data.birth_year}, was Palpatine's direct disciple for Episodes I-III. Dooku, while powerful, continued to disobey the Sith's Rule of Two which led Palpatine to believe Dooku would attempt a coup. Therefore, Palpatine orchestrated Dooku's assassination in Episode 3.`
                );
                $dooku.css('display', 'block');
                // $flexContainer.append($anakin);
            },
            () => {
                console.log('This isn\'t Tatooine!');
            }
        )

    })
})
