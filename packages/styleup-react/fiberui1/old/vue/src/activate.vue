<template>
	<div>
		<global-header></global-header>
		<section>
			<div v-if="user.verified == 0" class="verify has-text-centered">
				<h4 class="title">Confirm Email</h4>
				<notifications></notifications>
				<div class="mail"></div>
				<p class="text">Confirm your email by clicking the verification link we just sent to your inbox.</p>
				<button class="button is-primary" @click="resendEmail(user)">Resend</button>
			</div>
			<div v-if="user.verified == 1" class="verify has-text-centered">
				verifired
			</div>
		</section>
		<global-footer></global-footer>
	</div>	
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: mapGetters(['user']),
	methods: {
			resendEmail(user) {
				axios.post('/verify')
				.then(response => {
					let notification = {
						text: "Please check your email, the intructions has been sent.",
						type: "Alert--success",
						timeout: true
					};
					this.$store.dispatch("ADD_NOTIFICATON", { notification });
				});
			}
		}
}
</script>