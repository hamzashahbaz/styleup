<template>
<div>
<global-header></global-header>
<section class="signup">
        <div class="title has-text-centered">Create your Jamal Wear account</div>
        <div class="form">
            <form @submit.prevent="signup" autocomplete="off">
                <div class="field is-grouped">
                    <div class="control is-expanded">
                        <input v-model.trim="form.first_name" class="input" :class="{ 'is-danger': $v.form.firstName.$error }" type="text" placeholder="First name" autocomplete="off" required>
                        <label v-if="!$v.form.firstName.required">Required</label>
                        <label v-if="!$v.form.firstName.$error">First Name</label>
                    </div>
                    <div class="control is-expanded">
                        <input name="last_Name" v-model.trim="form.last_name" class="input" :class="{ 'is-danger': $v.form.lastName.$error }" type="text" placeholder="Last name" autocomplete="off" required>
                        <label v-if="!$v.form.lastName.required">Required</label>
                        <label v-if="!$v.form.lastName.$error">Last Name</label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input name="email" v-model.trim="form.email" class="input" :class="{ 'is-danger': $v.form.email.$error }" type="text" placeholder="Email address" autocomplete="off" required>
                        <label v-if="!$v.form.email.required">Required</label>
                        <label v-if="!$v.form.email.email">Invalid email address</label>
                        <label v-if="!$v.form.email.isEmailUnique">Email address already exist</label>
                        <label v-if="!$v.form.email.$error">Email address</label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input name="password" v-model.trim="form.password" class="input" :class="{ 'is-danger': $v.form.password.$error }" type="password" placeholder="Password" autocomplete="off" required>
                        <label v-if="!$v.form.password.required">Required</label>
                        <label v-if="!$v.form.password.minLength">Must be aleast 6 characters</label>
                        <label v-if="!$v.form.password.lowerCase">Must have lowercase letter.</label>
                        <label v-if="!$v.form.password.upperCase">Must have uppercase letter.</label>
                        <label v-if="!$v.form.password.numSpecialChar">Must contain numbers or special characters</label>
                        <label v-if="!$v.form.password.$error">Password</label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" :class="{ 'is-loading': submit }" :disabled="$v.form.$invalid">
                        Sign Up</button>
                    </div>
                </div>
                <p class="term has-text-centered">By signing up, you agree to our terms of use.</p>
                <p class="redirect">Already have an account?<a href="/login"><strong>Log in</strong></a></p>
            </form>
        </div>
    </section>
</div>
</template>
<script>
import { required, alpha, email, minLength } from 'vuelidate/lib/validators';
import lowerCase from '~/validators/lowercase';
import upperCase from '~/validators/uppercase';
import numSpecialChar from '~/validators/numSpecialChar';
import Form from '~/helpers/Form';
export default {
    data() {
        return {
            form: new Form({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            }),
            submit:false,
        }
    },
    validations: {
        form: {
            firstName: {
                required,
                alpha
            },
            lastName: {
                required,
                alpha
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                lowerCase,
                upperCase,
                numSpecialChar
            },
        }
    },
    methods: {
        signup() {
            this.$v.form.$touch();
            this.submit = true;
            if(!this.$v.form.$invalid) {
                this.$store.dispatch('createCustomer', this.form.data())
                .then(response => {
                    let redirect = this.$route.query.redirect;
                    if(redirect) {
                        this.$router.go(redirect);
                    }
                })
            } else {
                this.submit = false;
            }
        }
    }
}
</script>
