'use strict';

var react = require('react');

function useMediaQuery(mediaQuery) {
  const [matches, setMatches] = react.useState(
    () => window.matchMedia(mediaQuery).matches
  );
  react.useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const listener = e => setMatches(e.matches);
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQuery]);

  return matches;
}

module.exports = useMediaQuery;
