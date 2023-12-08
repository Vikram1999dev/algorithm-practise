//Write a function that returns the minimum amount of total waiting time for
//all of the queries.For example, if you are given the queries of durations
//[1,4,5],then the total waiting time if the queries were executed
//would be (0) + (1) + (1 + 4).
//The first query duration 1 would be executed immediately, so its waiting
//time would be 0
//the duration of query is given in the array but to start executing the
//any query it takes 0 seconds
//executing the shortest query first is what will lead to the minimum
//waiting time because all queries after it again will wait the minimum
// amount of time before they are executed
var minimumWaitingTime = function (arr) {
    var i = 0, j = arr.length - 1;
    var sum = 0;
    while (j > 0) {
        sum += j * arr[i];
        i++;
        j--;
    }
    return sum;
};
console.log(minimumWaitingTime([1, 2, 2, 3, 6]));
