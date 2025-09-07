// Portfolio10Export.js

export const Portfolio10Export = (user, def) => {
  const u = user || def || {};

  // Safely get arrays
  const socials = u.socialMedia?.length ? u.socialMedia : def.socialMedia || [];
  const educations = u.educations?.length ? u.educations : def.educations || [];
  const experiences = u.experiences?.length ? u.experiences : def.experiences || [];
  const projects = u.projects?.length ? u.projects : def.projects || [];
  const skills = u.skills?.length ? u.skills : def.skills || [];
  const contacts = u.contacts?.length ? u.contacts : def.contacts || [];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${u.name || "Portfolio"}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html { scroll-behavior: smooth; }
    .fade-up { opacity:0; transform:translateY(12px); transition:all .6s ease; }
    .fade-up.show { opacity:1; transform:translateY(0); }
  </style>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        });
      }, {threshold:0.15});
      document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
    });
  </script>
</head>
<body class="bg-gradient-to-br from-[#f6f7ff] to-[#eaf7ff] text-slate-900 font-sans">

  <!-- Navbar -->
  <header class="flex justify-between items-center px-4 md:px-8 py-3 sticky top-0 bg-white/70 backdrop-blur z-50">
    <div class="flex gap-2 items-center">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-300 flex items-center justify-center text-white font-bold">
        ${(u.name || def.name || "U").charAt(0).toUpperCase()}
      </div>
      <div>
        <a href="#home" class="font-extrabold text-lg">${u.name || def.name}</a>
        <div class="text-xs text-slate-500">${u.title || def.title}</div>
      </div>
    </div>
    <nav class="hidden md:block">
      <ul class="flex gap-4 text-sm font-semibold uppercase text-gray-500">
        ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
          .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-indigo-500">${item}</a></li>`)
          .join("")}
      </ul>
    </nav>
    <button id="menuBtn" class="md:hidden text-2xl">☰</button>
  </header>

  <!-- Mobile menu -->
  <nav id="mobileMenu" class="hidden md:hidden bg-gray-900 text-gray-200 px-4 py-3">
    <ul class="flex flex-col gap-3 uppercase text-sm">
      ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
        .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-indigo-400">${item}</a></li>`)
        .join("")}
    </ul>
  </nav>
  <script>
    document.getElementById("menuBtn").addEventListener("click",()=>{
      document.getElementById("mobileMenu").classList.toggle("hidden");
    });
  </script>

  <main class="pt-16">

    <!-- Hero -->
    <section id="home" class="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div class="fade-up">
        <h1 class="text-3xl font-extrabold leading-tight">
          <span class="block">${u.name || def.name}</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">${u.title || def.title}</span>
        </h1>
        <p class="mt-4 text-slate-600">${u.about || def.about}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          ${socials.slice(0,4).map(s=>`
            <a href="${s.url}" target="_blank" class="px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-sm hover:scale-105 transition">${s.platform}</a>
          `).join("")}
        </div>
      </div>
      <div class="flex justify-center md:justify-end fade-up">
        <div class="backdrop-blur bg-white/40 rounded-2xl p-6 shadow-lg">
          <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-white/50 mx-auto mb-3">
            ${u.image ? `<img src="data:image/jpeg;base64,${u.image}" class="w-full h-full object-cover"/>`
              : `<div class="w-full h-full bg-gradient-to-br from-indigo-400 to-cyan-300 flex items-center justify-center text-white font-bold text-2xl">${(u.name||def.name||"U").charAt(0).toUpperCase()}</div>`}
          </div>
          <h3 class="text-lg font-semibold text-center">${u.name || def.name}</h3>
          <p class="text-slate-500 text-center text-sm">${u.title || def.title}</p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">About</h2>
      <div class="backdrop-blur bg-white/40 rounded-xl p-5 shadow">
        <p class="text-slate-700">${u.about || def.about}</p>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Education</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        ${educations.map(e=>`
          <div class="backdrop-blur bg-white/40 rounded-xl p-5 shadow">
            <h4 class="font-semibold">${e.collegeName || e.schoolName}</h4>
            <p class="text-sm text-slate-600">${e.field || ""}</p>
            <p class="text-xs text-slate-400">${new Date(e.startDate).getFullYear()} - ${new Date(e.endDate).getFullYear()}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Experience</h2>
      <div class="space-y-4">
        ${experiences.map(ex=>`
          <div class="backdrop-blur bg-white/40 rounded-xl p-5 shadow">
            <h4 class="font-semibold">${ex.role}</h4>
            <p class="text-sm text-slate-600">${ex.companyName}</p>
            <p class="text-xs text-slate-400">${new Date(ex.startDate).getFullYear()} - ${new Date(ex.endDate).getFullYear()}</p>
            ${ex.description? `<p class="text-slate-700 text-sm mt-2">${ex.description}</p>`:""}
          </div>`).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Projects</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${projects.map(p=>`
          <div class="backdrop-blur bg-white/40 rounded-xl p-5 shadow">
            <h4 class="font-semibold">${p.title}</h4>
            <p class="text-sm text-slate-600">${p.description}</p>
            <p class="text-xs text-slate-500 mt-2">Tech: ${p.tech}</p>
            <a href="${p.link}" target="_blank" class="text-indigo-600 text-sm underline">View Project</a>
          </div>`).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Skills</h2>
      <div class="flex flex-wrap gap-2">
        ${skills.map(s=>`<span class="px-3 py-1 bg-indigo-500/20 text-indigo-700 rounded-full text-sm">${s.skill}${s.level?` • ${s.level}`:""}</span>`).join("")}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Contact</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${contacts.map(c=>`
          <div class="backdrop-blur bg-white/40 rounded-xl p-5 shadow text-sm">
            <p>📧 ${c.email}</p>
            <p>📞 ${c.phone}</p>
            <p>📍 ${c.address}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- Socials -->
    <section id="socials" class="px-6 py-12 max-w-6xl mx-auto fade-up">
      <h2 class="text-2xl font-bold mb-4">Socials</h2>
      <div class="flex flex-wrap gap-3">
        ${socials.map(s=>`
          <a href="${s.url}" target="_blank" class="px-3 py-2 rounded-lg bg-white/40 shadow text-sm hover:scale-105 transition">${s.platform}</a>
        `).join("")}
      </div>
    </section>

  </main>

  <footer class="py-6 text-center text-xs text-slate-500">
    © ${new Date().getFullYear()} ${u.name || "Your Name"}. All rights reserved.
  </footer>

</body>
</html>
  `;
};
