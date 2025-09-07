// Portfolio9Export.js
export const Portfolio9Export = (user, def) => {
  const u = user || def || {};

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${u.name || "Portfolio"} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>
  </head>
  <body class="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">

    <!-- Navbar / Mobile Topbar -->
    <header class="lg:hidden sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div class="px-3 py-2 flex items-center justify-between">
        <a href="#home" class="font-black text-teal-300 text-sm sm:text-base">${u.name || "Your Name"}</a>
        <button id="menu-btn" class="text-slate-200 text-xl">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <nav id="mobile-menu" class="hidden bg-slate-950/95 border-t border-white/10">
        <ul class="px-3 py-2 grid grid-cols-2 gap-1 text-sm">
          ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
            .map(item => `
              <li>
                <a href="#${item.toLowerCase()}" class="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/5">
                  <i class="fas fa-${item.toLowerCase()} text-teal-300"></i> ${item}
                </a>
              </li>`).join("")}
        </ul>
      </nav>
    </header>

    <!-- Sidebar for Desktop -->
    <aside class="hidden lg:flex flex-col w-64 border-r border-white/10 bg-slate-950/70 backdrop-blur fixed h-screen">
      <div class="p-4 border-b border-white/10">
        <a href="#home" class="text-lg font-black tracking-tight text-teal-300">${u.name || "Your Name"}</a>
        <p class="text-xs text-slate-400 truncate">${u.title || "Your Role"}</p>
      </div>
      <nav class="flex-1 overflow-y-auto py-2">
        <ul class="px-2 space-y-1">
          ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
            .map(item => `
              <li>
                <a href="#${item.toLowerCase()}" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-teal-300 hover:bg-white/5">
                  <i class="fas fa-${item.toLowerCase()} text-teal-300"></i> ${item}
                </a>
              </li>`).join("")}
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="lg:ml-64">

      <!-- Home -->
      <section id="home" class="px-6 py-12 min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8" data-aos="fade-up">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-2xl md:text-4xl font-extrabold leading-tight">
            <span class="text-slate-100">${u.name || "Your Name"}</span><br/>
            <span class="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              ${u.title || "Your Role"}
            </span>
          </h1>
          <p class="mt-4 text-slate-400 text-sm md:text-base">${u.about || "Short introduction goes here."}</p>
        </div>
        <div>
          ${u.image ? `<img src="${u.image.startsWith("data:") ? u.image : `data:image/jpeg;base64,${u.image}`}" class="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-teal-300 shadow-xl"/>` : ""}
        </div>
      </section>

      <!-- About -->
      <section id="about" class="px-6 py-12" data-aos="fade-up">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">About</h2>
        <div class="rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow">
          <p class="text-slate-300">${u.about || "Tell more about your mission, interests and goals."}</p>
        </div>
      </section>

      <!-- Education -->
      <section id="education" class="px-6 py-12 bg-slate-950/40" data-aos="fade-right">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Education</h2>
        <div class="grid md:grid-cols-2 gap-6">
          ${(u.educations || []).map(e => `
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow">
              <h3 class="text-teal-300 font-bold">${e.collegeName || e.schoolName}</h3>
              <p class="text-slate-300">${e.field || e.degree}</p>
              ${(e.startDate || e.endDate) ? `<p class="text-slate-400 text-sm">${new Date(e.startDate).getFullYear()} - ${new Date(e.endDate).getFullYear()}</p>` : ""}
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="px-6 py-12" data-aos="fade-left">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Experience</h2>
        <div class="grid md:grid-cols-2 gap-6">
          ${(u.experiences || []).map(x => `
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow">
              <h3 class="text-teal-300 font-bold">${x.role}</h3>
              <p class="text-slate-300">${x.companyName}</p>
              ${(x.startDate || x.endDate) ? `<p class="text-slate-400 text-sm">${new Date(x.startDate).getFullYear()} - ${new Date(x.endDate).getFullYear()}</p>` : ""}
              ${x.description ? `<p class="text-slate-300 mt-2">${x.description}</p>` : ""}
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="px-6 py-12 bg-slate-950/40" data-aos="zoom-in">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${(u.projects || []).map(p => `
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow hover:scale-[1.02] transition">
              <h3 class="text-slate-100 font-bold">${p.title}</h3>
              <p class="text-slate-300">${p.description || ""}</p>
              <div class="mt-2 flex items-center gap-3">
                ${p.tech ? `<span class="px-2 py-1 text-xs border border-teal-300/30 rounded-full text-teal-300">${p.tech}</span>` : ""}
                ${p.link ? `<a href="${p.link}" target="_blank" class="text-teal-300 hover:underline text-xs">View ↗</a>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="px-6 py-12" data-aos="fade-up">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
          ${(u.skills || []).map(s => `
            <span class="px-3 py-1 rounded-full border border-teal-300/30 text-teal-300 text-xs bg-teal-500/10">${s.skill || s}</span>
          `).join("")}
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="px-6 py-12 bg-slate-950/40" data-aos="fade-right">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Contact</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${(u.contacts || []).map(c => `
            <div class="bg-slate-900/60 p-4 rounded-xl border border-white/10 shadow text-sm space-y-2">
              ${c.email ? `<p><i class="fas fa-envelope text-teal-300"></i> ${c.email}</p>` : ""}
              ${c.phone ? `<p><i class="fas fa-phone text-teal-300"></i> ${c.phone}</p>` : ""}
              ${c.address ? `<p><i class="fas fa-map-marker-alt text-teal-300"></i> ${c.address}</p>` : ""}
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Socials -->
      <section id="socials" class="px-6 py-12" data-aos="fade-up">
        <h2 class="text-xl md:text-2xl font-extrabold text-teal-300 mb-4">Socials</h2>
        <div class="flex flex-wrap items-center gap-4">
          ${(u.socialMedia || []).map(s => `
            <a href="${s.url}" target="_blank" class="flex items-center gap-2 text-slate-300 hover:text-teal-300 text-sm">
              <i class="fab fa-${s.platform?.toLowerCase()}"></i>
              <span>${s.platform}</span>
            </a>
          `).join("")}
        </div>
      </section>

    </main>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init({ duration: 800, once: true });

      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
          ? '<i class="fas fa-bars"></i>'
          : '<i class="fas fa-times"></i>';
      });
    </script>

  </body>
  </html>
  `;
};
