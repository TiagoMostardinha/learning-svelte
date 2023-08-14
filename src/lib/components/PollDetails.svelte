<script lang="ts">
    import type { Poll } from "$lib/types/Poll";
    import PollStore from "../../data/PollStore";
    import Card from "./Card.svelte";
    import Button from "$lib/components/Button.svelte";

    export let poll: Poll;

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((poll.votesA / totalVotes) * 100);
    $: percentB = Math.floor((poll.votesB / totalVotes) * 100);

    const handleVote = (option: string, id: number) => {
        PollStore.update((currentPolls) => {
            let copiedPolls = [...currentPolls];
            let poll = copiedPolls.find((poll) => poll.id === id);

            if (option === "a") {
                poll!.votesA++;
            } else if (option === "b") {
                poll!.votesB++;
            }

            return copiedPolls;
        });
    };

    const handleDelte = (id: number) => {
        PollStore.update((currentPolls) => {
            return currentPolls.filter((poll) => poll.id !== id);
        });
    };
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%" />
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%" />
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={() => handleDelte(poll.id)}>Delete</Button>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a {
        background: rgba(217, 27, 66, 0.2);
        border-left: 4px solid #d91b42;
    }
    .percent-b {
        background: rgba(69, 196, 150, 0.2);
        border-left: 4px solid #45c496;
    }
    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>
