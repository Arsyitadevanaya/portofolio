<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar-2.png" alt="Azad Furkan ŞAKAR" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Arsyita Devanaya Arianto">
          Arsyita Devanaya
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Frontend Engineer</span>
          <span>Web developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:arsyitadevanaya@gmail.com" class="contact-link">arsyitadevanaya@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/Arsyitadevanaya" class="contact-link" target="_blank">Arsyitadevanaya</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/arsyita-devanaya/" class="contact-link" target="_blank">Arsyita Devanaya Arianto</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Surabaya, Indonesia</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/arsyita_d" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
