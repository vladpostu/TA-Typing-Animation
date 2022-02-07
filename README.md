

# TA - Typing Animation

Typing Animation is a JavaScript and CSS library that allows you to create typing animation easily using only a few lines of code.

## Features

- Fast and light
- Need a few lines of code to write complex code
- The only library that can do this animation

## Installation 

You must clone the repository inside your projectTA/

```bash
git clone https://github.com/vladpostu/TA-Typing-Animation.git 
```
then include the CSS file **TA.css** in the <head> tag

```html
<html
    ...
    <head>
        ... 
        <link rel='stylesheet' href='./TA/TA.CSS'>
    </head>
></html>
```
and the Javascript file **TA.js** and the bottom of the <body> tag but before the main js file

```html
<html>
    <body>
        ...
        <script src='./TA/TA.js'></script>
        <script src='./js.js'></script> // main Javascript file
    </body>
</html>
```

## Getting started

Initially a **TA** object must be initialized. In the parameters must be declared the HTML element to modify, the minium delay and max delay beetween the letters typed.

```js
let ta = new TA({
    htmlEl: "#test",
    minDelay: 50,
    maxDelay: 150,
});
```

The library has two main methods

- **typingForward(finalForm, i)** (finalFrom: [String] is the final text to reach, i: [number] must be 0 at the first call of the function)
    Is the typing forward animation. Insert the final word in the parameters.