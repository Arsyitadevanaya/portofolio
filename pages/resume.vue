<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <!-- Education -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)
          </h4>
          <span>2022 — 2025</span>
          <p class="timeline-text">
            Majoring in Informatics Engineering. Focused on web and mobile application development using modern frameworks such as Nuxt.js and Flutter.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            State Senior High School 17 Surabaya
          </h4>
          <span>2018 — 2021</span>
          <p class="timeline-text">
            Concentrated on natural sciences (IPA).
          </p>
        </li>
      </ol>
    </section>

    <!-- Experience -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="briefcase-outline" />
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Frontend Developer</h4>
          <span>Apr 2025 — Present · ERA KITA · Full-time</span>
          <p class="timeline-text">
            Developing mobile applications using <strong>Flutter</strong> and web applications using <strong>Nuxt.js</strong>.
            Responsible for implementing responsive UI, ensuring optimal performance, and maintaining consistent design across platforms.
          </p>
          <p class="timeline-text"><em>Skills:</em> JavaScript, TypeScript, Flutter, Nuxt.js, UI/UX Implementation, GraphQL</p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Frontend Developer Intern</h4>
          <span>Jul 2024 — Dec 2024 · PT Wahana Meditek Indonesia · Internship</span>
          <p class="timeline-text">
            Contributed as a Frontend Engineer in developing the UI/UX for <strong>Adameds V3</strong> and <strong>Adampartner</strong> web applications.
            Ensured responsive design, smooth backend integration, and enhanced performance optimization.
          </p>
          <p class="timeline-text"><em>Skills:</em> JavaScript, TypeScript, Vue.js, REST API, UI Optimization</p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Product Manager Intern</h4>
          <span>Aug 2023 — Dec 2023 · Eduskill · Internship</span>
          <p class="timeline-text">
            Contributed to product research and strategy. Defined product roadmap, collaborated with development teams, and ensured that product features aligned with both user needs and business goals.
          </p>
          <p class="timeline-text"><em>Skills:</em> Product Management, Research, Agile, Communication</p>
        </li>
      </ol>
    </section>

    <!-- Skills -->
    <section class="skill">
      <h3 class="h3 skills-title">My Skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Frontend Development</h5>
            <data value="90">90%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Mobile App Development (Flutter)</h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">UI/UX Design</h5>
            <data value="75">75%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 75%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Product Management</h5>
            <data value="70">70%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
