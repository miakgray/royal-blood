const THEME_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem("rb-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {}
})();
`;

export function ThemeScript() {
  // Runs before paint to avoid a light/dark flash on load.
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
