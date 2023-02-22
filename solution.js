const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 60
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team1 = players;
const team2 = [...players];
const captain1 = Object.assign({}, person);


export {players,persons,team1,team2,captain1}
