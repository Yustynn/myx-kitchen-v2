<template>
    <v-layout
            column
            class="container"
            justify-center
            ripple
    >
        <v-img
                class="image"
                contain
                max-height="150"
                v-bind:src="iconSrc"
        />
        <h3 class="text">{{text}}</h3>
    </v-layout>
</template>

<script>
    export default {
        computed: {
            iconSrc: function() {
                return `/icons/${this.icon}.svg`
            }
        },
        props: {
            icon: {
                type: String,
                validator: (icon) => ['logout', 'options', 'order', 'stock'].includes(icon)
            },
            onclick: Function,
            text: {
                type: String,
                default: 'All praise Corinna'
            }
        }
    }
</script>

<style scoped>
    .container {
        border: 3px solid #1565C0;
        cursor: pointer;
        height: 300px;
        opacity: 0.5;
        width: 240px;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container:hover {
        opacity: 1;
    }

    .text {
        padding-top: 10px;
        text-align: center;
    }
</style>
