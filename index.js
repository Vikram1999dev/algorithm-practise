// We are given two inputs, the competitions array and the results array. We need to write
// a function that returns the winner of the tournament, or more specifically, the name of
// the team that has the most number of points. The competitions array is an array of pairs,
// representing all of the competitions in the tournament. Inside of these pairs, we
// have two strings: the first one is the name of the home team and the second one is the
// name of the away team. The results array represents the winner of each of these
// competitions. Inside the results array, a 1 means that the home team won and a 0
// means the away team won. The results array is the same length as the competitions
// array, and the indices in the results array correspond with the indices in the
// competitions array.
var tournamentWinner = function (comp, results) {
    var counts = [];
    var max = 0;
    var x;
    for (var i = 0; i < comp.length; i++) {
        counts[comp[i][0]] = 0;
        counts[comp[i][1]] = 0;
    }
    for (var i = 0; i < results.length; i++) {
        if (results[i] === 1) {
            x = counts[comp[i][0]];
            counts[comp[i][0]] = x + 1;
        }
        else {
            x = counts[comp[i][1]];
            counts[comp[i][1]] = x + 1;
        }
        if (max < x) {
            max = x + 1;
        }
    }
    console.log(results);
    for (var i = 0; i < results.length; i++) {
        if (counts[comp[i][0]] === max) {
            return comp[i][0];
        }
        else {
            return comp[i][1];
        }
    }
};
var competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
];
var results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));
