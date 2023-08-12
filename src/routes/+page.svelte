<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Tabs from "$lib/components/Tabs.svelte";

    let items: string[] = ["Current Polls", "Add new Poll"];
    let activeItem: string = "Current Polls";

    const handleTabChange = (e: CustomEvent) => {
        activeItem = e.detail;
    };
</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={handleTabChange} />
    {#if activeItem === "Current Polls"}
        <p>Polls list component goes here</p>
    {:else if activeItem === "Add new Poll"}
        <p>New poll form goes here</p>
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
