// Portfolio2Export.js
export const Portfolio2Export = (user, def, menuOpen = false) => {
  const portfolioIcons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.9v2.9c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 0 1 7.5 6a2.5 2.5 0 0 1-5 0c0-1.4 1.1-2.5 2.48-2.5zM4 8h3v12H4V8zm7.5 0h2.8v1.7h.1c.4-.7 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V20h-3V8z"/></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.7 7.7 0 0 0 23 3z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 18a7.9 7.9 0 0 1-5.6-2.3A7.9 7.9 0 0 1 4 12a7.9 7.9 0 0 1 2.3-5.6A7.9 7.9 0 0 1 12 4a7.9 7.9 0 0 1 5.6 2.3A7.9 7.9 0 0 1 20 12a7.9 7.9 0 0 1-2.3 5.6A7.9 7.9 0 0 1 12 20z"/></svg>`
  };

  const renderSocial = (socials) =>
    socials.map((social, i) => {
      const icon = portfolioIcons[social.platform.toLowerCase()] || portfolioIcons.globe;
      return `<a key="${i}" href="${social.url}" target="_blank" class="text-gray-300 hover:text-cyan-400">${icon}</a>`;
    }).join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${user?.name || def.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-950 text-gray-200 font-sans">
    
    <!-- Navbar -->
    <nav class="p-3 flex justify-between items-center">
      <ul class="hidden md:flex gap-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-gray-400">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"].map(item =>
          `<li><a href="#${item.toLowerCase()}" class="hover:text-cyan-500">${item}</a></li>`
        ).join("")}
      </ul>
      <button class="md:hidden text-gray-300 text-xl" onclick="toggleMenu()">
        ${menuOpen ? "✖" : "☰"}
      </button>
    </nav>

    <!-- Mobile Menu -->
    <nav id="mobileMenu" class="hidden  md:hidden bg-gray-900 border-b border-gray-800">
      <ul class="flex flex-col gap-3 px-4 py-2 text-sm font-semibold uppercase text-gray-400">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"].map(item =>
          `<li><a href="#${item.toLowerCase()}" onclick="toggleMenu(false)" class="hover:text-cyan-500">${item}</a></li>`
        ).join("")}
      </ul>
    </nav>

    <!-- Hero -->
    <section id="home" class="flex flex-col items-center text-center py-12 px-3">
      <img src="${user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}" class="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cyan-400 shadow-lg object-cover"/>
      <h1 class="mt-4 capitalize text-xl sm:text-3xl font-bold">${user?.name || def.name}</h1>
      <p class="text-cyan-400 text-sm sm:text-lg mt-2">${user?.title || def.title}</p>
      <p class="text-gray-400 max-w-xl text-xs sm:text-base mt-3">${user?.about || def.about}</p>
    </section>

    <!-- Sections (Education, Experience, Projects, Skills, Contact) -->
    <section id="education" class="px-6 py-8">
      <h2 class="text-cyan-400 text-xl font-bold mb-4 flex items-center gap-2">🎓 Education</h2>
      ${(user?.educations?.length ? user.educations : def.educations).map(edu => `
        <div class="bg-gray-900 p-4 rounded-lg shadow mb-3">
          <h3 class="text-lg font-semibold">${edu.collegeName}</h3>
          <p class="text-gray-400">${edu.field}</p>
          <p class="text-gray-500">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
        </div>`).join("")}
    </section>

    <section id="experience" class="px-6 py-8 border-t border-gray-800">
      <h2 class="text-cyan-400 text-xl font-bold mb-4 flex items-center gap-2">💼 Experience</h2>
      ${(user?.experiences?.length ? user.experiences : def.experiences).map(exp => `
        <div class="bg-gray-900 p-4 rounded-lg shadow mb-3">
          <h3 class="text-lg font-semibold">${exp.companyName}</h3>
          <p class="text-gray-400">${exp.role}</p>
          <p class="text-gray-500">${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}</p>
        </div>`).join("")}
    </section>

    <section id="projects" class="px-6 py-8">
      <h2 class="text-cyan-400 text-xl font-bold mb-4 flex items-center gap-2">📂 Projects</h2>
      ${(user?.projects?.length ? user.projects : def.projects).map(proj => `
        <div class="bg-gray-900 p-4 rounded-lg shadow mb-3">
          <h3 class="text-lg font-semibold">${proj.tech}</h3>
          <p class="text-gray-400">${proj.title}</p>
          <p class="text-gray-500">${proj.description}</p>
          <a href="${proj.link}" class="text-cyan-400 underline">${proj.link}</a>
        </div>`).join("")}
    </section>

    <section id="skills" class="px-6 py-8">
      <h2 class="text-cyan-400 text-xl font-bold mb-4 flex items-center gap-2">🛠 Skills</h2>
      ${(user?.skills?.length ? user.skills : def.skills).map(skill => `
        <div class="bg-gray-900 p-4 rounded-lg shadow mb-3">
          <h3 class="text-lg font-semibold">${skill.skill}</h3>
          <p class="text-gray-400">${skill.level}</p>
        </div>`).join("")}
    </section>

    <section id="contact" class="px-6 py-8 border-t border-gray-800">
      <h2 class="text-cyan-400 text-xl font-bold mb-4">📞 Contact</h2>
      ${(user?.contacts?.length ? user.contacts : def.contacts).map(cont => `
        <div class="bg-gray-900 p-4 rounded-lg shadow mb-3">
          <p class="text-gray-300">✉ ${cont.email}</p>
          <p class="text-gray-300">📞 ${cont.phone}</p>
          <p class="text-gray-300">📍 ${cont.address}</p>
        </div>`).join("")}
    </section>

    <!-- Social -->
    <section class="flex gap-4 p-6">
      ${renderSocial(user?.socialMedia?.length ? user.socialMedia : def.socialMedia)}
    </section>

    <script>
      function toggleMenu(force) {
        const menu = document.getElementById("mobileMenu");
        if (force === false) {
          menu.classList.add("hidden");
        } else {
          menu.classList.toggle("hidden");
        }
      }
    </script>
  </body>
  </html>
  `;
};
