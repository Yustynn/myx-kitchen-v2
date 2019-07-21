<template>
    <nav>
        <v-layout row justify-space-between>
                        <v-dialog v-model="showLogoutModal" width="700">
                <template v-slot:activator="{ on }">
                    <BtnIcon icon="logout" @click="showLogoutModal = true" v-show="!noLogout" />
                </template>
                <div style="background-color: #fff;" class="text-xs-center py-5">
                    <h1 class="pb-2">Logout</h1>
                    <p class="pb-2">Are you sure you want to log out?</p>
                    <v-layout row align-center justify-center>
                        <router-link :to="{ name: 'login' }">
                            <BtnPrimary>Yes</BtnPrimary>
                        </router-link>
                        <BtnSecondary @click="showLogoutModal = false">No</BtnSecondary>
                    </v-layout>
                </div>
            </v-dialog>

            <h1>{{ text }}</h1>

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
                showLogoutModal: false
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
        line-height: 50px;
    }
</style>

<!--<v-btn v-on="on">clickety clackety click clack cluck you sun of a duck</v-btn>-->
