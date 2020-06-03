<template>
	<div>
		<section class="newsletter">
			<div class="container has-text-centered">
				<h4 class="title">Newsletter</h4>
				<h2 class="subtitle">Get in on the action - new arrivals, events and special offers</h2>
				<div>
					<transition name="fade">
						<div class="newsletter-notification is-success" v-if="message == true">Thank you for signing up for our newsletters.</div>
					</transition>
					<form class="form" @submit.prevent="join">
						<div class="field is-grouped">
							<div class="control is-expanded">
								<input name="email" v-model.trim="email" @input="$v.email.$touch()" class="input" type="text" placeholder="Email Address" :class="{ 'input-danger': $v.email.$error }" required>
								<label class="input-label" for="email" v-if="!$v.email.required">Required</label>
			                    <label class="input-label" for="email" v-if="!$v.email.email">Invalid email address</label>
			                    <label class="input-label" for="email" v-if="!$v.email.newsletterEmail">You are already subscribed</label>
			                    <label class="input-label" for="email" v-if="!$v.email.$error">Email address</label>
							</div>
							<div class="control">
								<button class="button is-primary" :class="{ 'is-loading': submit }">Join us</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>
<style>
.newsletter-notification {
	margin:10px auto;
    padding: 10px;
    position: relative;
    border-radius:2.5px;
    background:#23d160;
    color: white;
    width: 400px;
}
</style>
<script>
import { required, email } from 'vuelidate/lib/validators';
import { newsletterEmail } from '../../validators';
export default {
	data(){
		return {
			email:'',
			message: false,
			submit: false
		}
	},
	validations: {
		email: {
			required,   
			email,
			newsletterEmail
		}
	},
	methods:{
		join() {
			this.$v.email.$touch();
            this.submit = true;
            if(!this.$v.email.$invalid) {
                axios.post('/newsletter', {email: this.email})
				.then(response => {
					this.message = true;
					this.submit = false;
					this.email = "";
					this.$v.email.$reset();
					var self = this;
					setTimeout(function() {
						self.message = false;
					}, 3000);
				});
            } else {
                this.submit = false;
            }
		}
	}
}
</script>
