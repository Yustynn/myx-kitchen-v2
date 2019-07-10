<template>
    <router-link :to="{ name: to }">
        <v-layout
                column
                class="container"
                justify-center
        >
            <v-img
                    class="image"
                    contain
                    max-height="150"
                    v-bind:src="iconSrc"
            />
            <h3 class="text">{{text}}</h3>
        </v-layout>
    </router-link>
</template>

<script>
    import { routes } from '@/router'
    export default {
        computed: {
            iconSrc: function() {
                return `/icons/${this.icon}.svg`
            }
        },
        props: {
            icon: {
                type: String,
                validator: (icon) => ['logout', 'options', 'orders', 'stock'].includes(icon)
            },
            to: {
                type: String,
                validator: (title) => routes.map((r) => r.title).includes(title)
            },
            text: {
                type: String,
                default: 'All praise Corinna'
            }
        }
    }
</script>

<style scoped>
    h3 {
        color: black;
        font-size: 36px;
        font-weight: 300;
        text-decoration: none !important;
        text-decoration-style: double;
    }
    
    h3:visited {
        text-decoration: none;
    }

    .container {
        border: 3px solid #1565C0;
        cursor: pointer;
        height: 280px;
        opacity: 0.4;
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
