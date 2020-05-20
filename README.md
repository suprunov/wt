<div align="center">
  <h1>Webpack & ESLint Template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
  
</div>

## Build Setup:

```bash
# Download repository:
git clone https://github.com/suprunov/wt app_name

# Go to the app:
cd app_name

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

- `src/index.html` - main app HTML
- `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
- `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
- `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
- `src/js` - put custom app scripts here
- `src/index.js` - main app file where you include/import all required libs and init app
- `src/components` - folder with custom `.vue` components
- `src/store` - app store for vue
- `static/` - folder with extra static assets that will be copied into output folder

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:

Easy way to move all files.
Default:

```js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, "../src"),
  // Path to Output dir
  dist: path.join(__dirname, "../public"),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: "static/"
};
```

## Customize:

Change any folders:

```js
const PATHS = {
  // src must be src
  src: path.join(__dirname, "../src"),
  // dist to public
  dist: path.join(__dirname, "../dist"),
  // assets to static
  assets: "assets/"
};
```

## Import Another libs:

1. Install libs
2. Import libs in `./index.js`

```js
// React example
import React from "react";
// Bootstrap example
import Bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
```

## Import only SASS or CSS libs:

1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules

```scss
// Sass librarys example:
@import "../../node_modules/spinners/stylesheets/spinners";
// CSS librarys example:
@import "../../node_modules/flickity/dist/flickity.css";
```

## Import js files:

1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file

```js
// another js file for example
import "./common.js";
```

## HTML Dir Folder:

#### Default:

- .html dir: `./src`
- Configurations: in `./build/webpack.base.conf.js`

```js
const PAGES_DIR = PATHS.src;
```

**Usage:**
All files must be created in the `./src` folder.
Example:

```bash
./src/index.html
./src/about.html
```

#### Change HTML Default Dir Folder:

Example for `./src/pages`:

1. Create folder for all html files in `./src`. Be like: `./src/pages`
2. Change `./build/webpack.base.conf.js` const PAGES_DIR:

```js
// Old path
// const PAGES_DIR = PATHS.src

// Your new path
const PAGES_DIR = `${PATHS.src}/pages`;
```

3. Rerun webpack dev server

**Usage:**
All files must be created in the `./src/pages` folder.
Example:

```bash
./src/pages/index.html
./src/pages/about.html
```

## Create Another HTML Files:

#### Default:

Automatic creation any html pages:

1. Create another html file in `./src` (main folder)
2. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)
   See more - [commit](https://github.com/vedees/webpack-template/commit/249e3ae3b4973a7300f271045178f9f5f431bb89)

#### Second method:

Manual (not Automaticlly) creation any html pages (Don't forget to RERUN dev server and COMMENT lines above)

1. Create another html file in `./src` (main folder)
2. Go to `./build/webpack.base.conf.js`
3. Comment lines above (create automaticlly html pages)
4. Create new page in html:

```js
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: './index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/another.html`,
      filename: './another.html',
      inject: true
    }),
```

5. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

#### Third method: (BEST)

Сombine the first method and the second.
Example:

```js
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.html`,
      filename: './about/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/portfolio.html`,
      filename: './about/portfolio.html',
      inject: true
    }),
```

## Add Fonts:

Сhoose one of the ways:

1. Handle menthod,
2. Use mixin;

### Handle:

Add @font-face in `/assets/scss/utils/fonts.scss`:

```scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url("/assets/fonts/Helvetica/Base/Helvetica-Base.eot"); /* IE9 Compat Modes */
  src: url("/assets/fonts/Helvetica/Base/Helvetica-Base.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/assets/fonts/Helvetica/Base/Helvetica-Base.woff") format("woff"),
    /* Pretty Modern Browsers */
      url("/assets/fonts/Helvetica/Base/Helvetica-Base.ttf") format("truetype"),
    /* Safari, Android, iOS */
      url("/assets/fonts/Helvetica/Base/Helvetica-Base.svg") format("svg"); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

```scss
$mySecondFont: "Helvetica-Base", Arial, sans-serif;
```

### Or with mixin:

By default template support only modern format fonts: .woff, .woffs;

If ypu need svg or more formaths use another mixin in `src/assets/scss/utils/mixin.scss`

**Usage:**

1. Put your font to `src/assets/fonts/FOLDERNAME/FONTNAME`.
   FOLLOW: Files Required:
   Example: `.woff, .woffs` formats;
2. Go to `fonts.scss`;
3. Use mixin
   Example: `@include font-face("OpenSans", "../fonts/OpenSans/opensans");`,
   Example 2: `@include font-face("OpenSans", "../fonts/OpenSans/opensansItalic", 400, italic);`.

## License

[MIT](./LICENSE)
