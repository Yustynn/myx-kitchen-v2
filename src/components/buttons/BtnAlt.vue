<template>
        <Btn
                color="white"
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
                color: black;
        }
</style>