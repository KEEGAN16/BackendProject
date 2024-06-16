<template>
  <div>
    <!-- Navigation -->
    <div class="navigation-area primary-shadow">
      <div class="top-info-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <ul class="contact-info-bar">
                <li>
                  <i class="fa fa-map-marker"></i> 49 West 32nd Street, New York
                </li>
              </ul>
            </div>
            <div class="col-sm-6 text-right mobile-left">
              <ul class="contact-info-bar">
                <li><i class="fa fa-phone"></i> +02 525 486 232</li>
                <li><i class="fa fa-envelope"></i> eelias.cse@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/"
              ><img src="images/logo.png" alt="Site Logo"
            /></router-link>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="ml15">
                <router-link class="button alt" to="/price-table"
                  >Reserve Your Seat</router-link
                >
              </li>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/speakers">Speakers</router-link></li>
              <li><router-link to="/schedule">Schedule</router-link></li>
              <li class="current">
                <router-link to="/sponsors">Sponsors</router-link>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                  >Pages <span class="caret"></span
                ></a>
                <ul class="dropdown-menu">
                  <li><router-link to="/about">About</router-link></li>
                  <li>
                    <router-link to="/accommodation">Accommodation</router-link>
                  </li>
                  <li><router-link to="/gallery">Gallery</router-link></li>
                  <li>
                    <router-link to="/price-table">Price Table</router-link>
                  </li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li>
                    <router-link to="/blog-single">Blog Single</router-link>
                  </li>
                  <li><router-link to="/404">404 Error</router-link></li>
                </ul>
              </li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- Page Heading -->
    <div class="page-heading">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="breadcrumb">
                <li><router-link to="/">Home</router-link></li>
                <li class="active">Sponsors</li>
              </ul>
              <h2>Sponsors</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sponsors Area -->
    <div class="sponsors-area gray-bg page-section">
      <div class="container">
        <div class="sponsors-nav">
          <ul class="nav nav-tabs text-center">
            <li :class="{ active: activeTab === 'SilverSponsors' }">
              <a @click="activeTab = 'SilverSponsors'" href="#"
                >Silver Sponsors</a
              >
            </li>
            <li :class="{ active: activeTab === 'GoldSponsors' }">
              <a @click="activeTab = 'GoldSponsors'" href="#">Gold Sponsors</a>
            </li>
            <li :class="{ active: activeTab === 'PlatinumSponsors' }">
              <a @click="activeTab = 'PlatinumSponsors'" href="#"
                >Platinum Sponsors</a
              >
            </li>
          </ul>
        </div>

        <div class="tab-content sponsors-contents text-center">
          <div v-if="activeTab === 'SilverSponsors'" class="tab-pane active">
            <div class="row">
              <div
                v-for="sponsor in silverSponsors"
                :key="sponsor.id"
                class="col-md-3 col-sm-6 mb30"
              >
                <div class="single-sponsor primary-shadow white-bg">
                  <img :src="sponsor.image" alt="sponsor" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'GoldSponsors'" class="tab-pane">
            <div class="row">
              <div
                v-for="sponsor in goldSponsors"
                :key="sponsor.id"
                class="col-md-3 col-sm-6 mb30"
              >
                <div class="single-sponsor primary-shadow white-bg">
                  <img :src="sponsor.image" alt="sponsor" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'PlatinumSponsors'" class="tab-pane">
            <div class="row">
              <div
                v-for="sponsor in platinumSponsors"
                :key="sponsor.id"
                class="col-md-3 col-sm-6 mb30"
              >
                <div class="single-sponsor primary-shadow white-bg">
                  <img :src="sponsor.image" alt="sponsor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="become-sponsor text-center">
          <button class="button alt" @click="showModal = true">
            Become a Sponsor
          </button>
        </div>

        <div v-if="showModal" class="modal-overlay">
          <div class="modal-container">
            <div class="modal-header">
              <button @click="showModal = false" class="close">&times;</button>
              <h4>Become a Sponsor</h4>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-sm-6">
                    <input
                      type="text"
                      v-model="form.name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="email"
                      v-model="form.email"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      v-model="form.phone"
                      placeholder="Phone No"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      v-model="form.website"
                      placeholder="Website"
                    />
                  </div>
                  <div class="col-sm-12">
                    <textarea
                      v-model="form.message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div class="col-sm-12">
                    <button type="submit" class="button">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Area -->
    <footer>
      <div class="footer-area gray-bg">
        <div class="container">
          <div class="row">
            <!-- Footer Widgets Here -->
          </div>
        </div>
      </div>
    </footer>
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
