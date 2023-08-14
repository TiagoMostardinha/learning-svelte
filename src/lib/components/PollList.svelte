<script lang="ts">
    import type { Poll } from "$lib/types/Poll";
    import PollDetails from "$lib/components/PollDetails.svelte";
    import PollStore from "../../data/PollStore";
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <PollDetails {poll} />
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
