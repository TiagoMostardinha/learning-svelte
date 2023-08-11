<script lang="ts">
    import type { Person } from "$lib/types/Person";
    import Modal from "$lib/components/Modal.svelte";
    import AddPersonForm from "$lib/components/AddPersonForm.svelte";

    let people: Person[] = [
        { name: "yoshi", beltColor: "black", age: 25, skills: [], id: 1 },
        { name: "mario", beltColor: "red", age: 35, skills: [], id: 2 },
        { name: "luigi", beltColor: "green", age: 45, skills: [], id: 3 },
    ];

    let showModal: boolean = false;

    const handleClick = (id: number) => {
        people = people.filter((person) => person.id !== id);
    };

    const toggleModal = () => {
        showModal = !showModal;
    };

    const handleAddPerson = (e: Event) => {
        const person: Person = (e as CustomEvent).detail;
        people = [person, ...people];
        showModal = false;
    };
</script>

<Modal {showModal} on:click={toggleModal}>
    <AddPersonForm on:addPerson={handleAddPerson} />
</Modal>

<main>
    <button on:click={toggleModal}>Open Modal</button>
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>

            {#if person.beltColor === "black"}
                <p><strong>MASTER NINJA</strong></p>
            {/if}

            <p>{person.age} years old, {person.beltColor} belt.</p>

            {#if person.skills.length === 0}
                <p>No skills yet.</p>
            {:else}
                <p>Skills:</p>
                {#each person.skills as skill}
                    <p>{skill}</p>
                {/each}
            {/if}

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
