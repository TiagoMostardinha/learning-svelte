<script lang="ts">
    import type { Poll } from "$lib/types/Poll";
    import PollDetails from "$lib/components/PollDetails.svelte";
    import PollStore from "../../data/PollStore";
    export let polls: Poll[] = [];

    PollStore.subscribe((data) => {
        polls = data;
    });
</script>

<div class="poll-list">
    {#each polls as poll (poll.id)}
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
