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
    ".console-clear-button": "ctrl+l"
  };

  const registerShortcuts = () => {
    Object.entries(shortcuts).forEach(([action, keys]) =>
      Mousetrap.bindGlobal(keys, () => clickElement(action))
    );
  };

  registerShortcuts();
})(window, document);
