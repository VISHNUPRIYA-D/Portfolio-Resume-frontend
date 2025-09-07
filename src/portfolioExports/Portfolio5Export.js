// Portfolio5Export.js
export const Portfolio5Export = (user, def) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${user?.name || def.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  </head>
  <body class="bg-gradient-to-br from-blue-50 to-pink-50 text-gray-800 font-sans">
    
    <!-- Navbar -->
    <nav class="bg-white shadow-md z-50 relative">
      <div class="max-w-6xl mx-auto flex justify-between items-center px-3 md:px-6 py-2 sm:py-4">
        <h1 class="text-xl font-bold text-purple-600 capitalize">
          ${user?.name || def.name}
        </h1>
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <ul class="flex gap-6 text-gray-700 font-medium">
            ${["about","education","experience","projects","skills","contact"]
              .map(sec => 
                `<li><a href="#${sec}" class="cursor-pointer hover:text-purple-600 transition">
                  ${sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a></li>`
              ).join("")}
          </ul>
        </div>
        <!-- Hamburger -->
        <button id="menu-btn" class="md:hidden text-gray-700 text-xl">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <!-- Mobile Menu -->
      <ul id="mobile-menu" class="hidden flex-col gap-3 px-4 py-3 bg-white text-gray-700 font-medium md:hidden">
        ${["about","education","experience","projects","skills","contact"]
          .map(sec => 
            `<li><a href="#${sec}" class="block py-2 hover:text-purple-600 transition">
              ${sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a></li>`
          ).join("")}
      </ul>
    </nav>

    <!-- Hero -->
    <section id="about" class="sm:min-h-screen flex flex-col justify-center items-center text-center px-6 py-12">
      <img src="${user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}" 
        alt="Profile"
        class="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl mb-6 object-cover"
        data-aos="zoom-in" data-aos-duration="800" />
      <h1 class="text-3xl md:text-5xl font-bold capitalize text-gray-900" data-aos="fade-up" data-aos-duration="1000">
        ${user?.name || def.name}
      </h1>
      <p class="text-xl text-purple-600 mt-2 capitalize" data-aos="fade-up" data-aos-delay="200">
        ${user?.title || def.title}
      </p>
    </section>

    <!-- Education -->
    <section id="education" class="px-6 md:px-20 py-20 bg-white">
      <h2 class="text-3xl font-bold text-purple-600 mb-8" data-aos="fade-right">Education</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${(user?.educations?.length ? user.educations : def.educations).map((edu, i) => `
          <div class="p-6 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl shadow-md"
               data-aos="fade-up" data-aos-delay="${i * 100}">
            <h3 class="font-bold text-lg capitalize">${edu.collegeName}</h3>
            <p class="capitalize">${edu.field}</p>
            <p class="text-gray-500">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="px-6 md:px-20 py-20 bg-gray-50">
      <h2 class="text-3xl font-bold text-purple-600 mb-8" data-aos="fade-left">Experience</h2>
      <div class="space-y-6">
        ${(user?.experiences?.length ? user.experiences : def.experiences).map((exp, i) => `
          <div class="p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-400"
               data-aos="fade-up" data-aos-delay="${i * 100}">
            <h3 class="font-bold text-lg capitalize">${exp.role}</h3>
            <p class="text-purple-600 capitalize">${exp.companyName}</p>
            <p class="text-gray-500">${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}</p>
            <p class="mt-2 text-gray-600">${exp.description}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 md:px-20 py-20 bg-white">
      <h2 class="text-3xl font-bold text-purple-600 mb-8" data-aos="fade-right">Projects</h2>
      <div class="grid md:grid-cols-3 gap-6">
        ${(user?.projects?.length ? user.projects : def.projects).map((proj, i) => `
          <div class="p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl shadow-md hover:scale-105 transition"
               data-aos="zoom-in" data-aos-delay="${i * 100}">
            <h3 class="font-bold text-lg capitalize">${proj.title}</h3>
            <p class="text-gray-600">${proj.description}</p>
          </div>`).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-6 md:px-20 py-20 bg-gray-50">
      <h2 class="text-3xl font-bold text-purple-600 mb-8" data-aos="fade-left">Skills</h2>
      <div class="flex flex-wrap gap-3">
        ${(user?.skills?.length ? user.skills : def.skills).map((s, i) => `
          <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full shadow-sm"
                data-aos="zoom-in" data-aos-delay="${i * 50}">
            ${s.skill}
          </span>`).join("")}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-6 md:px-20 py-20 bg-white text-center">
      <h2 class="text-3xl font-bold text-purple-600 mb-6" data-aos="fade-up">Contact</h2>
      ${(user?.contacts?.length ? user.contacts : def.contacts).map((cont, i) => `
        <div class="mb-2" data-aos="fade-up" data-aos-delay="${i * 100}">
          <p class="text-gray-600">${cont.email}</p>
          <p class="text-gray-600">${cont.phone}</p>
          <p class="text-gray-600">${cont.address}</p>
        </div>`).join("")}
    </section>

    <!-- Scripts -->
    <script>
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      let menuOpen = false;

      menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle("hidden", !menuOpen);
        menuBtn.innerHTML = menuOpen 
          ? '<i class="fa-solid fa-xmark"></i>' 
          : '<i class="fa-solid fa-bars"></i>';
      });

      document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
          menuOpen = false;
          mobileMenu.classList.add("hidden");
          menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
      });
    </script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>AOS.init({ once: true, duration: 800, easing: "ease-out" });</script>
  </body>
  </html>
  `;
};
