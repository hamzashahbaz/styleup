<template>
    <hgroup v-editable="blok" class="heading">
        <h1 class="title">{{ blok.title }}</h1>
        <h2 class="subtitle">{{ blok.subtitle }}</h2>
    </hgroup>
</template>

<script>
export default {
  props: ['blok']
}
</script>
<style lang="scss">
.heading {
    margin: 25px 0px;
}
.title {
    font-size: 28px;
    margin: 5px 0px;
}
.subtitle {
    font-size: 16px;
    font-weight: 200;
    margin: 0;
}
</style>
