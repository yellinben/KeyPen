'use strict';

import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

(function(window, document) {
  const simulateClick = elem =>
    elem.dispatchEvent((
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    })));

  const clickElement = selector => {
    const elem = document.querySelector(selector);
    if (!elem) throw new Error(`Could not find matching element: ${selector}`);
    elem.click();
  };

  const shortcuts = {
    ".console-clear-button": "ctrl+l",
    ".console-toggle-button": null,
    ".heart-button": null,
    "#left-layout": null,
    "#right-layout": null,
    "#top-layout": null,
    "#pen-link": null,
    "#details-link": null,
    "#full-link": null,
    "#debug-link": null,
    "#tidy-html": null,
    "#tidy-css": null,
    "#tidy-js": null
  };

  const registerShortcuts = () => {
    Object.entries(shortcuts).forEach(([action, keys]) => {
      if (keys && keys.length)
        Mousetrap.bindGlobal(keys, () => clickElement(action));
    });
  };

  registerShortcuts();
})(window, document);
