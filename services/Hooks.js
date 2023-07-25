
/*
* @param {HTMLElement} element
* @param {Object} stateObj
* @returns {Proxy}
*/
export const bindDataToState = (element, stateObj) => {
  const render = (property) => {
    if (element.hasAttribute("value")) {
      element.value = stateObj[property];
    }
  };
  return new Proxy(data, {
    set: (target, property, value) => {
      target[property] = value;
      render(property);
      return true;
    }
  });
};