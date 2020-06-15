<template>
	<div class="user-dropdown">
		<svg version="1.1" class="webicon" @click="show = !show" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
			<path d="M41.2,31.8L41.2,31.8c-10-5-23.6-5-32.7,0.2l-3.3,1.4l5.5,13.2h28.7l5.5-13.2L41.2,31.8z M36.7,42.6H13.2l-3-7.1
				c8-4.5,20.4-4.5,29.2,0.1L36.7,42.6z"/>
			<path d="M24.9,25.4c6.1,0,11-4.9,11-11s-4.9-11-11-11s-11,4.9-11,11S18.8,25.4,24.9,25.4z M24.9,7.4c3.9,0,7,3.1,7,7s-3.1,7-7,7
				s-7-3.1-7-7S21,7.4,24.9,7.4z"/>
		</svg>
		<transition name="fade">
			<div class='user-dropdown-content' v-if="show">
				<div class="user-dropdown-anchor"></div>
				<div class="user-dropdown-body">
					<div class="user-dropdown-title">{{ user.first_name }} {{ user.last_name }}</div>
					<ul class="user-dropdown-list">
						<li><a v-if="user.verified == 0" href="/verify">Verify your account</a></li>
						<!--<li v-if="user.roles[0].name == 'admin'"><a href="/admin">Admin Panel</a></li>-->
						<li><a href="/account/orders">Orders</a></li>
						<li><a href="/account/profile">Account</a></li>
						<li><a @click="logout">Logout</a></li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: mapGetters({
		user: 'user'
    }),
	data() {
		return {
			show: false
		}
	},
    methods: {
        logout() {
        	this.$store.dispatch('LOGOUT_USER').then(response => {
        		this.$router.go('/');
        	});
        }
    }
}
</script>