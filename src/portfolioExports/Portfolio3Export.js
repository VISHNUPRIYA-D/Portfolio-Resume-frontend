// Portfolio3Export.js
export const Portfolio3Export = (user, def) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${user?.name || def.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  </head>
  <body class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-sans">

    <!-- Navbar -->
    <header class="flex justify-between items-center px-3 sm:px-6 py-3 bg-black/30 backdrop-blur-lg sticky top-0 z-50">
      <h1 class="text-xl font-bold text-pink-400 capitalize">${user?.name || def.name}</h1>
      <nav class="hidden md:block">
        <ul class="flex md:gap-6 text-sm font-semibold uppercase text-gray-200">
          ${["Home","About","Education","Experience","Projects","Skills","Contact"]
            .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-pink-400 transition">${item}</a></li>`).join("")}
        </ul>
      </nav>
      <button class="md:hidden text-2xl" onclick="toggleMenu()">
        <i id="menu-icon" class="fas fa-bars"></i>
      </button>
    </header>

    <!-- Mobile Menu -->
    <nav id="mobile-menu" class="hidden md:hidden bg-black/50 backdrop-blur-lg px-4 py-3">
      <ul class="flex flex-col gap-3 text-sm uppercase text-gray-200">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"]
          .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-pink-400" onclick="toggleMenu()">${item}</a></li>`).join("")}
      </ul>
    </nav>

    <!-- Hero -->
    <section id="home" class="text-center py-16 px-6">
      <img src="${user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}" alt="Profile"
        class="w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-full border-4 border-pink-400 shadow-lg object-cover"/>
      <h2 class="mt-4 text-3xl font-bold">${user?.title || def.title}</h2>
      <p class="text-gray-200 mt-2 max-w-2xl mx-auto">${user?.about || def.about}</p>
    </section>

    <!-- Education -->
    <section id="education" class="px-6 py-12">
      <h2 class="text-2xl text-pink-400 font-bold mb-6 flex items-center gap-2"><i class="fas fa-graduation-cap"></i> Education</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${(user?.educations?.length ? user.educations : def.educations).map(edu => `
          <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
            <h3 class="font-bold text-white">${edu.collegeName}</h3>
            <p class="text-gray-200">${edu.field}</p>
            <p class="text-sm text-gray-300">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="px-6 py-12 bg-black/20">
      <h2 class="text-2xl text-pink-400 font-bold mb-6 flex items-center gap-2"><i class="fas fa-briefcase"></i> Experience</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${(user?.experiences?.length ? user.experiences : def.experiences).map(exp => `
          <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
            <h3 class="font-bold text-white">${exp.companyName}</h3>
            <p class="text-gray-200">${exp.role}</p>
            <p class="text-sm text-gray-300">${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 py-12">
      <h2 class="text-2xl text-pink-400 font-bold mb-6">Projects</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${(user?.projects?.length ? user.projects : def.projects).map(proj => `
          <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition">
            <h3 class="text-xl font-bold">${proj.title}</h3>
            <p class="text-gray-200">${proj.description}</p>
            <p class="text-sm text-pink-400 mt-2">Tech: ${proj.tech}</p>
            <a href="${proj.link}" target="_blank" class="text-pink-400 underline">View Project</a>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-6 py-12 bg-black/20">
      <h2 class="text-2xl text-pink-400 font-bold mb-6">Skills</h2>
      <div class="flex flex-wrap gap-3">
        ${(user?.skills?.length ? user.skills : def.skills).map(s => `
          <span class="bg-pink-500/30 border border-pink-300 text-pink-100 px-4 py-1 rounded-full text-sm shadow-md hover:bg-pink-500/50">${s.skill}</span>
        `).join("")}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-6 py-12">
      <h2 class="text-2xl text-pink-400 font-bold mb-6">Contact</h2>
      ${(user?.contacts?.length ? user.contacts : def.contacts).map(cont => `
        <div class="space-y-2">
          <p class="flex items-center gap-2"><i class="fas fa-envelope text-pink-400"></i> ${cont.email}</p>
          <p class="flex items-center gap-2"><i class="fas fa-phone text-pink-400"></i> ${cont.phone}</p>
          <p class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-pink-400"></i> ${cont.address}</p>
        </div>
      `).join("")}
    </section>

    <!-- Script for Mobile Menu -->
    <script>
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          menu.classList.add('hidden');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    </script>

  </body>
  </html>
  `;
};
