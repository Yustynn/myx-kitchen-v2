<template>
        <Btn
                color="primary"
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

<style scoped>
        .btn {
                font-weight: 300 !important;
        }
</style>