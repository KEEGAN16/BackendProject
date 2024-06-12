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
                <a class="nav-link active" href="#">Speakers</a>
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
                <li class="active">Speakers</li>
              </ul>
              <h2>Speakers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-speakers-area mb-30">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Featured SPEAKERS</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" v-for="(speaker, index) in featuredSpeakers" :key="index">
            <div class="single-featured-speaker primary-shadow white-bg">
              <div class="row no-margin">
                <div class="col-sm-6 no-padding">
                  <div class="speaker-cover">
                    <img :src="speaker.img" alt="speakers" />
                    <div class="speaker-over">
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 no-padding">
                  <div class="about-speaker">
                    <h6>{{ speaker.title }}</h6>
                    <h4>{{ speaker.name }}</h4>
                    <p>{{ speaker.description }}</p>
                    <a href="" data-bs-toggle="modal" :data-bs-target="'#fSpeaker-' + index">More About Me</a>
                  </div>
                </div>
                <div class="modal fade" :id="'fSpeaker-' + index" tabindex="-1">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-2"></div>
                      <div class="col-md-8">
                        <div class="speaker-details white-bg primary-shadow">
                          <div class="row no-margin">
                            <div class="col-sm-5 no-padding">
                              <div class="speaker-images-slider">
                                <img :src="speaker.img" alt="speaker" />
                              </div>
                            </div>
                            <div class="col-sm-7 no-padding">
                              <div class="speaker-details-texts">
                                <div class="sdt-top">
                                  <h4>{{ speaker.name }}</h4>
                                  <h6>{{ speaker.title }}</h6>
                                  <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                  </ul>
                                </div>
                                <div class="sdt-bottom">
                                  <p>{{ speaker.modalDescription }}</p>
                                  <a href="" class="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="speakers-area grey-bg">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Other Speakers</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 mb-3" v-for="(speaker, index) in otherSpeakers" :key="index">
            <div class="single-speaker primary-shadow white-bg">
              <div class="speaker-cover">
                <img :src="speaker.img" alt="cover" />
                <div class="sperker-cover-over">
                  <div class="speakers-thought">
                    <p>{{ speaker.description }}</p>
                    <a href="" data-bs-toggle="modal" :data-bs-target="'#Speaker-' + index">More About Me</a>
                  </div>
                </div>
                <ul class="speaker-social">
                  <li><a href=""><i class="fa fa-facebook"></i></a></li>
                  <li><a href=""><i class="fa fa-twitter"></i></a></li>
                  <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                </ul>
                <h6>Designer at <a href=""> Google</a></h6>
              </div>
              <div class="modal fade" :id="'Speaker-' + index" tabindex="-1">
                <div class="container">
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                      <div class="speaker-details white-bg primary-shadow">
                        <div class="row no-margin">
                          <div class="col-sm-6 no-padding">
                            <div class="speaker-images-slider">
                              <img :src="speaker.img" alt="speaker" />
                            </div>
                          </div>
                          <div class="col-sm-6 no-padding">
                            <div class="speaker-details-texts">
                              <div class="sdt-top">
                                <h4>{{ speaker.name }}</h4>
                                <h6>Designer at Google</h6>
                                <ul>
                                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                </ul>
                              </div>
                              <div class="sdt-bottom">
                                <p>{{ speaker.modalDescription }}</p>
                                <p>Design is all about the way you look on anything you see, or how you do imagine about something.</p>
                                <a href="" class="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2"></div>
                  </div>
                </div>
              </div>
              <div class="speaker-name">
                <h5>{{ speaker.name }}</h5>
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
                <img src="images/footer-logo.png" alt="logo" />
              </a>
              <p>Evemat is a Responsive HTML Event Template based on material design language invented by Google.</p>
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
              <h4>Subscribe Me!</h4>
              <form action="subscribe.php" class="subscription-form">
                <input type="text" placeholder="Your Email" />
                <input type="submit" value="go" />
              </form>
              <p>Your Information is safe with us.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="single-footer-widget">
              <h4>Mini Gallery</h4>
              <ul class="gallery-list">
                <li v-for="(image, index) in galleryImages" :key="index"><img :src="image" alt="gallery" /></li>
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
            <span>Copyright 2015. Designed By <a href="#">BestPixels</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredSpeakers: [
        {
          title: "Event Organizer",
          name: "Ethan Taylor",
          img: "images/speakers/featured/1.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
        {
          title: "Title Sponsor",
          name: "Thomas Kelly",
          img: "images/speakers/featured/2.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
      ],
      otherSpeakers: [
        {
          name: "Sophia Tailor",
          img: "images/speakers/1.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
        {
          name: "Ava Jones",
          img: "images/speakers/2.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
        {
          name: "Christina Stevens",
          img: "images/speakers/3.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
        {
          name: "Keyera Wiliam",
          img: "images/speakers/4.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          modalDescription:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative. Now if you want to join this then good luck.",
        },
      ],
      galleryImages: [
        "images/gallery/thumb/1.jpg",
        "images/gallery/thumb/2.jpg",
        "images/gallery/thumb/3.jpg",
        "images/gallery/thumb/4.jpg",
        "images/gallery/thumb/2.jpg",
        "images/gallery/thumb/1.jpg",
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
