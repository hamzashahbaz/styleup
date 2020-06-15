<template>
  <nuxt-link v-editable="blok" class="navbar-link" :to="blok.slug">{{ blok.title }}</nuxt-link>
</template>
<script>
export default {
  props: ['blok']
}
</script>
