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

const subs = betterSubstring(sentence, 3, true);

console.log(subs); // "Hello"
```

Instead of going forward until the word is finished, with `false` we go back.
```js
import betterSubstring from "better-substring";

const sentence = "Hello World :D";

const subs = betterSubstring(sentence, 8, false);

console.log(subs); // "Hello"
```


## API
### `substring(sentence: string, end: number, forward = true)`
```js
import betterSubstring from "better-substring";

const sentence = "Hello World :D";

const subs = betterSubstring(sentence, 3, true);

console.log(subs); // Hello
```

Returns a substring without splitting words.

- `sentence: string` the sentence/string to work with. 
- `end: number` index where you want the split to occur. 
- `forward = true` in case the split will occur mid-word, do you want to keep going forward (true) or go back (false)?. 

## License

MIT © [PandaSekh](https://github.com/PandaSekh)
