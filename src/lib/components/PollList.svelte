<script lang="ts">
    import { fade, slide, scale } from "svelte/transition";
    import {flip} from "svelte/animate";
    import type { Poll } from "$lib/types/Poll";
    import PollDetails from "$lib/components/PollDetails.svelte";
    import PollStore from "../../data/PollStore";
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
