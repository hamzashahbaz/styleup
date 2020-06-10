<template>
    <div class="sidenav is-hidden-desktop" >
        <img style="cursor: pointer;" @click="open = true" width="28px" height="32px" src="~/assets/images/menu.svg"/>
        <div :class="{ 'sidenav-show': open }" class="sidenav-background"></div>
        <div :class="{ 'sidenav-slide': open }" class="sidenav-content">
            <div class="sidenav-brand">
                <div class="sidenav-head-start">
                    <img width="160px" height="32px" :src="blok.logo">
                </div>
                <div class="sidenav-head-end">
                    <img style="cursor: pointer;" @click="open = false" width="24px" height="24px" src="~/assets/images/close.svg">
                </div>
            </div>
            <div class="sidenav-menu">
                <component class="navbar-item" :key="blok._uid" v-for="blok in blok.navbar_links" :blok="blok" :is="blok.component"></component>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['blok'],
    data() {
        return {
            open: false,
        }
    }
}
</script>
