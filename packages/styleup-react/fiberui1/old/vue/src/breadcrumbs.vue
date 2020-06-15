<template>
	<div class="breadcrumbs">
		<span v-if="links" v-for="(link, index) in links" v-bind:key="index">
			<slot :name="link"></slot>
			&#8250;
		</span>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: ['links']
	}
</script>
<style lang="scss" scoped>
.breadcrumbs {
    width: 100%;
	margin:20px 0px 40px;
    font-size:10pt;
    a {
		color:#288BDF;
    }
}
.active-page {
    font-weight: 800;
}
@include mobile {
    .breadcrumbs {
        margin-left:20px;
    }
}
</style>
