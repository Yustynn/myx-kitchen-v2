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
                name: 'BtnPrimary',
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