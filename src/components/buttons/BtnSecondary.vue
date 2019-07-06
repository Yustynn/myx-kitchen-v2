<template>
        <Btn
                color="secondary"
                v-bind:onclick="onclick"
        >
                <slot></slot>
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
