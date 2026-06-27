import { ref, watch } from "vue";

export default function useTheme() {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
  const theme = ref(stored === "dark" ? "dark" : "light");

  const apply = (value) => {
    if (typeof document !== "undefined") {
      if (value === "dark") document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.removeAttribute("data-theme");
    }
  };

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  watch(
    theme,
    (val) => {
      try {
        apply(val);
        if (typeof localStorage !== "undefined") localStorage.setItem("theme", val);
      } catch (e) {
        /* ignore */
      }
    },
    { immediate: true }
  );

  return { theme, toggleTheme };
}
