<template>
    <nav class="container">
        <v-layout class="text-xs-center" row full-height justify-center>
            <v-dialog fullscreen v-model="showLogoutModal">
                <template v-slot:activator="{ on }">
                    <BtnIcon icon="logout" @click="showLogoutModal = true" v-show="!noLogout" />
                </template>
                <v-layout column style="height: 100%; background-color: white;" justify-center>
                    <v-card flat class="text-xs-center py-5">
                        <v-layout column justify-center align-center>
                                <h1 class="pb-2">Logout</h1>
                                <v-flex class="modal-content pa-5 color-border-primary">
                                    <p class="pb-2">Are you sure you want to log out?</p>
                                    <v-layout row align-center justify-center>
                                        <router-link :to="{ name: 'login' }">
                                            <BtnPrimary>Yes</BtnPrimary>
                                        </router-link>
                                        <BtnSecondary @click="showLogoutModal = false">No</BtnSecondary>
                                    </v-layout>
                                </v-flex>
                        </v-layout>
                    </v-card>
                </v-layout>
            </v-dialog>

            <h1 class="text-xs-center">{{ text }}</h1>

            <BtnIcon icon="options" to="options" v-show="!noOptions" />
        </v-layout>
    </nav>
</template>

<script>
    import {
        BtnIcon,
        BtnPrimary,
        BtnSecondary
    } from '@/components'

    export default {
        components: {
            BtnIcon,
            BtnPrimary,
            BtnSecondary
        },
        data() {
            return {
                showLogoutModal: false,
            }
        },
        name: 'Header',
        props: {
            noLogout: {
                type: Boolean,
                default: false
            },
            noOptions: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    h1 {
        flex: 1; /* but why tho? */
        line-height: 50px;
        text-align: center;
    }

    .container {
        width: 100%;
        margin: 0;
    }

    .modal-content {
        border-style: solid;
        border-width: 3px;
        max-width: 550px;
        min-width: 450px;
    }
</style>
