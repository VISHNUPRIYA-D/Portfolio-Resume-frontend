export const Portfolio1Export = (user,def)=>{
    return `
    <!DOCTYPE html>
   <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${user?.name || def.name} - Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: black; color: #d1d5db; font-family: sans-serif; }
    .menu-open nav { display: block !important; }
  </style>
</head>
<body class="sm:min-h-screen">

  <!-- Navbar -->
  <header class="flex justify-between items-center px-4 py-3 border-b border-gray-800">
    <h1 class="text-xl font-bold text-white capitalize">
      <span class="text-red-500 capitalize0">${(user?.name || def.name).split(" ")[0]}</span>
    </h1>

    <!-- Desktop Menu -->
    <nav class="hidden md:block">
      <ul class="flex gap-4 text-sm font-semibold uppercase text-gray-400">
        ${["Home","About","Education","Experience","Projects","Skills","Contact"]
          .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-red-500 transition">${item}</a></li>`)
          .join("")}
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button id="menu-btn" class="md:hidden text-gray-300 text-2xl">☰</button>
  </header>

  <!-- Mobile Menu -->
  <nav id="mobile-menu" class="hidden bg-gray-900 border-b border-gray-800 md:hidden">
    <ul class="flex flex-col gap-3 px-4 py-2 text-sm font-semibold uppercase text-gray-400">
      ${["Home","About","Education","Experience","Projects","Skills","Contact"]
        .map(item => `<li><a href="#${item.toLowerCase()}" class="hover:text-red-500 transition">${item}</a></li>`)
        .join("")}
    </ul>
  </nav>

  <!-- Hero -->
  <section id="home" class="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 gap-6">
    <div class="max-w-xl text-center md:text-left">
      <p class="text-blue-400 text-lg md:text-xl">Hi There! I'm</p>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">${user?.title || def.title}</h2>
      <p class="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">${user?.about || def.about}</p>
    </div>
    <div class="flex justify-center md:justify-end">
      <img src="${user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}" 
           alt="Profile" class="rounded-2xl shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover"/>
    </div>
  </section>

 <!-- Education -->
<section id="education" class="px-6 py-10 border-t border-gray-800">
  <h2 class="text-2xl md:text-3xl text-red-500 font-bold mb-6">Education</h2>
  <div class="grid gap-4 grid-cols-1">
    ${(user?.educations?.length ? user.educations : def.educations)
      .map(edu => `
        <div class="bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg md:text-xl text-white font-semibold">${edu.collegeName}</h3>
          <p class="text-gray-400">${edu.field}</p>
          <p class="text-gray-500">${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}</p>
        </div>
      `).join("")}
  </div>
</section>

<!-- Experience -->
<section id="experience" class="px-6 py-10 border-t border-gray-800">
  <h2 class="text-2xl md:text-3xl text-red-500 font-bold mb-6">Experience</h2>
  <div class="grid gap-4 grid-cols-1">
    ${(user?.experiences?.length ? user.experiences : def.experiences)
      .map(exp => `
        <div class="bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg md:text-xl text-white font-semibold">${exp.companyName}</h3>
          <p class="text-gray-400">${exp.role}</p>
          <p class="text-gray-400>${exp.description}</p>
          <p class="text-gray-500">${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate).getFullYear()}</p>
          
        </div>
      `).join("")}
  </div>
</section>

<!-- Projects -->
<section id="projects" class="px-6 py-10 border-t border-gray-800">
  <h2 class="text-2xl md:text-3xl text-red-500 font-bold mb-6">Projects</h2>
  <div class="grid gap-4 grid-cols-1">
    ${(user?.projects?.length ? user.projects : def.projects)
      .map(proj => `
        <div class="bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg md:text-xl text-white font-semibold">${proj.title}</h3>
          <p class="text-gray-400 mt-1">${proj.description}</p>
          <p class="text-gray-500 mt-1">Tech: ${proj.tech}</p>
          <a href="${proj.link}" target="_blank" class="text-blue-400 underline mt-2 inline-block break-all">${proj.link}</a>
        </div>
      `).join("")}
  </div>
</section>

<!-- Skills -->
<section id="skills" class="px-6 py-10 border-t border-gray-800">
  <h2 class="text-2xl md:text-3xl text-red-500 font-bold mb-6">Skills</h2>
  <ul class="flex flex-wrap gap-3 justify-start">
    ${(user?.skills?.length ? user.skills : def.skills)
      .map(s => `<li class="px-3 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded-full text-sm md:text-base">${s.skill} (${s.level})</li>`)
      .join("")}
  </ul>
</section>

<!-- Contact -->
<section id="contact" class="px-6 py-10 border-t border-gray-800 text-white">
  <h2 class="text-2xl md:text-3xl text-red-500 font-bold mb-6">Contact</h2>
  <div class="grid gap-4 grid-cols-1">
    ${(user?.contacts?.length ? user.contacts : def.contacts)
      .map(cont => `
        <div class="bg-gray-800 p-4 rounded-lg shadow">
          <p><strong>Email:</strong> ${cont.email}</p>
          <p><strong>Phone:</strong> ${cont.phone}</p>
          <p><strong>Address:</strong> ${cont.address}</p>
        </div>
      `).join("")}
  </div>

  </section>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("menu-btn");
      const menu = document.getElementById("mobile-menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    });
  </script>
</body>
</html>
  `;
};