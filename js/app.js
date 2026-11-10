const PAGE_SIZE = 9;
const FAV_KEY = "andes-favs";

const ICONS = {
  logo: `<svg viewBox="0 0 36 28" fill="none" aria-hidden="true"><path d="M4 24 L14 8 L20 16 L24 10 L32 24 Z" fill="white"/><path d="M10 24 L18 12 L26 24" fill="#8ec8e6"/></svg>`,
  user: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3.2 4-5 7-5s5.5 1.8 7 5"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
  pin: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>`,
  star: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.6l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8 6.2 18.5l.9-5.4L3.2 9.3l5.4-.8z"/></svg>`,
  heart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2C.8 8.6 2.2 5 6 5c2 0 3.2 1 4 2 0.8-1 2-2 4-2 3.8 0 5.2 3.6 3.2 6.8C19 15.6 12 20 12 20z"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
};

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function getFavs() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
  } catch {
    return [];
  }
}

function toggleFav(id) {
  const favs = getFavs();
  const next = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id];
  localStorage.setItem(FAV_KEY, JSON.stringify(next));
  return next;
}

function header(active) {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="index.html">${ICONS.logo} ANDES TRAVEL</a>
        <nav>
          <ul class="nav-links" id="navLinks">
            <li><a href="index.html" class="${active === "destinos" ? "active" : ""}">Destinos</a></li>
            <li><a href="paquetes.html" class="${active === "paquetes" ? "active" : ""}">Paquetes</a></li>
            <li><a href="servicios.html" class="${active === "servicios" ? "active" : ""}">Servicios</a></li>
            <li><a href="ofertas.html" class="${active === "ofertas" ? "active" : ""}">Ofertas</a></li>
            <li><a href="blog.html" class="${active === "blog" ? "active" : ""}">Blog</a></li>
            <li><a href="contacto.html" class="${active === "contacto" ? "active" : ""}">Contacto</a></li>
          </ul>
        </nav>
        <div class="header-actions" id="headerActions">
          <a class="btn btn-ghost" href="ingresar.html">${ICONS.user} Ingresar</a>
          <a class="btn btn-orange" href="registrarse.html">Registrarse</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Menú">☰</button>
        <button id="btn-tema" class="btn-tema">🌙 Modo Oscuro</button>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="logo" href="index.html">${ICONS.logo} ANDES TRAVEL</a>
          <p>Viajes inspiradores con experiencias auténticas y reservas seguras.</p>
          <div class="socials">
            <a href="#" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z"/></svg></a>
            <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h5.2l4.1 5.8L17.8 3H21l-6.8 8.2L21.4 21h-5.2l-4.5-6.3L6 21H3l7.2-8.7z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Empresa</h4>
          <a href="servicios.html">Nosotros</a>
          <a href="blog.html">Blog</a>
          <a href="contacto.html">Contacto</a>
        </div>
        <div class="footer-col">
          <h4>Explora</h4>
          <a href="index.html">Destinos</a>
          <a href="paquetes.html">Paquetes</a>
          <a href="ofertas.html">Ofertas</a>
        </div>
        <div class="footer-col">
          <h4>Soporte</h4>
          <a href="contacto.html">Ayuda</a>
          <a href="contacto.html">Términos</a>
          <a href="contacto.html">Privacidad</a>
        </div>
      </div>
      <div class="container copyright">© 2026 Andes Travel. Todos los derechos reservados.</div>
    </footer>`;
}

function mountChrome(active) {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = header(active);
  if (f) f.outerHTML = footer();
  const toggle = document.getElementById("menuToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("open");
      document.getElementById("headerActions").classList.toggle("open");
    });
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("No se pudo cargar " + src));
    document.head.appendChild(s);
  });
}

async function ensureSupabase() {
  if (typeof db !== "undefined") return true;
  try {
    if (!window.supabase) {
      await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
    }
    if (typeof db === "undefined") await loadScript("js/supabase.js");
  } catch (err) {
    console.error(err);
  }
  return typeof db !== "undefined";
}

async function getSession() {
  if (typeof db === "undefined") return null;
  const { data } = await db.auth.getSession();
  return data && data.session ? data.session : null;
}

function traducirError(m) {
  if (!m) return "Ocurrió un error.";
  if (/invalid login/i.test(m)) return "Correo o contraseña incorrectos.";
  if (/already registered/i.test(m)) return "Ese correo ya está registrado.";
  if (/email not confirmed/i.test(m)) return "Confirma tu correo antes de ingresar (revisa tu bandeja).";
  if (/password/i.test(m) && /6/.test(m)) return "La contraseña debe tener al menos 6 caracteres.";
  return m;
}

async function actualizarHeaderSesion() {
  const box = document.getElementById("headerActions");
  if (!box) return;
  const session = await getSession();
  if (!session) return;
  const nombre = (session.user.user_metadata && session.user.user_metadata.nombre) || session.user.email;
  box.innerHTML = `
    <span class="btn btn-ghost" title="${esc(session.user.email)}">${ICONS.user} ${esc(nombre)}</span>
    <button class="btn btn-orange" id="btnSalir" type="button">Salir</button>`;
  document.getElementById("btnSalir").addEventListener("click", async () => {
    await db.auth.signOut();
    location.href = "index.html";
  });
}

async function cargarDestinosRemotos() {
  if (typeof db === "undefined") return;

  for (let i = DESTINOS.length - 1; i >= 0; i--) {
    if (String(DESTINOS[i].id).startsWith("db-")) DESTINOS.splice(i, 1);
  }

  const { data, error } = await db.from("destinos").select("*").order("created_at");
  if (error || !data) {
    console.error("Error al cargar destinos:", error && error.message);
    return;
  }

  data.forEach((r) =>
    DESTINOS.push({
      id: "db-" + r.id,
      nombre: esc(r.nombre),
      region: r.region,
      lugar: r.lugar || "Perú",
      rating: Number(r.calificacion) || 0,
      precio: Number(r.precio) || 0,
      duracion: r.duracion,
      imagen: esc(r.imagen_url || "img/plaza.jpg"),
      desc: esc(r.descripcion || "")
    })
  );
}

function initFormDestino(onSaved) {
  const form = document.getElementById("dest-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("f-msg");

    if (typeof db === "undefined") {
      msg.textContent = "Error: no se cargó la conexión a Supabase.";
      return;
    }

    msg.style.color = "";
    msg.textContent = "Guardando...";
    const { error } = await db.from("destinos").insert([
      {
        nombre: document.getElementById("f-nombre").value.trim(),
        region: document.getElementById("f-region").value,
        precio: Number(document.getElementById("f-precio").value),
        duracion: document.getElementById("f-duracion").value,
        calificacion: Number(document.getElementById("f-rating").value),
        descripcion: document.getElementById("f-desc").value.trim(),
        imagen_url: document.getElementById("f-img").value.trim() || "img/plaza.jpg"
      }
    ]);

    if (error) {
      msg.textContent = "Error: " + error.message;
      return;
    }
    msg.textContent = "Destino guardado ✔";
    form.reset();
    if (onSaved) onSaved();
  });
}

function syncRangeFill() {
  const min = document.getElementById("priceMin");
  const max = document.getElementById("priceMax");
  const fill = document.getElementById("rangeFill");
  const minL = document.getElementById("priceMinLabel");
  const maxL = document.getElementById("priceMaxLabel");
  if (!min || !max || !fill) return;
  let a = Number(min.value);
  let b = Number(max.value);
  if (a > b) [a, b] = [b, a];
  const span = 1400;
  fill.style.left = `${((a - 100) / span) * 100}%`;
  fill.style.width = `${((b - a) / span) * 100}%`;
  minL.textContent = `S/ ${a}`;
  maxL.textContent = `S/ ${b}`;
}

function collectDraft() {
  return {
    regiones: [...document.querySelectorAll("[name=region]:checked")].map((i) => i.value),
    duraciones: [...document.querySelectorAll("[name=duracion]:checked")].map((i) => i.value),
    calificacion: document.querySelector("[name=rating]:checked")?.value || "todas",
    min: Number(document.getElementById("priceMin").value),
    max: Number(document.getElementById("priceMax").value),
    q: document.getElementById("q").value.trim().toLowerCase(),
    sort: document.getElementById("sort").value
  };
}

function applyFilters(list, f) {
  return list.filter((d) => {
    if (f.regiones.length && !f.regiones.includes(d.region)) return false;
    if (f.duraciones.length && !f.duraciones.includes(d.duracion)) return false;
    if (f.calificacion === "4.5" && d.rating < 4.5) return false;
    if (f.calificacion === "4.0" && d.rating < 4.0) return false;
    const lo = Math.min(f.min, f.max);
    const hi = Math.max(f.min, f.max);
    if (d.precio < lo || d.precio > hi) return false;
    if (f.q) {
      const blob = `${d.nombre} ${d.region} ${d.lugar} ${d.desc}`.toLowerCase();
      if (!blob.includes(f.q)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (f.sort === "precio-asc") return a.precio - b.precio;
    if (f.sort === "precio-desc") return b.precio - a.precio;
    if (f.sort === "rating") return b.rating - a.rating;
    return 0;
  });
}

function chipHtml(filters) {
  const chips = [];
  filters.regiones.forEach((r) => chips.push({ k: "region", v: r, t: r }));
  filters.duraciones.forEach((d) => chips.push({ k: "duracion", v: d, t: `${d} días` }));
  return chips
    .map(
      (c) =>
        `<span class="chip">${c.t} <button type="button" data-chip="${c.k}" data-value="${c.v}" aria-label="Quitar">×</button></span>`
    )
    .join("");
}

function cardHtml(d, favs) {
  const on = favs.includes(d.id);
  return `
    <article class="card">
      <div class="card-media">
        <img src="${d.imagen}" alt="${d.nombre}">
        <button class="fav ${on ? "active" : ""}" data-fav="${d.id}" aria-label="Favorito">${ICONS.heart}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title"><a href="destino.html?id=${d.id}">${d.nombre}</a></h3>
        <div class="card-rating">${ICONS.star} ${d.rating.toFixed(1)}</div>
        <div class="card-loc">${ICONS.pin} ${d.region} · ${d.lugar}</div>
        <div class="card-from">Desde</div>
        <div class="card-price">S/ ${d.precio}</div>
        <a class="go" href="destino.html?id=${d.id}" aria-label="Ver ${d.nombre}">${ICONS.arrow}</a>
      </div>
    </article>`;
}

function paginationHtml(page, pages) {
  const items = [];
  for (let p = 1; p <= pages; p += 1) {
    items.push(`<button class="page-btn ${p === page ? "active" : ""}" data-page="${p}">${p}</button>`);
  }
  return `
    <button class="page-btn" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>‹</button>
    ${items.join("")}
    <button class="page-btn" data-page="${page + 1}" ${page === pages ? "disabled" : ""}>›</button>`;
}

function initCatalog() {
  let applied = collectDraft();
  let page = 1;

  const render = () => {
    const favs = getFavs();
    const filtered = applyFilters(DESTINOS, applied);
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (page > pages) page = pages;
    const slice = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    document.getElementById("count").textContent = `${filtered.length} destinos encontrados`;
    document.getElementById("chips").innerHTML = chipHtml(applied);
    document.getElementById("cards").innerHTML =
      slice.length > 0 ? slice.map((d) => cardHtml(d, favs)).join("") : `<div class="empty">No hay destinos con esos filtros.</div>`;
    document.getElementById("pagination").innerHTML = paginationHtml(page, pages);
  };

  document.getElementById("apply").addEventListener("click", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("clear").addEventListener("click", () => {
    document.querySelectorAll("[name=region], [name=duracion]").forEach((i) => (i.checked = false));
    document.getElementById("ratingAll").checked = true;
    document.getElementById("priceMin").value = 100;
    document.getElementById("priceMax").value = 1500;
    document.getElementById("q").value = "";
    document.getElementById("sort").value = "relevancia";
    syncRangeFill();
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("q").addEventListener("input", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("sort").addEventListener("change", () => {
    applied = collectDraft();
    page = 1;
    render();
  });
  ["priceMin", "priceMax"].forEach((id) => {
    document.getElementById(id).addEventListener("input", syncRangeFill);
  });
  document.getElementById("chips").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-chip]");
    if (!btn) return;
    const sel = `[name=${btn.dataset.chip}][value="${btn.dataset.value}"]`;
    const el = document.querySelector(sel);
    if (el) el.checked = false;
    applied = collectDraft();
    page = 1;
    render();
  });
  document.getElementById("cards").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    e.preventDefault();
    toggleFav(btn.dataset.fav);
    render();
  });
  document.getElementById("pagination").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    page = Number(btn.dataset.page);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  initFormDestino(async () => {
    await cargarDestinosRemotos();
    document.getElementById("clear").click();
  });
  cargarDestinosRemotos().then(render);

  syncRangeFill();
  render();
}

async function initDetail() {
  await cargarDestinosRemotos();

  const id = new URLSearchParams(location.search).get("id");
  const d = DESTINOS.find((x) => x.id === id) || DESTINOS[0];
  document.getElementById("d-img").src = d.imagen;
  document.getElementById("d-img").alt = d.nombre;
  document.getElementById("d-name").textContent = d.nombre;
  document.getElementById("d-loc").textContent = `${d.region} · ${d.lugar}`;
  document.getElementById("d-rating").textContent = d.rating.toFixed(1);
  document.getElementById("d-desc").textContent = d.desc;
  document.getElementById("d-price").textContent = `S/ ${d.precio}`;
  document.getElementById("d-dur").textContent = `${d.duracion} días`;
  document.title = `${d.nombre} · Andes Travel`;
  const form = document.getElementById("book-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("book-msg");
    msg.classList.add("show");

    if (typeof db === "undefined") {
      msg.textContent = "Error: no se cargó la conexión a Supabase.";
      return;
    }

    msg.textContent = "Enviando...";
    const { error } = await db.from("reservas").insert([{
      destino: d.nombre,
      fecha_salida: form.querySelector("input[type=date]").value || null,
      viajeros: Number(form.querySelector("input[type=number]").value) || 1,
      nombre: form.querySelector("input[type=text]").value.trim(),
      correo: form.querySelector("input[type=email]").value.trim()
    }]);

    msg.textContent = error
      ? "Error: " + error.message
      : "Solicitud enviada. Un asesor te contactará para confirmar disponibilidad.";
    if (!error) form.reset();
  });
}

function initAuth(kind) {
  const form = document.getElementById("auth-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("auth-msg");
    msg.classList.add("show");

    if (typeof db === "undefined") {
      msg.textContent = "Error: no se cargó la conexión a Supabase.";
      return;
    }

    const emailInput = form.querySelector("input[type=email]");
    const email = emailInput ? emailInput.value.trim() : "";
    const passwordInput = form.querySelector("input[type=password]");
    const password = passwordInput ? passwordInput.value : "";

    if (kind === "in") {
      msg.textContent = "Ingresando...";
      const { error } = await db.auth.signInWithPassword({ email, password });
      if (error) { msg.textContent = traducirError(error.message); return; }
      msg.textContent = "Sesión iniciada. Redirigiendo...";
      setTimeout(() => (location.href = "index.html"), 700);
      return;
    }

    const nameInput = form.querySelector("input[type=text]") || form.querySelectorAll("input")[0];
    const nombre = nameInput ? nameInput.value.trim() : "";

    msg.textContent = "Creando cuenta...";
    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: { data: { nombre } }
    });
    if (error) { msg.textContent = traducirError(error.message); return; }

    if (data.session) {
      msg.textContent = "Cuenta creada. Redirigiendo...";
      setTimeout(() => (location.href = "index.html"), 700);
    } else {
      msg.textContent = "Cuenta creada. Revisa tu correo para confirmarla y luego ingresa.";
    }
  });
}

function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("contact-msg");
    msg.classList.add("show");

    if (typeof db === "undefined") {
      msg.textContent = "Error: no se cargó la conexión a Supabase.";
      return;
    }

    const inputsText = form.querySelectorAll("input:not([type=email])");
    const area = form.querySelector("textarea");

    msg.textContent = "Enviando...";
    const { error } = await db.from("mensajes_contacto").insert([{
      nombre: inputsText[0] ? inputsText[0].value.trim() : "",
      correo: form.querySelector("input[type=email]").value.trim(),
      asunto: inputsText[1] ? inputsText[1].value.trim() : "",
      mensaje: area ? area.value.trim() : ""
    }]);

    msg.textContent = error
      ? "Error: " + error.message
      : "Mensaje enviado. Te responderemos en menos de 24 horas.";
    if (!error) form.reset();
  });
}

function initTema() {
  const btn = document.getElementById('btn-tema');
  if (!btn) return;

  const body = document.body;

  if (localStorage.getItem('tema') === 'oscuro') {
    body.classList.add('oscuro');
    btn.textContent = '☀️ Modo Claro';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    if (body.classList.contains('oscuro')) {
      btn.textContent = '☀️ Modo Claro';
      localStorage.setItem('tema', 'oscuro');
    } else {
      btn.textContent = '🌙 Modo Oscuro';
      localStorage.setItem('tema', 'claro');
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const page = document.body.dataset.page;
  mountChrome(page);
  initTema();
  await ensureSupabase();
  actualizarHeaderSesion();
  if (page === "destinos") initCatalog();
  if (page === "destino") initDetail();
  if (page === "ingresar") initAuth("in");
  if (page === "registro" || page === "registrarse") initAuth("up");
  if (page === "contacto") initContact();
});