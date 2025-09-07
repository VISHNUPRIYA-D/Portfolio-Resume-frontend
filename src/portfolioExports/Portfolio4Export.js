// Portfolio4Export.js
export const Portfolio4Export = (user, def) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${user?.name || def.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      html { scroll-behavior: smooth; }
      .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
      .reveal.show { opacity: 1; transform: translateY(0); }
      .reveal-left { opacity: 0; transform: translateX(-40px); transition: all 0.8s ease-out; }
      .reveal-left.show { opacity: 1; transform: translateX(0); }
      .reveal-right { opacity: 0; transform: translateX(40px); transition: all 0.8s ease-out; }
      .reveal-right.show { opacity: 1; transform: translateX(0); }
      .scale-in { opacity: 0; transform: scale(0.8); transition: all 0.6s ease-out; }
      .scale-in.show { opacity: 1; transform: scale(1); }
    </style>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add("show");
            }
          });
        }, { threshold: 0.15 });

        document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .scale-in").forEach(el => observer.observe(el));
      });

      function toggleMenu() {
        const nav = document.getElementById('mobile-menu');
        nav.classList.toggle('hidden');
      }
    </script>
  </head>
  <body class="bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 font-sans">
   

    <main class="pt-20">
      <!-- Hero Section -->
      <section class="flex flex-col items-center text-center py-12 px-4 reveal">
        <img src="${
          user?.image ? `data:image/jpeg;base64,${user.image}` : def.image
        }" alt="Profile"
          class="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full border-4 border-gray-400 shadow-lg object-cover" />
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 capitalize">
          ${user?.name || def.name}
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-purple-600 mt-2">
          ${user?.title || def.title}
        </p>
      </section>

      <!-- About Section -->
      <section id="about" class="px-4 sm:px-10 lg:px-20 py-12 reveal-left">
        <div class="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
          <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-4">About Me</h2>
          <p class="text-gray-700 leading-relaxed text-base">
            ${user?.about || def.about}
          </p>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="px-4 sm:px-10 lg:px-20 py-12 reveal">
        <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-6">Education</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          ${(user?.educations?.length ? user.educations : def.educations)
            .map(
              (edu) => `
              <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition reveal-left">
                <h3 class="font-bold text-lg capitalize">${edu.collegeName}</h3>
                <p class="text-purple-600 capitalize">${edu.field}</p>
                <p class="text-sm text-gray-500">
                  ${new Date(edu.startDate).getFullYear()} - ${new Date(
                edu.endDate
              ).getFullYear()}
                </p>
              </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="px-4 sm:px-10 lg:px-20 py-12 reveal">
        <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-6">Experience</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          ${(user?.experiences?.length ? user.experiences : def.experiences)
            .map(
              (exp) => `
              <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition reveal-right">
                <h3 class="font-bold text-lg capitalize">${exp.role}</h3>
                <p class="text-purple-600 capitalize">${exp.companyName}</p>
                <p class="text-sm text-gray-500">
                  ${new Date(exp.startDate).getFullYear()} - ${new Date(
                exp.endDate
              ).getFullYear()}
                </p>
                <p class="text-gray-600 mt-2">${exp.description}</p>
              </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="px-4 sm:px-10 lg:px-20 py-12 reveal">
        <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-6">Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${(user?.projects?.length ? user.projects : def.projects)
            .map(
              (proj) => `
              <div class="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition reveal">
                <h3 class="font-bold text-lg capitalize">${proj.title}</h3>
                <p class="text-gray-600">${proj.description}</p>
              </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="px-4 sm:px-10 lg:px-20 py-12 reveal">
        <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-6">Skills</h2>
        <div class="flex flex-wrap gap-3">
          ${(user?.skills?.length ? user.skills : def.skills)
            .map(
              (s) => `
              <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow-sm scale-in">
                ${s.skill}
              </span>`
            )
            .join("")}
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="px-4 sm:px-10 lg:px-20 py-12 reveal">
        <div class="bg-white p-6 sm:p-10 rounded-2xl shadow-lg text-center">
          <h2 class="text-2xl lg:text-3xl font-semibold text-purple-600 mb-6">Contact Me</h2>
          ${(user?.contacts?.length ? user.contacts : def.contacts)
            .map(
              (cont) => `
              <div class="text-base space-y-2">
                <p class="flex items-center justify-center gap-2 text-gray-700">📧 ${cont.email}</p>
                <p class="flex items-center justify-center gap-2 text-gray-700">📞 ${cont.phone}</p>
                <p class="flex items-center justify-center gap-2 text-gray-700">📍 ${cont.address}</p>
              </div>`
            )
            .join("")}
        </div>
      </section>
    </main>
  </body>
  </html>
  `;
};
