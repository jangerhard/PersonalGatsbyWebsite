# Personal Website using Gatsby
This project is exploring how to use Gatsby for displaying static web pages, and also giving me a playground for exploring React and embedded applications.

## Enable caching
cp .cache/default-html.js src/html.js

Add: 
```
// outside the HTML component
const now = new Date();
const buster = now.getTime();

// inside its render() method
<script src={`/bundle.js?t=${buster}`}/>
```