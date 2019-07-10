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
                    :to="{ name: 'options' }"
            >
                Login
            </v-btn>
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
    }

</style>
