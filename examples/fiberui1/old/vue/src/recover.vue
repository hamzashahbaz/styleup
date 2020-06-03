<template>
	<section class="forgot-password">
		<a class="logo is-black" href="/"></a>
		<div v-if="!show">
			<div class="title has-text-centered">Forgot your password?</div>
			<div class="subtitle has-text-centered">Enter your email address to reset your password</div>
			<form class="form" @submit.prevent="recover"  autocomplete="off">
				<div class="field">
					<div class="control">
						<input v-model="form.email" name='email' class="input" type="text" placeholder="Email address" autocomplete="off">
						<label class="help" :class="{ 'is-danger': form.errors.has('email') }" v-if="form.errors.has('email')" v-text="form.errors.get('email')" for="email"></label>
						<label class="help" for="email" v-else>Email address</label>
					</div>
				</div>
				<div class="field has-text-centered">
					<div class="control">
						<button class="button is-black is-fullwidth" :class="{ 'is-loading': submit }" :disabled="form.errors.any()">Email instructions</button>
					</div>
				</div>
			</form>
		</div>
		<div v-else>
			<span class="has-text-centered">Check your index to reset password of your account.</span>
		</div>
	</section>
</template>
<script>
import Form from '~/helpers/Form';
import Errors from '~/helpers/Error';
export default {
	data() {
		return {
			form: new Form({
				email: '',
			}),
			errors: new Errors(),
			show: false,
			submit:false
		}
	},
	watch: {
		'form.email': function(){
        	this.validateEmail(this.form.email);
        }
	},
	methods: {
		validateEmail(email) {
        	axios.post('/password/check-email', {email: email})
        	.then(response => {
                this.$nextTick(function () {
                    this.$delete(this.errors, 'email');
                });
        	}).catch(error => {
                this.$nextTick(function () {
                    this.$set(this.errors, 'email', [error.response.data['email'][0]]);
                });
        	});
        },
		recover() {
			this.submit = true;
			
			this.form.post('/password/email')
			.then(response => {
				this.show = true;
			}).catch(error => {
				this.submit =  false;
			});
		}
	}
}
</script>