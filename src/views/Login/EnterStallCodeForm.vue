<template>
    <v-form
            ref="form"
            class="form"
    >
        <v-layout column center align-center>
            <v-flex xs12 md8>
                <v-text-field
                        full-width
                        outline
                        solo
                        v-model="password"
                        :append-icon="passwordFieldVisibilityIcon"
                        :type="passwordFieldType"
                        @click:append="togglePasswordVisibility"
                ></v-text-field>
            </v-flex>

                <v-btn
                        color="primary"
                >
                    Login
                </v-btn>
        </v-layout>
    </v-form>
</template>

<script>
    export default {
        computed: {
            passwordFieldVisibilityIcon: function() {
                return this.showPassword ? 'visibility' : 'visibility_off'
            },
            passwordFieldType: function() {
                return this.showPassword ? 'text' : 'password'
            }
        },
        data: function() {
            return {
                password: '',
                showPassword: false,
            }
        },
        methods: {
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword
            }
        }
    }
</script>

<style scoped>
    .form {
        width: 100%;
    }

</style>
