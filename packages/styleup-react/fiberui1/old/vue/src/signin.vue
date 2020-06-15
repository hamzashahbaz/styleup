<template>
    <section class="login">
        <div class="title has-text-centered">Login to your Jamal Wear account</div>
        <form class="form" @submit.prevent="signin">
            <div class="field">
                <div class="control">
                    <input name="email" class="input" id="email" type="text" spellcheck="false" v-model="form.email" placeholder="Email address" autocomplete="off" required>
                    <label class="input-label">Email address</label>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input name="password" class="input" type="password"  id="password" v-model="form.password" placeholder="Password" autocomplete="off" required>
                    <label class="input-label">Password</label>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-primary is-fullwidth" :class="{ 'is-loading': submit }">Log In</button>
                </div>
            </div>
            <p class="forgot has-text-centered"><a href="/password/email">Forgot password?</a></p>
        </form>
        <p class="redirect">Don't have an account?<a href="/signup">Sign up</a></p>
    </section>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import Form from '~/helpers/Form';
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            submit: false,
        }
    },
    validations: {
        form: {
            email: {
                required,
            },
            password: {
                required
            } 
        }
    },
	methods: {
		signin() {
            this.$v.form.$touch();
            this.submit = true;
            if(!this.$v.form.$invalid) {
                this.$store.dispatch('createCustomerAccessToken')
                .then((res) => {
                    let redirect = this.$route.query.redirect;
                    if(redirect) {
                        this.$router.go(redirect);
                    }
                }).catch((error) => {
                    this.submit = false;
                });
            } else {
                this.submit = false;
            }
        }
    }
}
</script>