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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "SilverSponsors",
      showModal: false,
      silverSponsors: [
        { id: 1, image: "images/sponsor1.png" },
        { id: 2, image: "images/sponsor2.png" },
        { id: 3, image: "images/sponsor3.png" },
        { id: 4, image: "images/sponsor4.png" },
      ],
      goldSponsors: [
        { id: 5, image: "images/sponsor5.png" },
        { id: 6, image: "images/sponsor6.png" },
        { id: 7, image: "images/sponsor7.png" },
        { id: 8, image: "images/sponsor8.png" },
      ],
      platinumSponsors: [
        { id: 9, image: "images/sponsor9.png" },
        { id: 10, image: "images/sponsor10.png" },
        { id: 11, image: "images/sponsor11.png" },
        { id: 12, image: "images/sponsor12.png" },
      ],
      form: {
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
      console.log("Form submitted:", this.form);
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
@import "assets/css/bootstrap.css";
@import "lib/Magnific-Popup/dist/magnific-popup.css";
@import "lib/Font-Awesome/css/font-awesome.min.css";
@import "lib/owl.carousel/dist/assets/owl.carousel.min.css";
@import "lib/owl.carousel/dist/assets/owl.theme.default.min.css";
@import "lib/aos/dist/aos.css";
@import "css/style.css";

/* Scoped styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close {
  background: none;
  border: none;
  font-size: 1.5em;
}
</style>
