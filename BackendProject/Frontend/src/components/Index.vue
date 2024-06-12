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
          <a class="navbar-brand" href="#"
            ><img src="images/logo.png" alt="Site Logo"
          /></a>
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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Speakers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Schedule</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sponsors</a>
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
                  <li><a class="dropdown-item" href="#">About</a></li>
                  <li><a class="dropdown-item" href="#">Accommodation</a></li>
                  <li><a class="dropdown-item" href="#">Gallery</a></li>
                  <li><a class="dropdown-item" href="#">Price Table</a></li>
                  <li><a class="dropdown-item" href="#">Blog</a></li>
                  <li><a class="dropdown-item" href="#">Blog Single</a></li>
                  <li><a class="dropdown-item" href="#">404 Error</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item ms-3">
                <a class="btn btn-primary" href="#">Reserve Your Seat</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="header-area" id="home-header">
      <div class="header-slide header-slide-1">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3>11 - 16 December 2026 , <span>York</span></h3>
                <h1><small>Art Designer</small> Zoom</h1>
                <ul class="buttons">
                  <li>
                    <a href="#" class="btn btn-outline-light">Register Now</a>
                  </li>
                  <li>
                    <a href="#" class="btn btn-outline-light">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-slide header-slide-2">
        <div class="overlay">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-12">
                <h3>14 - 26 December 2016 , <span>New York</span></h3>
                <h1><small>Designer Community</small> Meetup</h1>
                <ul class="buttons">
                  <li>
                    <a href="#" class="btn btn-outline-light">Register Now</a>
                  </li>
                  <li>
                    <a href="#" class="btn btn-outline-light">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-area gray-bg" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="video-intro primary-shadow">
              <img
                src="images/about/video-intro.jpg"
                alt="video-intro"
                class="img-fluid"
              />
              <a
                class="video-play embedded-popup"
                href="https://www.youtube.com/watch?v=SZEflIVnhH8"
              >
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-text">
              <h4>About The Event</h4>
              <p>
                This event is exclusively for those who want to learn & know
                about material design principles introduced by Google. Also if
                you are a designer, then you should know or learn about new
                design trends like Material Design because this is the future of
                design. In this conference, we will talk about material design
                like & what you need not to do etc.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="single-about primary-shadow white-bg">
                  <h5>Who we are ?</h5>
                  <p>
                    We are the best designer community around the world. We love
                    to share our knowledge & experiences.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="single-about primary-shadow white-bg">
                  <h5>Our Mission</h5>
                  <p>
                    We are the best designer community around the world. We love
                    to share our knowledge & experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="speakers-area white-bg">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Our Speakers</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 mb-3"
            v-for="(speaker, index) in speakers"
            :key="index"
          >
            <div class="single-speaker primary-shadow white-bg">
              <div class="speaker-cover">
                <img :src="speaker.image" alt="cover" class="img-fluid" />
                <div class="sperker-cover-over">
                  <div class="speakers-thought">
                    <p>{{ speaker.thought }}</p>
                    <a href="" @click.prevent="openModal(speaker)"
                      >More About Me</a
                    >
                  </div>
                </div>
                <ul class="speaker-social">
                  <li v-for="(social, index) in speaker.social" :key="index">
                    <a :href="social.link"><i :class="social.icon"></i></a>
                  </li>
                </ul>
                <h6>
                  Designer at <a href="">{{ speaker.company }}</a>
                </h6>
              </div>
              <div class="speaker-name">
                <h5>{{ speaker.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Speaker Modal -->
      <div
        class="modal fade"
        id="speaker-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="speakerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="speakerModalLabel">
                {{ selectedSpeaker.name }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <img
                    :src="selectedSpeaker.image"
                    alt="speaker"
                    class="img-fluid"
                  />
                </div>
                <div class="col-sm-6">
                  <h6>{{ selectedSpeaker.title }}</h6>
                  <ul class="list-inline">
                    <li
                      class="list-inline-item"
                      v-for="(social, index) in selectedSpeaker.social"
                      :key="index"
                    >
                      <a :href="social.link"><i :class="social.icon"></i></a>
                    </li>
                  </ul>
                  <p>{{ selectedSpeaker.description }}</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add other sections here in similar fashion -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: "Sophia Tailor",
          title: "Designer at Google",
          image: "images/speakers/1.jpg",
          company: "Google",
          thought:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream, also you need to be creative.",
          social: [
            { icon: "fa fa-facebook", link: "#" },
            { icon: "fa fa-twitter", link: "#" },
            { icon: "fa fa-dribbble", link: "#" },
          ],
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream, also you need to be creative.",
        },
        // Add more speakers here
      ],
      selectedSpeaker: {},
    };
  },
  methods: {
    openModal(speaker) {
      this.selectedSpeaker = speaker;
      const modal = new bootstrap.Modal(
        document.getElementById("speaker-modal")
      );
      modal.show();
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
