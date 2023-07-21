export default function createTemplate(templateId, classDef) {
  const template = document.getElementById(templateId);
  const content = template.content.cloneNode(true);
  return classDef.appendChild(content);
}