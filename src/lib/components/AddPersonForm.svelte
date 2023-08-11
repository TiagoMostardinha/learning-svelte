<script lang="ts">
    import type { Person } from "$lib/types/Person";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let name: string;
    let age: number;
    let beltColor: string;
    let skills: string[] = [];

    const handleSubmit = () => {
        const person: Person = {
            name:name,
            age,
            beltColor,
            skills,
            id: Math.random()*100
        };

        dispatch("addPerson", person);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <input type="number" placeholder="age" bind:value={age} />

    <label>Skills:</label>
    <input type="checkbox" value="fighting" bind:group={skills} />fighting<br />
    <input type="checkbox" value="sneaking" bind:group={skills} />sneaking<br />
    <input type="checkbox" value="running" bind:group={skills} />running<br />

    <select bind:value={beltColor}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>
    </select>

    <button type="submit">Add Person</button>
</form>

<style>
</style>
