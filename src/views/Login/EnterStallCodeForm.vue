<template>
        <v-form
                ref="form"
                class="form text-xs-center"
        >
            <v-text-field
                    full-width
                    outline
                    solo
                    v-model="password"
                    :append-icon="passwordFieldVisibilityIcon"
                    :type="passwordFieldType"
                    @click:append="togglePasswordVisibility"
            ></v-text-field>

            <v-btn
                    color="primary"
                    @click="login(password)"
            >
                Login
            </v-btn>
        </v-form>
</template>

<script>
    import { mapActions } from 'vuex'

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
            ...mapActions(['login']),
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword
            },
            print: console.log
        }
    }
</script>

<style scoped>
    .form {
    }

</style>
