fancy-flip
==========

Magazine-style page flipping in pure CSS/JS

*Based on the the Sencha PageFlip demo: http://dev.sencha.com/animator/demos/pageflip/*

>**Disclaimer:** At the moment, this is little more than a personal experiment. It is likely to break in browsers other than Firefox, and will probably fall flat on its face in anything with poor CSS3 support.

How to use it
-------------
1. Include `js/fancy-flip.js` and `css/fancy-flip.css` on your page
2. Create a `<ul>`. Each `<li>` will be one page.
3. Initialize FancyFlip with `FancyFlip.create("MY_LIST_ID");`

Options
-------
An options object can be passed as a second parameter to `FancyFlip.create`
Currently, only `width` and `height` are supported. They must be string values, and you may use `em`, `px`, or `%`

Example
-------
```
<ul id="list">
  <li>Page 1</li>
  <li>Page 2</li>
  <li>Page 3</li>
</ul>

<script type='text/javascript'>
  FancyFlip.create('list', {
    width: '300px',
    height: '200px'
  });
</script>
```
