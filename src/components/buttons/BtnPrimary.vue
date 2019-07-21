<template>
        <Btn
                color="primary"
                @click="$emit('click')"
        >
                <slot />
        </Btn>
</template>

<script>
        import Btn from './_Btn'

        export default {
                components: {
                        Btn
                },
                name: 'BtnPrimary',
        }
</script>

<style scoped>
        .btn {
                font-weight: 300 !important;
        }
</style>