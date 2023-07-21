export default function defineCustomElements(customElsObj) {
  Object.keys(customElsObj).forEach((key) => {
    customElements.define(key, customElsObj[key]);
  });
}