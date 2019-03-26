# react-use-media-query-hook
React hook for tracking media query match.

Requires `react@^16.8.0 react-dom@^16.8.0` as peer dependencies.

## Installation

npm
```
npm i --save react-use-media-query-hook
```

yarn
```
yarn add react-use-media-query-hook
```

## Usage

[Live demo](https://AntonRublev360.github.io/react-use-media-query/)

Example:
```js
import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

export default () => {
  const isMobile = useMediaQuery('(max-width: 400px)');
  const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
  const isDesktop = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div>
      {isMobile && <MyMobileOnlyComponent />}
      {isLargeDesktop && <MyLargeDesktopComponent />}
    </div>
  );
}
```

## API

```js
const booleanConstant = useMediaQuery(mediaQueyString);
```

Returns media query match result (boolean) and causes update when and only when medau query match result changes.

The only parameter is the media query string to be matched.

## Development and contributions

yarn
```
git clone https://github.com/AntonRublev360/react-use-media-query.git
cd react-use-media-query
yarn install
yarn start
```

npm
```
git clone https://github.com/AntonRublev360/react-use-media-query.git
cd react-use-media-query
npm i
npm start
```

## License

MIT
