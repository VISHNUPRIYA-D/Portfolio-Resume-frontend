// Portfolio8Export.js
export const Portfolio8Export = (user, def) => {
  const u = user || def;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${u.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>
  </head>
  <body class="bg-gradient-to-br from-pink-50 via-purple-50 to-green-50 text-gray-800 font-sans">

    <!-- Navbar -->
    <header class="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300" data-aos="fade-down">
      <h1 class="text-lg md:text-2xl font-bold text-purple-700 capitalize">${u.name}</h1>

      <!-- Desktop Nav -->
      <nav class="hidden md:block">
        <ul class="flex gap-6 text-sm md:text-base font-semibold uppercase text-gray-500">
          ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
            .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-purple-700 transition">${item}</a></li>`)
            .join("")}
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden text-xl text-gray-600">
        <i class="fas fa-bars"></i>
      </button>
    </header>

    <!-- Mobile Menu -->
    <nav id="mobile-menu" class="hidden md:hidden bg-white shadow px-4 py-2">
      <ul class="flex flex-col gap-3 text-sm font-semibold uppercase text-gray-500">
        ${["Home","About","Education","Experience","Projects","Skills","Contact","Socials"]
          .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-purple-700 transition">${item}</a></li>`)
          .join("")}
      </ul>
    </nav>

    <!-- Hero -->
    <section id="home" class="flex flex-col items-center text-center py-16 px-6" data-aos="zoom-in">
      <img src="${
        user?.image ? `data:image/jpeg;base64,${user.image}` : def.image
      }" class="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-purple-300 shadow-lg object-cover"/>
      <h1 class="mt-4 text-2xl md:text-4xl font-bold text-purple-700 capitalize">${u.name}</h1>
      <p class="text-purple-500 text-sm md:text-xl mt-2 capitalize">${u.title}</p>
      <p class="max-w-2xl text-gray-600 mt-4 text-sm md:text-base">${u.about}</p>
    </section>

    <!-- About -->
    <section id="about" class="px-6 py-12" data-aos="fade-up">
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-4">About Me</h2>
        <p class="text-gray-700 text-sm md:text-base">${u.about}</p>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="px-6 py-12" data-aos="fade-right">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Education</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${(u.educations || []).map(edu => `
          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-300">
            <h3 class="font-bold text-lg capitalize">${edu.collegeName}</h3>
            <p class="text-gray-600 capitalize">${edu.field}</p>
            <p class="text-gray-500 text-sm">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="px-6 py-12 bg-purple-50" data-aos="fade-left">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Experience</h2>
      <div class="space-y-6">
        ${(u.experiences || []).map(exp => `
          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-300">
            <h3 class="font-bold text-lg capitalize">${exp.role}</h3>
            <p class="text-purple-600 capitalize">${exp.companyName}</p>
            <p class="text-gray-500 text-sm">${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}</p>
            <p class="mt-2 text-gray-700">${exp.description}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 py-12" data-aos="zoom-in-up">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Projects</h2>
      <div class="grid md:grid-cols-3 gap-6">
        ${(u.projects || []).map(proj => `
          <div class="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h3 class="font-bold text-lg capitalize">${proj.title}</h3>
            <p class="text-gray-600">${proj.description}</p>
            ${proj.link ? `<a href="${proj.link}" target="_blank" class="text-purple-500 hover:underline mt-2 inline-block">View Project</a>` : ""}
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-6 py-12 bg-purple-50" data-aos="fade-up">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Skills</h2>
      <div class="flex flex-wrap gap-3">
        ${(u.skills || []).map(s => `
          <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 capitalize text-purple-700 rounded-full shadow-sm">${s.skill}</span>
        `).join("")}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-6 py-12 text-center" data-aos="fade-right">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Contact</h2>
      ${(u.contacts || []).map(cont => `
        <div class="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mb-6">
          <p class="flex items-center justify-center gap-2 text-gray-600"><i class="fas fa-envelope text-purple-500"></i> ${cont.email}</p>
          <p class="flex items-center justify-center gap-2 text-gray-600"><i class="fas fa-phone text-purple-500"></i> ${cont.phone}</p>
          <p class="flex items-center justify-center gap-2 text-gray-600"><i class="fas fa-map-marker-alt text-purple-500"></i> ${cont.address}</p>
        </div>
      `).join("")}
    </section>

    <!-- Socials -->
    <section id="socials" class="px-6 py-12 text-center" data-aos="fade-up">
      <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6">Find Me On</h2>
      <div class="flex justify-center gap-6">
        ${(u.socialMedia || []).map(social => `
          <a href="${social.url}" target="_blank" class="text-purple-600 hover:text-purple-800 text-2xl">
            <i class="fab fa-${social.platform.toLowerCase()}"></i>
          </a>
        `).join("")}
      </div>
    </section>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
      AOS.init({ duration: 1000, once: true });

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
