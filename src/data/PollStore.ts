import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: "What is your favorite color?",
        answerA: "Red",
        answerB: "Blue",
        votesA: 2,
        votesB: 9,
    },
    {
        id: 2,
        question: "What do you like more?",
        answerA: "Apples",
        answerB: "Oranges",
        votesA: 3,
        votesB: 5,
    },
]);

export default PollStore;