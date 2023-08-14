<script lang="ts">
    import type { Poll } from "$lib/types/Poll";
    import PollDetails from "$lib/components/PollDetails.svelte";
    import PollStore from "../../data/PollStore";
    // import { onMount, onDestroy } from "svelte";

    // export let polls: Poll[] = [];

    // const unsub = PollStore.subscribe((data) => {
    //     polls = data;
    // });

    // onMount(() => {
    //     console.log("component mounted");
    // });

    // onDestroy(() => {
    //     unsub();
    //     console.log("component destroyed");
    // });
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <PollDetails {poll} on:vote />
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
