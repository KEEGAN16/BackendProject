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
                    <li class="dropdown-item active"><a href="#">Price Table</a></li>
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
                  <li class="active">Price table</li>
                </ul>
                <h2>Price table</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="pricing-area gray-bg page-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 mb-3" v-for="(packageItem, index) in packages" :key="index">
              <div class="single-package primary-shadow white-bg">
                <div class="package-title">
                  <h4>{{ packageItem.title }}</h4>
                </div>
                <div class="package-price">
                  <div class="price">
                    <h3>{{ packageItem.price }}</h3>
                  </div>
                  <div class="validity">
                    <h5>{{ packageItem.validity }}</h5>
                  </div>
                </div>
                <div class="package-benefits text-center">
                  <ul>
                    <li v-for="(benefit, index) in packageItem.benefits" :key="index">{{ benefit }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="buy-tickit-area">
        <div class="overlay">
          <div class="container">
            <form @submit.prevent="submitForm" class="tickit-form">
              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <div class="input-box">
                    <input type="text" v-model="form.clientName" placeholder="Your Name" />
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="input-box">
                    <input type="email" v-model="form.clientEmail" placeholder="Your Email" />
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="input-box">
                    <select v-model="form.packageName">
                      <option value="start">Start Package</option>
                      <option value="Gold">Gold Package</option>
                      <option value="Platinum">Platinum Package</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="input-box">
                    <button class="btn btn-primary" type="submit">Get a ticket</button>
                  </div>
                </div>
              </div>
            </form>
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
                  Evemat is a Responsive HTML Event Template based on material design language invented
                  by google .
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
                  <input type="email" placeholder="Your Email" class="form-control mb-2" />
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
        packages: [
          {
            title: "Start Pack",
            price: "$89",
            validity: "Per Person",
            benefits: [
              "Access For All Session",
              "Free Tea / Coffee / Lunch",
              "Free Wifi Access",
              "Recorded Video Session"
            ]
          },
          {
            title: "Gold Pack",
            price: "$89",
            validity: "Per Person",
            benefits: [
              "Access For All Session",
              "Free Tea / Coffee / Lunch",
              "Free Wifi Access",
              "Recorded Video Session"
            ],
            badge: "Best Seller"
          },
          {
            title: "Platinum Pack",
            price: "$89",
            validity: "Per Person",
            benefits: [
              "Access For All Session",
              "Free Tea / Coffee / Lunch",
              "Free Wifi Access",
              "Recorded Video Session"
            ]
          }
        ],
        form: {
          clientName: "",
          clientEmail: "",
          packageName: "start"
        },
        galleryImages: [
          "images/gallery/thumb/1.jpg",
          "images/gallery/thumb/2.jpg",
          "images/gallery/thumb/3.jpg",
          "images/gallery/thumb/4.jpg",
          "images/gallery/thumb/2.jpg",
          "images/gallery/thumb/1.jpg"
        ]
      };
    },
    methods: {
      submitForm() {
        alert(`Name: ${this.form.clientName}, Email: ${this.form.clientEmail}, Package: ${this.form.packageName}`);
      }
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  