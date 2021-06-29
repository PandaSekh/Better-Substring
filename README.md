<h1 align="center">
  Better Substring
</h1>
<p align="center">
  <img src="https://github.com/PandaSekh/better-substring/actions/workflows/test.yml/badge.svg" alt="Build Status">
  <img src="https://img.badgesize.io/https:/unpkg.com/better-substring@latest/dist/index.js?compression=brotli&label=size" alt="Size">
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-none-brightgreene">
</p>
<p align="center">✂ Improved substring method to avoid splitting mid word</p>

better-substring is a *lightweight* (**~150 bytes**) tool that enhances the default substring method. No more words split in half!

* * *

## Install

npm: 
```bash
npm install --save better-substring
```

Yarn:
```bash
yarn add better-substring
```

## Examples
Basic example, will try to split at index 3.
```js
import betterSubstring from "better-substring";

const sentence = "Hello World :D";

const subs = betterSubstring(sentence, 0, false, 3, true);

console.log(subs); // "Hello"
```

Instead of going forward until the word is finished, with `false` we go back.
```js
import betterSubstring from "better-substring";

const sentence = "Hello World :D";

const subs = betterSubstring(sentence, 0, false, 8, false);

console.log(subs); // "Hello"
```

We can also define a starting point
```js
import betterSubstring from "better-substring";

const sentence = "Hello World :D";

const subs = betterSubstring(sentence, 6, true, 8, true);

console.log(subs); // "World"
```

## API
### `substring(sentence: string, init: number, initForward = false, end?: number, endForward = true) => string`

Returns a substring without splitting words.

- `sentence: string` the sentence/string to work with. 
- `init: string` index where to start the substring. 0 to start from the beginning. 
- `initForward: string` (optional) in case the split will occur mid-word, shall we go forward (true) or back (false)?. 
- `end: number` (optional) index where you want the split to occur. 
- `endForward = true` (optional) in case the split will occur mid-word, shall we go forward (true) or back (false)?. 

## License

MIT © [PandaSekh](https://github.com/PandaSekh)
