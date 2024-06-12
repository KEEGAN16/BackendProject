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
                  <li class="active">Contact</li>
                </ul>
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contact-area gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="location-card mb-30 primary-shadow">
                <img src="images/contact/location.jpg" alt="location" class="img-fluid" />
                <div class="overlay"></div>
                <div class="location-info">
                  <h6>Hall Of Fame</h6>
                  <h4>49 West 32nd Street, New York</h4>
                </div>
                <span class="map-trigger">
                  <i class="fa fa-map-marker"></i>
                </span>
                <div class="google-map-area">
                  <div id="map" class="map"></div>
                  <span class="map-close"><i class="fa fa-close"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info primary-shadow mb-30 white-bg">
                <h4>Contact Info</h4>
                <div class="row">
                  <div class="col-md-12 col-sm-6">
                    <div class="single-contact-info">
                      <div class="row">
                        <div class="col-5">
                          <img src="images/contact/cp1.jpg" alt="contact" class="img-fluid" />
                        </div>
                        <div class="col-7">
                          <h6>Ruby Martin</h6>
                          <span class="p-like">Organizer</span>
                          <ul>
                            <li>+02 596 355 32</li>
                            <li>ruby@evemate.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-6">
                    <div class="single-contact-info">
                      <div class="row">
                        <div class="col-5">
                          <img src="images/contact/cp2.jpg" alt="contact" class="img-fluid" />
                        </div>
                        <div class="col-7">
                          <h6>Ella Robinson</h6>
                          <span class="p-like">Planner</span>
                          <ul>
                            <li>+02 596 355 32</li>
                            <li>ella@evemate.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="contact-form primary-shadow mb-30 white-bg">
                <h4>Drop Us A Line</h4>
                <form action="action.php">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="input-box-underline">
                        <input class="form-control" type="text" name="Your-name" id="Your-name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="input-box-underline">
                        <input class="form-control" type="text" name="Your_Subject" id="Your_Subject" placeholder="Your Subject" />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="input-box-underline">
                        <input class="form-control" type="email" name="Your_Email" id="Your_Email" placeholder="Your Email" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="input-box-underline">
                        <textarea class="form-control" name="some-text" id="some-text" placeholder="Your Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <input type="submit" value="Submit" class="btn btn-primary mt-3" />
                    </div>
                  </div>
                </form>
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
                <h4>SUBSCRIBE ME!</h4>
                <form action="subscribe.php" class="subscription-form">
                  <input type="email" class="form-control" placeholder="Your Email" />
                  <input type="submit" value="Go" class="btn btn-primary mt-2" />
                </form>
                <p>Your information is safe with us.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="single-footer-widget">
                <h4>MINI Gallery</h4>
                <ul class="gallery-list">
                  <li><img src="images/gallery/thumb/1.jpg" alt="gallery" /></li>
                  <li><img src="images/gallery/thumb/2.jpg" alt="gallery" /></li>
                  <li><img src="images/gallery/thumb/3.jpg" alt="gallery" /></li>
                  <li><img src="images/gallery/thumb/4.jpg" alt="gallery" /></li>
                  <li><img src="images/gallery/thumb/2.jpg" alt="gallery" /></li>
                  <li><img src="images/gallery/thumb/1.jpg" alt="gallery" /></li>
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
        contactImages: [
          { src: "images/contact/cp1.jpg", name: "Ruby Martin", role: "Organizer", phone: "+02 596 355 32", email: "ruby@evemate.com" },
          { src: "images/contact/cp2.jpg", name: "Ella Robinson", role: "Planner", phone: "+02 596 355 32", email: "ella@evemate.com" }
        ],
        galleryImages: [
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
  