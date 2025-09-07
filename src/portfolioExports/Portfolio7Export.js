// Portfolio7Export.js
export const Portfolio7Export = (user, def) => {
  const u = user || def;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${u.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    <style>
      /* Glow Hover */
      .glow-card {
        transition: all 0.3s ease;
      }
      .glow-card:hover {
        box-shadow: 0 0 20px rgba(34,211,238,0.3);
        border-color: rgba(34,211,238,0.5);
      }

      /* Animations */
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes zoomIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }

      .animate-fadeUp { animation: fadeInUp 0.6s ease forwards; }
      .animate-fadeLeft { animation: fadeInLeft 0.6s ease forwards; }
      .animate-zoomIn { animation: zoomIn 0.6s ease forwards; }
      .hidden-anim { opacity: 0; }
    </style>
  </head>
  <body class="scroll-smooth bg-gradient-to-br from-black via-gray-900 to-gray-800 text-zinc-200 min-h-screen">

    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 flex justify-between items-center px-4 sm:px-6 md:px-10 py-3">
      <h1 class="text-lg sm:text-xl md:text-2xl font-bold capitalize text-cyan-300">${u.name}</h1>

      <!-- Desktop Nav -->
      <nav class="hidden md:block">
        <ul class="flex gap-5 font-semibold uppercase text-zinc-300 text-sm md:text-base">
          ${["Home","About","Education","Experience","Projects","Skills","Contact"]
            .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-cyan-300 transition">${item}</a></li>`)
            .join("")}
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden text-xl sm:text-2xl text-zinc-300">
        <i class="fas fa-bars"></i>
      </button>
    </header>

    <!-- Mobile Menu -->
    <nav id="mobile-menu" class="hidden md:hidden bg-gray-900 border-b border-gray-800">
      <ul class="flex flex-col gap-3 px-4 py-4 font-semibold uppercase text-zinc-400 text-sm">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"]
          .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-cyan-300 transition">${item}</a></li>`)
          .join("")}
      </ul>
    </nav>

    <!-- Hero -->
    <section id="home" class="pt-5 sm:pt-12 pb-5 sm:pb-12 px-2 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
      <div class="text-center md:text-left hidden-anim" data-anim="fadeLeft">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug capitalize">
          <span class="text-zinc-200 ">${u.name}</span><br/>
          <span class="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">${u.title}</span>
        </h1>
        <p class="mt-4 text-xs sm:text-sm md:text-base text-zinc-400">${u.about}</p>
      </div>
      <div class="flex justify-center hidden-anim" data-anim="zoomIn">
        <img src="${user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}" class="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-4 border-cyan-300 shadow-lg object-cover"/>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 bg-black/40 text-center max-w-full mx-auto hidden-anim" data-anim="fadeUp">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">About Me</h2>
      <p class="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/60 to-black/60 p-2 sm:p-6 shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-300/30 transition">${u.about}</p>
    </section>

    <!-- Education -->
    <section id="education" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 max-w-full mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6 text-center">Education</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        ${(u.educations || []).map(edu => `
          <div class="glow-card hidden-anim relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/60 to-black/60 p-2 sm:p-6 shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-300/30 transition" data-anim="fadeUp">
            <h3 class="text-base sm:text-lg font-bold text-cyan-300 capitalize">${edu.schoolName}</h3>
            <p class="text-xs sm:text-sm text-zinc-400 capitalize">${edu.collegeName}</p>
            <p class="text-xs sm:text-sm text-zinc-400 capitalize">${edu.field}</p>
            <p class="text-xs sm:text-sm text-zinc-500">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 bg-black/40 max-w-full mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300 mb-4 sm:mb-6 text-center">Experience</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        ${(u.experiences || []).map(exp => `
          <div class="glow-card hidden-animrelative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/60 to-black/60 p-2 sm:p-6 shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-300/30 transition" data-anim="fadeUp">
            <h3 class="text-base sm:text-lg font-bold text-purple-300 capitalize">${exp.companyName}</h3>
            <p class="text-xs sm:text-sm text-zinc-400 capitalize">${exp.role}</p>
            <p class="text-xs sm:text-sm text-zinc-500 mt-2">${exp.description}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 max-w-full mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-300 mb-4 sm:mb-6 text-center">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        ${(u.projects || []).map(proj => `
          <div class="glow-card hidden-anim relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/60 to-black/60 p-2 sm:p-6 shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-300/30 transition" data-anim="fadeUp">
            <h3 class="text-base sm:text-lg font-bold text-fuchsia-300 capitalize">${proj.title}</h3>
            <p class="text-xs sm:text-sm text-zinc-400">${proj.description}</p>
            <p class="text-xs sm:text-sm text-cyan-400 mt-1 capitalize">${proj.tech}</p>
            ${proj.link ? `<a href="${proj.link}" target="_blank" class="text-xs sm:text-sm text-cyan-300 underline mt-2 inline-block">View Project</a>` : ""}
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 bg-black/40 text-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Skills</h2>
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
        ${(u.skills || []).map(skill => `
          <span class="glow-card hidden-anim px-3 sm:px-4 py-1 sm:py-2 bg-cyan-300/20 text-cyan-300 rounded-full capitalize shadow text-xs sm:text-sm md:text-base border border-cyan-400/20" data-anim="zoomIn">${skill.skill}</span>
        `).join("")}
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-4 sm:px-8 py-5 sm:py-14 md:py-20 text-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Contact</h2>
      ${(u.contacts || []).map(cont => `
        <div class="glow-card hidden-anim bg-black/40 p-4 sm:p-6 rounded-xl space-y-2 text-zinc-300 max-w-full mx-auto mb-4 border border-cyan-400/20" data-anim="fadeUp">
          <p class="text-xs sm:text-sm md:text-base"><i class="fas fa-envelope text-cyan-300"></i> ${cont.email}</p>
          <p class="text-xs sm:text-sm md:text-base"><i class="fas fa-phone text-cyan-300"></i> ${cont.phone}</p>
          <p class="text-xs sm:text-sm md:text-base"><i class="fas fa-map-marker-alt text-cyan-300"></i> ${cont.address}</p>
        </div>
      `).join("")}
    </section>

    <script>
      // Mobile Menu Toggle
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        menuBtn.innerHTML = mobileMenu.classList.contains("hidden") 
          ? '<i class="fas fa-bars"></i>' 
          : '<i class="fas fa-times"></i>';
      });

      // Scroll Animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const anim = entry.target.getAttribute("data-anim");
            entry.target.classList.add("animate-" + anim);
            entry.target.classList.remove("hidden-anim");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll(".hidden-anim").forEach(el => observer.observe(el));
    </script>
  </body>
  </html>
  `;
};
