(() => {
  const component = document.querySelector("#root > *");
  if (!component) {
    console.log("No Storybook component found");
    return;
  }

  const componentName = component.tagName || "UnnamedComponent";
  const structure = component.outerHTML;

  console.log("🧱 Extracted Component:");
  console.log("Name:", componentName);
  console.log("Structure:", structure);

  // You could also send this to a local Node server or plugin stub:
  // fetch("http://localhost:3000/api/component", { method: "POST", ... });
})();
