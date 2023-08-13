<script lang="ts">
    export let type: string = "primary";
    export let flat: boolean = false;
    export let inverse: boolean = false;
</script>

<button class={type} class:flat class:inverse>
    <slot />
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary {
        background-color: #ff4800;
        color: #fff;
    }
    .secondary {
        background-color: #45c496;
        color: #fff;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        background-color: #fff;
        color: #ff4800;
        border: 2px solid #ff4800;
    }
    .secondary.inverse {
        background-color: #fff;
        color: #45c496;
        border: 2px solid #45c496;
    }
</style>
