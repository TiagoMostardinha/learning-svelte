<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Tabs from "$lib/components/Tabs.svelte";
    import CreatePollForm from "$lib/components/CreatePollForm.svelte";
    import PollList from "$lib/components/PollList.svelte";
    import type { Poll } from "$lib/types/Poll";

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

    const handleVote = (e: CustomEvent) => {
        const { option, id } = e.detail;
        let copiedPolls = [...polls];
        let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
        if (option === "a") {
            upvotedPoll!.votesA++;
        } else if (option === "b") {
            upvotedPoll!.votesB++;
        } else {
            console.log("Invalid option");
        }

        polls = copiedPolls;
    };
</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={handleTabChange} />
    {#if activeItem === "Current Polls"}
        <PollList on:vote={handleVote} />
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
