<script lang="ts">
    let firstName: string = "Jimi";
    let lastName: string = "Hendrix";
    let beltColor: string = "black";

    // Reactive value
    $: fullName = `${firstName} ${lastName}`;

    // Reactive statement
    $: {
        console.log(beltColor);
        console.log(fullName);
    }

    const handleClick = (e: Event) => {
        beltColor = "orange";
    };

    const handleInput = (e: Event) => {
        beltColor = (e.target as HTMLInputElement).value;
    };



</script>

<main>
    <p> {fullName} - {beltColor} belt</p>
    <input type="text" bind:value={firstName} />
    <input type="text" bind:value={lastName} />
    <input type="text" bind:value={beltColor} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff6600;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
