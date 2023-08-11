<script lang="ts">
    // once - makes sure the event can only be fired once (removes handler)
    // preventDefault - prevents the default behavior of the event (run e.preventDefault() in the handler)
    // self - only fire if the e.target is the element itself (e.g. not from a child element)
    // stopPropagation - prevents the event from bubbling up the DOM tree (run e.stopPropagation() in the handler)
    // passive - tells the browser that the handler will never call preventDefault() (only works with touch and wheel events)
    // capture - fires the handler during the capture phase instead of the bubbling phase



    export let showModal: boolean = false;
    export let isPromo: boolean = false;
</script>

{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self>
        <div class="modal">
            <slot></slot>
            <slot name="title"></slot>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: crimson;
    }
</style>
