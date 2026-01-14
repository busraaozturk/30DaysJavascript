const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

    // En az biri 19 yaşından büyük mü?
    const isAdult = people.some(person => ((new Date()).getFullYear())-person.year >= 19);
    console.log({isAdult});

    // Dizideki herkes 19 yaşından büyük mü?
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >=19);
    console.log({allAdult});

    // Id'si 823423 olan yorumu bul
    const comment = comments.find(
        comment => comment.id === 823423
    );
    console.log(comment);

    // Id'si 823423 olan yorum kaçıncı index'te?
    const index = comments.findIndex(
        comment => comment.id === 823423
    );
    console.log(index);

    // Index'ten başlayarak bir eleman siler
    //comments.splice(index, 1);

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];