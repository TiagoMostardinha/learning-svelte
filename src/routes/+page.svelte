<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Tabs from "$lib/components/Tabs.svelte";
    import CreatePollForm from "$lib/components/CreatePollForm.svelte";
    import PollList from "$lib/components/PollList.svelte";
    import type { Poll } from "$lib/types/Poll";

    let polls: Poll[] = [
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
    ];

    let items: string[] = ["Current Polls", "Add new Poll"];
    let activeItem: string = "Current Polls";

    const handleTabChange = (e: CustomEvent) => {
        activeItem = e.detail;
    };

    const handleAddPoll = (e: CustomEvent) => {
        polls = [...polls, e.detail];
        activeItem = "Current Polls";
        console.log(polls);
    };
</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={handleTabChange} />
    {#if activeItem === "Current Polls"}
        <PollList {polls} />
    {:else if activeItem === "Add new Poll"}
        <CreatePollForm on:addPoll={handleAddPoll} />
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
