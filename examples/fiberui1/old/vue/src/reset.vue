<template>
	<div class="reset">
		<a class="logo is-black" href="/"></a>
        <form v-if="!show" class="form" @submit.prevent="reset">
                <legend>Reset my password</legend>
                <div class="field">
                    <div class="control">
                        <input name='email' v-model="form.email" class="input" type="hidden" required>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input name='token' v-model="form.token" class="input" type="hidden" required>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input name='password' v-model="form.password" id="password" class="input" type="password" placeholder="New Password" autocomplete="off" required>
                        <label class="help" :class="{ 'is-danger': errors.has('password') }" v-if="errors.has('password')" v-text="errors.first('password')" for="password"></label>
                        <label for="password" v-else>New Password</label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input name='password_confirmation' v-model="form.password_confirmation" class="input" type="password" placeholder="Confirm Password" autocomplete="off" required>
                        <label class="help" :class="{ 'is-danger': errors.has('password_confirmation') }" v-if="errors.has('password_confirmation')" v-text="errors.first('password_confirmation')" for="password_confirmation"></label>
                        <label for="password_confirmation" v-else>Confirm New Password</label>
                    </div>
                </div>
                <button class="button is-primary" type="submit" :class="{ 'is-loading': submit }" :disabled="errors.any()">Reset</button>
		</form>
        <div v-else>
            <span class="has-text-centered">Your Password has been reset. Login into your account using new password.</span>
        </div>
	</div>
</template>
<script>
import Form from '~/helpers/Form';
import Errors from '~/helpers/Error';
export default {
	data() {
		return {
	        form: new Form({
                email: this.$route.query.email,
                token: this.$route.query.token,
	            password:'',
	            password_confirmation:''
	        }),
            errors: new Errors(),
            show: false,
	        submit: false
    	}
    },
    watch: {
        'form.password': function(){
            this.validatePassword(this.form.password);
        }      
    },
    methods: {
		validatePassword(password) {
            var lowerCase = /[a-z]/g,
                upperCase = /[A-Z]/g,
                numberSpecial = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            if(this.form.password === "") {
                this.errors.set('password', 'Required');
            } else if (this.form.password.length < 6) {
                this.errors.set('password', 'Must be atleast 6 characters');
            } else if(!this.form.password.match(lowerCase)) {
                this.errors.set('password', 'Must have lowercase letter.');
            } else if(!this.form.password.match(upperCase)) {
                this.errors.set('password', 'Must have uppercase letter.');
            } else if(!this.form.password.match(numberSpecial)) {
                this.errors.set('password', 'Must contain numbers or special characters');
            } else {
                this.errors.clear('password');
            }
		},
        reset: function() {
            this.submit = true
            this.form.post('/password/reset')
            .then(response => {
                this.show = true;
                this.errors.clear();
                this.form.reset();
            }).catch(error => {
                this.errors.record(error);
                this.submit = false;
            });
        }
    }
}
</script>