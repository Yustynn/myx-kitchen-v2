<template>
        <Btn
                color="secondary"
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
                name: 'BtnSecondary'
        }
</script>
