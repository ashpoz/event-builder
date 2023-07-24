export async function loadCSS(element, filePath) {
  const request = await fetch(filePath);
  const css = await request.text();
  element.textContent = css;
}

export async function loadHTML(element, filePath) {
  const request = await fetch(filePath);
  const html = await request.text();
  element.textContent = css;
}