<script lang="ts">
    import type { Person } from "$lib/types/Person";
    import Modal from "$lib/components/Modal.svelte";

    let people: Person[] = [
        { name: "yoshi", beltColor: "black", age: 25, id: 1 },
        { name: "mario", beltColor: "red", age: 35, id: 2 },
        { name: "luigi", beltColor: "green", age: 45, id: 3 },
    ];

    let showModal: boolean = false;

    const handleClick = (id: number) => {
        people = people.filter((person) => person.id !== id);
    };

    const toggleModal = () => {
        showModal = !showModal;
    };
</script>

<Modal {showModal} on:click={toggleModal}>
    <!-- <h3>Add a New Person</h3> -->
    <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="belt color" />
        <button type="submit">Add Person</button>
    </form>
    <div slot="title">
        <h3>Add a New Person</h3>
    </div>
</Modal>

<main>
    <button on:click|once={toggleModal}>Open Modal</button>
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>

            {#if person.beltColor === "black"}
                <p><strong>MASTER NINJA</strong></p>
            {/if}

            <p>{person.age} years old, {person.beltColor} belt.</p>
            <button on:click={() => handleClick(person.id)}>delete</button>
        </div>
    {:else}
        <p>There are no people to show.</p>
    {/each}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
