<script lang="ts">
    let name: string;
    let age: number;
    let beltColor: string;

    /* T/F
    let fighting: boolean;
    let sneaking: boolean;
    let running: boolean;
    */

    let skills:string[] = [];

    const handleSubmit =() =>{
        console.log(name, age, beltColor, skills);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}/>
    <input type="number" placeholder="age" bind:value={age}/>

    <label>Skills:</label>
    <!-- T/F
    <input type="checkbox" bind:checked={fighting}/>fighting<br/>
    <input type="checkbox" bind:checked={sneaking}/>sneaking<br/>
    <input type="checkbox" bind:checked={running}/>running<br/> -->

    <input type="checkbox" value="fighting" bind:group={skills}/>fighting<br/>
    <input type="checkbox" value="sneaking" bind:group={skills}/>sneaking<br/>
    <input type="checkbox" value="runnig" bind:group={skills}/>running<br/>

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
