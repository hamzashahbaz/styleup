<template>
<nav class="navbar" role="banner">
    <div class="navbar__brand">
        <nuxt-link class="navbar__item navbar__item--logo" to="/">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <path d="M48.4,7.8c-0.2-0.2-0.4-0.4-0.7-0.4h-7.3c-0.4,0-0.7,0.2-0.9,0.6l-5.6,15.6c-0.2,0.5,0.1,1,0.5,1.2c0.5,0.2,1-0.1,1.2-0.5
                l5.4-15h5.4l-8.8,24.7l-7.4-9.1l5.9-16.2c0.1-0.3,0.1-0.6-0.1-0.8c-0.2-0.2-0.4-0.4-0.7-0.4H4.7c-0.5,0-0.9,0.4-0.9,0.9
                s0.4,0.9,0.9,0.9H34l-9,24.7l-3.6-4.5L27,13.9c0.2-0.5-0.1-1-0.5-1.2c-0.5-0.2-1,0.1-1.2,0.5L18.2,33c-1.5,4.1-4.6,6.6-9.1,7.5
                c-2.1,0.4-4,0.3-5.3,0.2L5,38.6c0,0,0.1,0,0.1,0c1.2,0,2.7,0.1,4.3-1.1c1.7-1.3,3.1-3.7,4.6-7.7l2.2-6.1c0,0,0,0,0,0l3.5-9.8
                c0.1-0.3,0.1-0.6-0.1-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l-11.4,0c0,0,0,0,0,0c-0.3,0-0.7,0.2-0.8,0.5c-0.2,0.3-0.1,0.7,0.1,1l7.6,9.4
                l-2,5.6c-2.9,7.8-5.1,7.7-7.1,7.6c-0.2,0-0.5,0-0.7,0c-0.3,0-0.6,0.2-0.8,0.5L1.5,41c-0.1,0.3-0.2,0.6,0,0.8
                c0.1,0.3,0.4,0.5,0.6,0.5c0.1,0,1.5,0.3,3.5,0.3c1.1,0,2.4-0.1,3.7-0.3c5.1-1,8.8-3.9,10.5-8.6l0.8-2.2l3.9,4.9
                c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0.1,0,0.1,0c0.3-0.1,0.6-0.3,0.7-0.6l3.4-9.3l7.7,9.5c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.1,0,0.2,0
                c0.3-0.1,0.6-0.3,0.7-0.6l9.8-27.5C48.6,8.3,48.6,8,48.4,7.8z M9.3,14.5l8.2,0L15,21.6L9.3,14.5z"/>
            </svg>
        </nuxt-link>
        <div class="navbar__item">
            <div class="navbar__brand--account">
                <svg class="account-open"  width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 18.75">
                    <g id="Group_1791" data-name="Group 1791" transform="translate(-1134.25 -24)">
                        <g id="Ellipse_47" data-name="Ellipse 47" style="stroke: #000;stroke-width: 1.5px;fill: #fff;" transform="translate(1139.5 24)">
                            <circle style="stroke: none;" cx="4.5" cy="4.5" r="4.5"/>
                            <circle style="fill: none;" cx="4.5" cy="4.5" r="3.75"/>
                        </g>
                        <path id="Path_804" data-name="Path 804" style="fill: none;stroke: #000;stroke-width: 1.5px;" d="M5112,123.625h18v-3.094s-2.234-4.031-9-4.031-9,4.031-9,4.031Z" transform="translate(-3977 -81.625)"/>
                    </g>
                </svg>
            </div>
            <a class="navbar__brand--cart" href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            </a>
        </div>
    </div>
    <div class="navbar__menu">
        <div class="navbar__start">
            <nuxt-link to="/collections/womens-pants" class="navbar__item">Women's Pants</nuxt-link>
        </div>
        <div class="navbar__end">
            <div class="navbar__item">
                <svg  width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 18.75">
                    <g id="Group_1791" data-name="Group 1791" transform="translate(-1134.25 -24)">
                        <g id="Ellipse_47" data-name="Ellipse 47" style="stroke: #000;stroke-width: 1.5px;fill: #fff;" transform="translate(1139.5 24)">
                            <circle style="stroke: none;" cx="4.5" cy="4.5" r="4.5"/>
                            <circle style="fill: none;" cx="4.5" cy="4.5" r="3.75"/>
                        </g>
                        <path id="Path_804" data-name="Path 804" style="fill: none;stroke: #000;stroke-width: 1.5px;" d="M5112,123.625h18v-3.094s-2.234-4.031-9-4.031-9,4.031-9,4.031Z" transform="translate(-3977 -81.625)"/>
                    </g>
                </svg>
            </div>
            <a class="navbar__item navbar__item--cart" href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            </a>
        </div>
    </div>
</nav>
</template>