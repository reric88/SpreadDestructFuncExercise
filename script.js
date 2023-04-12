br = (q) => {console.log('='.repeat(25));
    console.log('QUESTION ' + q);
}

// QUESTION 1a
br('1a');
const JPDinos = ['Velociraptors', 'Tyrannosaurus Rex', 'Dilophosaurus'];
console.log(JPDinos);

// QUESTION 1b
br('1b');
function seeDinos(firstDino, ...theOtherDinos){
    console.log(firstDino);
    console.log([...theOtherDinos]);
};

seeDinos(...JPDinos);

// QUESTION 2a
br('2a');
const JPCharacters = {
    alanGrant: 'Sam Neil',
    ellieSattler: 'Laura Dern',
    ianMalcolm: 'Jeff Goldblum',
};
console.log(JPCharacters);

// QUESTION 2b
br('2b');
seeCharacters = ({ellieSattler}) => console.log(ellieSattler);
seeCharacters(JPCharacters)

// BONUS 3a
br('3a');
const jurassicParkMovies = [
    {
        one: 'Jurassic Park',
        two: 'The Lost World',
        three: 'Jurassic Park 3',
    },
    {
        four: 'Jurassic World',
        five: 'Jurassic World: Fallen Kingdom',
        six: 'Jurassic World: Dominion',
    },
];
console.log(jurassicParkMovies);

// Bonus 3b
br('3b');
function seeJPMovies({one, two, three}, {four, five, six}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(jurassicParkMovies[0], jurassicParkMovies[1]);












