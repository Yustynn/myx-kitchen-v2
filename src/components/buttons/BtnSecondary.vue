<template>
        <Btn
                color="secondary"
                v-bind:onclick="onclick"
        >
                <slot style="cursor: pointer; -webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"></slot>
        </Btn>
</template>

<script>
        import Btn from './_Btn'

        export default {
                components: {
                        Btn
                },
                props: {
                        onclick: Function
                }
        }
</script>
