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
                  <li class="active">Gallery</li>
                </ul>
                <h2>Gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="featured-gallery-area mb-30">
        <div class="container">
          <div class="sub-heading">
            <div class="row">
              <div class="col-md-12">
                <h4>Featured Gallery</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="single-gallery primary-shadow">
                <img src="images/gallery/1.jpg" alt="gallery" class="img-fluid" />
                <a href="images/gallery/large.jpg" class="gallery-over image-popup"><i class="fa fa-image"></i></a>
              </div>
            </div>
            <div class="col-md-5">
              <div class="single-gallery primary-shadow">
                <img src="images/gallery/2.jpg" alt="gallery" class="img-fluid" />
                <a href="images/gallery/large.jpg" class="gallery-over image-popup"><i class="fa fa-image"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="single-gallery primary-shadow">
                <img src="images/gallery/3.jpg" alt="gallery" class="img-fluid" />
                <a href="images/gallery/large.jpg" class="gallery-over image-popup"><i class="fa fa-image"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="single-gallery primary-shadow">
                <img src="images/gallery/4.jpg" alt="gallery" class="img-fluid" />
                <a href="images/gallery/large.jpg" class="gallery-over image-popup"><i class="fa fa-image"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="image-gallery-area mb-30">
        <div class="container">
          <div class="sub-heading">
            <div class="row">
              <div class="col-md-12">
                <h4>All images</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-4" v-for="(image, index) in images" :key="index">
              <div class="single-gallery primary-shadow">
                <img :src="image" alt="gallery" class="img-fluid" />
                <a :href="image" class="gallery-over image-popup"><i class="fa fa-image"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="video-gallery-area">
        <div class="container">
          <div class="sub-heading">
            <div class="row">
              <div class="col-md-12">
                <h4>Previous Event videos</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" v-for="(video, index) in videos" :key="index">
              <div class="single-gallery primary-shadow">
                <div :data-type="video.type" :data-video-id="video.id"></div>
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
                  <input type="text" placeholder="Your Email" class="form-control" />
                  <input type="submit" value="Go" class="btn btn-primary mt-2" />
                </form>
                <p>Your Information is safe with us.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="single-footer-widget">
                <h4>Mini Gallery</h4>
                <ul class="gallery-list">
                  <li v-for="(thumb, index) in thumbs" :key="index"><img :src="thumb" alt="gallery" class="img-fluid" /></li>
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
        images: [
          "images/gallery/small/1.jpg",
          "images/gallery/small/2.jpg",
          "images/gallery/small/3.jpg",
          "images/gallery/small/4.jpg",
          "images/gallery/small/5.jpg",
          "images/gallery/small/6.jpg",
          "images/gallery/small/7.jpg",
          "images/gallery/small/8.jpg"
        ],
        videos: [
          { type: "youtube", id: "nrJtHemSPW4" },
          { type: "youtube", id: "4Wkr0eXiUNw" },
          { type: "youtube", id: "keDneypw3HY" },
          { type: "youtube", id: "k6Kly58LYzY" }
        ],
        thumbs: [
          "images/gallery/thumb/1.jpg",
          "images/gallery/thumb/2.jpg",
          "images/gallery/thumb/3.jpg",
          "images/gallery/thumb/4.jpg",
          "images/gallery/thumb/2.jpg",
          "images/gallery/thumb/1.jpg"
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  