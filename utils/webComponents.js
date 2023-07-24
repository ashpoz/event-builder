export function createTemplate(templateId, classDef) {
  const template = document.getElementById(templateId);
  const content = template.content.cloneNode(true);
  return classDef.appendChild(content);
}

export function defineCustomElements(customElsObj) {
  Object.keys(customElsObj).forEach((key) => {
    customElements.define(key, customElsObj[key]);
  });
}