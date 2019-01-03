# Local Webfont

Downloads webfont stylesheets and adds font-display properties.

## Usage

```
npx local-webfont source target [<font-display>]
```

The third argument, `font-display` is optional and defaults to `fallback`. Any valid `font-display` value can be passed, i.e. `auto`, `block`, `swap`, `fallback`, or `optional`.

### Example

```bash
npx local-webfont https://fonts.googleapis.com/css?family=Merriweather /tmp/merriweather.css
```

#### Result

Original webfont CSS:

```css
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-ciZMdeX3rsHo.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
```

Downloaded CSS:

```css
@font-face {
  font-display: fallback;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-ciZMdeX3rsHo.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
```
