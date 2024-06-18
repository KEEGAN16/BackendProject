<template>
  <div id="app">
    <div class="navigation-area primary-shadow">
      <div class="top-info-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="contact-info-bar">
                <ul>
                  <li>
                    <i class="fa fa-map-marker"></i>Študentské centrum UKF,
                    Dražovská 2, Nitra
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 text-end mobile-left">
              <div class="contact-info-bar">
                <ul>
                  <li><i class="fa fa-phone"></i> +421 324 797 219</li>
                  <li><i class="fa fa-envelope"></i> eelias.cse@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <img src="images/logo.png" alt="Site Logo" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/speakers"
                  >Speakers</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/schedule"
                  >Schedule</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/sponsors"
                  >Sponsors</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/about"
                      >About</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/accommodation"
                      >Accommodation</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/gallery"
                      >Gallery</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/price-table"
                      >Price Table</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/blog"
                      >Blog</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/blog-single"
                      >Blog Single</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/404"
                      >404 Error</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                  >Contact</router-link
                >
              </li>
              <li class="nav-item ms-3">
                <router-link class="btn btn-primary" to="/price-table"
                  >Reserve Your Seat</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/UserStore.js";
import { useConferenceStore } from "@/stores/ConferenceStore.js";

const userStore = useUserStore();
const conferenceStore = useConferenceStore();

onMounted(() => {
  userStore.fetchUser();
  conferenceStore.checkConference();
});
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
