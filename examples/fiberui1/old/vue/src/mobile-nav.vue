<template>
<div>
	<svg version="1.1" @click="show = !show" class="nav-burger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
		<path d="M36,15H12c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0C38,14.1,37.1,15,36,15z"/>
		<path d="M36,39H12c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0C38,38.1,37.1,39,36,39z"/>
		<path d="M36,27H12c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v0C38,26.1,37.1,27,36,27z"/>
	</svg>
	<div class="popup" v-if="show">
		<div class="popupContainer" :class="{ 'popupActive': show }">
			<div class="popupCloseButton"></div>
			<div class="mobileProducts">
				<h4>Products</h4>
				<div class="mobileProductsList">
					<a v-for="category in categories" :href="category.slug">{{ category.name }}</a>
				</div>
			</div>
			<div class="popupSecondaryNav">
				<div class="columns">
					<div class="column">
						<a href="/support">Support</a>
					</div>
					<div class="column"></div>
				</div>
			</div>
			<a class="popupSignIn" href="/login">Login &#8594;</a>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		props: ['categories'],
		data() {
			return {
				show: false
			}
		},
		computed: {
			user() {
				return this.$store.state.customer.authenticated
			},
			isLoggedIn () {
		      return this.$store.getters.isLoggedIn;
		    }
		}
	}
</script>