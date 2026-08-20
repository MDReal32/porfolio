const K1 = "mdr.k";
const K2 = "mdr.v";
const GAP = 3000;
const LEN = 10;
const TARGET = 1880549688;

let buf: string[] = [];
let lastAt = 0;

const hash = (s: string) => {
  let x = 5381;
  for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0;
  return x;
};

const on = () => localStorage.getItem(K1) === "true";
const val = () => localStorage.getItem(K2);

const render = () => {
  const panel = document.getElementById("rp");
  const inner = document.getElementById("rp-inner");
  if (!panel || !inner) return;
  const open = on();
  panel.classList.toggle("grid-rows-[1fr]", open);
  panel.classList.toggle("grid-rows-[0fr]", !open);
  inner.classList.toggle("opacity-100", open);
  inner.classList.toggle("opacity-0", !open);
};

const match = (el: Element, v: string | null) => {
  const roles = el.getAttribute("data-roles");
  return !v || !roles || roles.split(" ").includes(v);
};

const apply = (animate: boolean) => {
  const v = val();
  document.querySelectorAll<HTMLElement>("[data-roles]").forEach(el => {
    const show = match(el, v);

    if (!animate) {
      el.classList.toggle("hidden", !show);
      el.classList.toggle("opacity-0", !show);
      el.classList.toggle("scale-95", !show);
      return;
    }

    el.classList.add("transition-all", "duration-300", "ease-out");
    if (show) {
      el.classList.remove("hidden");
      void el.offsetWidth; // reflow so the transition plays
      el.classList.remove("opacity-0", "scale-95");
    } else {
      el.classList.add("opacity-0", "scale-95");
      window.setTimeout(() => {
        if (!match(el, val())) el.classList.add("hidden");
      }, 300);
    }
  });
};

const renderButtons = () => {
  const v = val();
  document.querySelectorAll<HTMLElement>("#rp-inner [data-role]").forEach(btn => {
    const active = btn.getAttribute("data-role") === v;
    btn.classList.toggle("bg-primary", active);
    btn.classList.toggle("text-primary-content", active);
    btn.classList.toggle("border-primary", active);
    btn.classList.toggle("text-base-content/70", !active);
  });
};

const onClick = (e: Event) => {
  const btn = e.currentTarget as HTMLElement | null;
  const v = btn?.getAttribute("data-role");
  if (!v) return;
  if (val() === v) localStorage.removeItem(K2);
  else localStorage.setItem(K2, v);
  apply(true);
  renderButtons();
};

const onKey = (e: KeyboardEvent) => {
  if (e.key.startsWith("Arrow")) e.preventDefault();

  const now = Date.now();
  if (now - lastAt > GAP) buf = [];
  lastAt = now;

  buf.push(e.key);
  if (buf.length > LEN) buf.shift();

  if (buf.length === LEN && hash(buf.join(",")) === TARGET) {
    buf = [];
    localStorage.setItem(K1, on() ? "false" : "true");
    render();
  }
};

const reset = () => {
  buf = [];
};

const init = () => {
  render();
  apply(false);
  renderButtons();

  document.removeEventListener("keydown", onKey);
  document.addEventListener("keydown", onKey);

  document.removeEventListener("click", reset);
  document.addEventListener("click", reset);

  document.querySelectorAll<HTMLElement>("#rp-inner [data-role]").forEach(btn => {
    btn.addEventListener("click", onClick);
  });
};

init();
document.addEventListener("astro:page-load", init);
