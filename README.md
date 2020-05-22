# [Styleup](https://styleup.dev)

Styleup is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and [Grid] for faster and easier UI development.

[![npm](https://img.shields.io/npm/v/styleup.svg)][npm-link]
[![npm](https://img.shields.io/npm/dm/styleup.svg)][npm-link]
[![](https://data.jsdelivr.com/v1/package/npm/styleup/badge)](https://www.jsdelivr.com/package/npm/styleup)
[![Join the chat at https://gitter.im/jgthms/styleup](https://badges.gitter.im/jgthms/styleup.svg)](https://gitter.im/hamzashahbaz/styleup)
[![Build Status](https://travis-ci.org/hamzashahbaz/styleup.svg?branch=master)](https://travis-ci.org/hamzashahbaz/styleup)

## Quick install

Styleup is constantly in development! Try it out now:

### NPM

```sh
npm install styleup
```

**or**

### Yarn

```sh
yarn add styleup
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
import 'styleup/css/styleup.css'
```

### CDN

[https://www.jsdelivr.com/package/npm/styleup](https://www.jsdelivr.com/package/npm/styleup)

Feel free to raise an issue or submit a pull request.

## CSS only

Styleup is a **CSS** framework. As such, the sole output is a single CSS file: [styleup.css](https://github.com/hamzashahabz/styleup/blob/master/css/styleup.css)

You can either use that file, "out of the box", or download the Sass source files to customize the [variables](https://styleup.dev/documentation/overview/variables/).

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Styleup can be considered "environment agnostic": it's just the style layer on top of the logic.

## Browser Support

Styleup uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/#feat=flexbox), Styleup is compatible with **recent** versions of:

-   Chrome
-   Edge
-   Firefox
-   Opera
-   Safari

Internet Explorer (10+) is only partially supported.

## Documentation

The documentation resides in the [docs](docs) directory, and is built with the [Nextjs Static Gen](https://nextjs.org/).

Browse the [online documentation here.](https://styleup.dev/documentation/overview/start/)

## Copyright and license

Code copyright 2020 Hamza Shahbaz. Code released under [the MIT license](https://github.com/hamzashahbaz/styleup/blob/master/LICENSE).

[npm-link]: https://www.npmjs.com/package/styleup
[awesome-link]: https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
