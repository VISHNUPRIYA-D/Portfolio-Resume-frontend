// Portfolio6Export.js
export const Portfolio6Export = (user, def) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${user?.name || def.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <style>
      body { background: black; color: #d1d5db; font-family: sans-serif; }
    </style>
    <script>
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      }
      document.addEventListener("DOMContentLoaded", () => {
        AOS.init({ once: true, duration: 800, easing: "ease-out" });
      });
    </script>
  </head>
  <body class="scroll-smooth bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-800">
    
    <!-- Navbar -->
    <header class="flex justify-between items-center bg-white px-4 md:px-8 py-2 sm:py-4 fixed w-full z-50 shadow">
      <h1 class="text-xl md:text-2xl font-bold">
        <span class="text-pink-600 capitalize">${user?.name?.split(" ")[0] || def.name.split(" ")[0]}</span>
      </h1>

      <!-- Desktop Nav -->
      <nav class="hidden md:block">
        <ul class="flex gap-6 font-semibold uppercase text-gray-400">
          ${["Home","About","Education","Experience","Projects","Skills","Contact"].map(
            (item) => `<li><a href="#${item.toLowerCase()}" class="hover:text-pink-600">${item}</a></li>`
          ).join("")}
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-xl text-gray-700" onclick="toggleMenu()">☰</button>
    </header>

    <!-- Mobile Menu -->
    <nav id="mobile-menu" class="hidden md:hidden text-gray-400 fixed w-full mt-14 bg-white shadow z-50">
      <ul class="flex flex-col gap-3 px-6 py-4 font-semibold uppercase">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"].map(
          (item) => `<li><a href="#${item.toLowerCase()}" class="hover:text-pink-600">${item}</a></li>`
        ).join("")}
      </ul>
    </nav>

    <main class="pt-24">
      <!-- Hero -->
      <section id="home" class="text-center px-6 py-12" data-aos="zoom-in">
        <img src="${
          user?.image ? `data:image/jpeg;base64,${user.image}` : def.image
        }" alt="profile"
          class="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white shadow-lg object-cover" />
        <h2 class="text-3xl md:text-4xl font-extrabold mt-4 capitalize text-gray-900" data-aos="fade-up">
          ${user?.name || def.name}
        </h2>
        <p class="text-pink-600 text-lg mt-2  capitalize" data-aos="fade-up" data-aos-delay="200">${user?.title || def.title}</p>
        <p class="mt-4 text-gray-700 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">${user?.about || def.about}</p>
      </section>

      <!-- About -->
      <section id="about" class="px-6 py-12 bg-white/50">
        <h2 class="text-2xl font-bold text-pink-600 text-center mb-6" data-aos="fade-down">About Me</h2>
        <p class="max-w-3xl mx-auto text-gray-700 leading-relaxed" data-aos="fade-up">${user?.about || def.about}</p>
      </section>

      <!-- Education -->
      <section id="education" class="px-6 py-12">
        <h2 class="text-2xl font-bold text-pink-600 text-center mb-6" data-aos="fade-right">Education</h2>
        <div class="max-w-4xl mx-auto space-y-6">
          ${(user?.educations?.length ? user.educations : def.educations).map(
            (edu, i) => `
            <div class="bg-white rounded-xl p-6 shadow" data-aos="fade-up" data-aos-delay="${i * 100}">
              <p class="font-bold text-gray-900  capitalize">${edu.collegeName}</p>
              <p class="text-gray-600 capitalize">${edu.field}</p>
              <p class="text-gray-500 text-sm">
                ${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}
              </p>
            </div>`
          ).join("")}
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="px-6 py-12 bg-white/50">
        <h2 class="text-2xl font-bold text-pink-600 text-center mb-6" data-aos="fade-left">Experience</h2>
        <div class="max-w-4xl mx-auto space-y-6">
          ${(user?.experiences?.length ? user.experiences : def.experiences).map(
            (exp, i) => `
            <div class="bg-white rounded-xl p-6 shadow" data-aos="fade-up" data-aos-delay="${i * 100}">
              <p class="font-bold text-gray-900 capitalize">${exp.role}</p>
              <p class="text-gray-600 capitalize">${exp.companyName}</p>
              <p class="text-gray-500 text-sm">
                ${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}
              </p>
              <p class="mt-2 text-gray-700">${exp.description}</p>
            </div>`
          ).join("")}
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="px-6 py-12">
        <h2 class="text-2xl font-bold text-pink-600 text-center mb-6" data-aos="fade-up">Projects</h2>
        <div class="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
          ${(user?.projects?.length ? user.projects : def.projects).map(
            (proj, i) => `
            <div class="bg-white rounded-xl p-6 shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="${i * 100}">
              <h3 class="font-semibold text-lg text-gray-900 capitalize">${proj.title}</h3>
              <p class="text-gray-600">${proj.description}</p>
              ${proj.link ? `<a href="${proj.link}" target="_blank" class="text-pink-600 underline mt-2 inline-block">View Project</a>` : ""}
            </div>`
          ).join("")}
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="px-6 py-12 bg-white/50">
        <h2 class="text-2xl font-bold text-pink-600 text-center mb-6" data-aos="fade-down">Skills</h2>
        <div class="flex flex-wrap justify-center gap-3">
          ${(user?.skills?.length ? user.skills : def.skills).map(
            (s, i) => `<span class="px-4 py-2 bg-pink-100 text-pink-700 rounded-full shadow" data-aos="zoom-in" data-aos-delay="${i * 50}">${s.skill}</span>`
          ).join("")}
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="px-6 py-12 text-center">
        <h2 class="text-2xl font-bold text-pink-600 mb-6" data-aos="fade-up">Contact</h2>
        ${(user?.contacts?.length ? user.contacts : def.contacts).map(
          (c, i) => `
          <div class="space-y-2 text-gray-700" data-aos="fade-up" data-aos-delay="${i * 100}">
            <p>📧 ${c.email}</p>
            <p>📞 ${c.phone}</p>
            <p>📍 ${c.address}</p>
          </div>`
        ).join("")}
      </section>
    </main>
  </body>
  </html>
  `;
};
