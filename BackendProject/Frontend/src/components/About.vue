<template>
    <div id="app">
      <div class="navigation-area primary-shadow">
        <div class="top-info-bar">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="contact-info-bar">
                  <ul>
                    <li><i class="fa fa-map-marker"></i> 49 West 32nd Street, New York</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 text-end mobile-left">
                <div class="contact-info-bar">
                  <ul>
                    <li><i class="fa fa-phone"></i> +02 525 486 232</li>
                    <li><i class="fa fa-envelope"></i> eelias.cse@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="images/logo.png" alt="Site Logo" /></a>
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
                  <a class="nav-link" href="#">Home</a>
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
  
      <div class="page-heading">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li class="active">About</li>
                </ul>
                <h2>About Us</h2>
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
                <img src="images/about/video-intro.jpg" alt="video-intro" class="img-fluid" />
                <a
                  class="video-play embedded-popup"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8"
                  target="_blank"
                >
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-text">
                <h4>About The Event</h4>
                <p>
                  This event is exclusively for them who want to learn & know about material design
                  principales introduced by Google. Also if you are a designer, then You should know
                  or learn about new design trend like Material Design. Beacuse this is the future of
                  design. In this conferance we will talk about material design like & What you need
                  not to do etc.
                </p>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="single-about primary-shadow white-bg">
                    <h5>Who we are ?</h5>
                    <p>
                      We are the best designer comunity arond the world. We love to share our knowledge
                      & expriences
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="single-about primary-shadow white-bg">
                    <h5>Our Misson</h5>
                    <p>
                      We are the best designer comunity arond the world. We love to share our knowledge
                      & expriences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="testimonials-area image-bg">
        <div class="overlay">
          <div class="container">
            <div class="sub-heading">
              <div class="row">
                <div class="col-md-12">
                  <h4>Testimonals</h4>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="client-pagination" id="testimonial-pager">
                  <a v-for="(client, index) in clients" :key="index" :data-slide-index="index" href="">
                    <img :src="client.thumb" alt="client" />
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <div id="testimonials">
                  <div v-for="(testimonial, index) in testimonials" :key="index" class="single-testimonial">
                    <div class="row">
                      <div class="col-sm-7 mb-3">
                        <blockquote>
                          {{ testimonial.quote }}
                        </blockquote>
                        <ul class="customer-rating">
                          <li v-for="star in 5" :key="star"><i class="fa fa-star"></i></li>
                        </ul>
                        <h4>{{ testimonial.name }}</h4>
                      </div>
                      <div class="col-sm-5">
                        <div class="client-image primary-shadow">
                          <img :src="testimonial.image" alt="client" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="featured-speakers-area page-section">
        <div class="container">
          <div class="row">
            <div v-for="(speaker, index) in speakers" :key="index" class="col-md-6">
              <div class="single-featured-speaker primary-shadow white-bg">
                <div class="row g-0">
                  <div class="col-sm-6">
                    <div class="speaker-cover">
                      <img :src="speaker.image" alt="speakers" class="img-fluid" />
                      <div class="speaker-over">
                        <ul>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="about-speaker">
                      <h6>{{ speaker.title }}</h6>
                      <h4>{{ speaker.name }}</h4>
                      <p>{{ speaker.description }}</p>
                      <a href="" @click.prevent="openModal(index)">More About Me</a>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    :id="'fSpeaker-' + index"
                    tabindex="-1"
                    aria-labelledby="'fSpeakerLabel-' + index"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" :id="'fSpeakerLabel-' + index">{{ speaker.name }}</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img :src="speaker.image" alt="speaker" class="img-fluid mb-3" />
                          <p>{{ speaker.description }}</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-footer-widget">
                <a href="#" class="footer-logo">
                  <img src="images/footer-logo.png" alt="logo" class="img-fluid" />
                </a>
                <p>
                  Evemat is a Responsive HTML Event Template based on material design language
                  invented by google .
                </p>
                <ul class="footer-social">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-footer-widget">
                <h4>SUBSCribe Me !</h4>
                <form action="subscribe.php" class="subscription-form">
                  <input type="text" placeholder="Your Email" class="form-control mb-2" />
                  <input type="submit" value="go" class="btn btn-primary" />
                </form>
                <p>Your Information is safe to us .</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="single-footer-widget">
                <h4>MINI Gallery</h4>
                <ul class="gallery-list">
                  <li v-for="(image, index) in galleryImages" :key="index">
                    <img :src="image" alt="gallery" class="img-fluid" />
                  </li>
                </ul>
                <a href="#" class="more-image">More Images</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="footer-bar-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <span>Copyright 2015 . Designed By <a href="#">BestPixels</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        clients: [
          { thumb: "images/testimonial/thumbs/1.jpg" },
          { thumb: "images/testimonial/thumbs/2.jpg" },
          // Add other client thumbs here
        ],
        testimonials: [
          {
            quote:
              "This is the best event i had ever joined. Most exiting this is speakers are so exprienced & helpfull. Also the decoretion was also very good. In one word 'Just Awesome'",
            name: "DEazel Kameru",
            image: "images/testimonial/1.jpg",
          },
          // Add other testimonials here
        ],
        speakers: [
          {
            title: "Event Organizer",
            name: "Ethan Taylor",
            description:
              "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about somthing in your dream , also you need to be creative .",
            image: "images/speakers/featured/1.jpg",
          },
          // Add other speakers here
        ],
        galleryImages: [
          "images/gallery/thumb/1.jpg",
          "images/gallery/thumb/2.jpg",
          // Add other gallery images here
        ],
      };
    },
    methods: {
      openModal(index) {
        const modal = new bootstrap.Modal(document.getElementById(`fSpeaker-${index}`));
        modal.show();
      },
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  