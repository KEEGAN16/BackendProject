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
                  <a class="nav-link active" href="#">Sponsors</a>
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
                  <li class="active">Sponsors</li>
                </ul>
                <h2>Sponsors</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="sponsors-area gray-bg page-section">
        <div class="container">
          <div class="sponsors-nav">
            <ul class="nav nav-tabs text-center">
              <li class="nav-item">
                <a class="nav-link active" href="#SilverSponsors" data-bs-toggle="tab">Silver Sponsors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#GoldSponsors" data-bs-toggle="tab">Gold Sponsors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#PlatinumSponsors" data-bs-toggle="tab">Platinum Sponsors</a>
              </li>
            </ul>
          </div>
  
          <div class="tab-content sponsors-contents text-center">
            <div role="tabpanel" class="tab-pane fade show active" id="SilverSponsors">
              <div class="row">
                <div class="col-md-3 col-sm-6 mb-3" v-for="(sponsor, index) in silverSponsors" :key="index">
                  <div class="single-sponsor primary-shadow white-bg">
                    <img :src="sponsor.img" :alt="'sponsor' + index" />
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="GoldSponsors">
              <div class="row">
                <div class="col-md-3 col-sm-6 mb-3" v-for="(sponsor, index) in goldSponsors" :key="index">
                  <div class="single-sponsor primary-shadow white-bg">
                    <img :src="sponsor.img" :alt="'sponsor' + index" />
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="PlatinumSponsors">
              <div class="row">
                <div class="col-md-3 col-sm-6 mb-3" v-for="(sponsor, index) in platinumSponsors" :key="index">
                  <div class="single-sponsor primary-shadow white-bg">
                    <img :src="sponsor.img" :alt="'sponsor' + index" />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="become-sponsor text-center">
            <a href="#" class="button alt" data-bs-toggle="modal" data-bs-target="#sponsorForm">Become a Sponsor</a>
          </div>
  
          <div class="modal fade" id="sponsorForm" tabindex="-1">
            <div class="container">
              <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                  <div class="sponsor-form-area white-bg primary-shadow">
                    <div class="sub-heading small">
                      <div class="row">
                        <div class="col-md-12">
                          <h4>Become a Sponsor</h4>
                        </div>
                      </div>
                    </div>
                    <form action="sponsor.php">
                      <div class="row">
                        <div class="col-sm-6 mb-3" v-for="(field, index) in formFields" :key="index">
                          <div class="input-box-underline">
                            <input class="input" :type="field.type" :name="field.name" :id="field.id" :placeholder="field.placeholder" />
                          </div>
                        </div>
                      </div>
                      <ul class="row text-center">
                        <li class="col-sm-4" v-for="(packageOption, index) in packageOptions" :key="index">
                          <div class="single-package-select">
                            <input name="sps" :value="packageOption.value" :id="packageOption.id" :checked="packageOption.checked" type="radio">
                            <label :for="packageOption.id">
                              <span class="h5-like">{{ packageOption.label }}</span>
                              <span class="h6-like">{{ packageOption.price }}</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="input-box-underline">
                            <textarea class="input" name="some-text" id="some-text" placeholder="Tell more about you or your company"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <ul class="buttons">
                            <li><input type="submit" value="submit" class="button alt" /></li>
                            <li><a href="#" class="button alt" data-bs-dismiss="modal">Close</a></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-3"></div>
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
        silverSponsors: [
          { img: "images/sponsor/1.png" },
          { img: "images/sponsor/2.png" },
          { img: "images/sponsor/3.png" },
          { img: "images/sponsor/4.png" },
        ],
        goldSponsors: [
          { img: "images/sponsor/4.png" },
          { img: "images/sponsor/3.png" },
          { img: "images/sponsor/2.png" },
          { img: "images/sponsor/1.png" },
        ],
        platinumSponsors: [
          { img: "images/sponsor/2.png" },
          { img: "images/sponsor/1.png" },
          { img: "images/sponsor/4.png" },
          { img: "images/sponsor/3.png" },
        ],
        formFields: [
          { type: "text", name: "Your-name", id: "Your-name", placeholder: "Your Name" },
          { type: "text", name: "Email-address", id: "Email-address", placeholder: "Email address" },
          { type: "text", name: "Phone-No", id: "Phone-No", placeholder: "Phone No" },
          { type: "text", name: "Company-name", id: "Company-name", placeholder: "Company name" },
          { type: "text", name: "Position", id: "Position", placeholder: "Position" },
          { type: "text", name: "Website-Url", id: "Website-Url", placeholder: "Website Url" },
        ],
        packageOptions: [
          { value: "Silver", id: "Silver", label: "Silver", price: "$2000.00", checked: true },
          { value: "Gold", id: "Gold", label: "Gold", price: "$5000.00", checked: false },
          { value: "Platinum", id: "Platinum", label: "Platinum", price: "$10000.00", checked: false },
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
  