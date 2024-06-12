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
                    <i class="fa fa-map-marker"></i> 49 West 32nd Street, New
                    York
                  </li>
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
                <li class="active">Blog Page</li>
              </ul>
              <h2>Blog Page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-area page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div
                class="col-sm-6 mb-3"
                v-for="(blog, index) in blogs"
                :key="index"
              >
                <div class="single-blog white-bg primary-shadow">
                  <div class="sb-top">
                    <img :src="blog.image" alt="blog" />
                    <div class="sb-over">
                      <div class="sb-over-innr">
                        <p>{{ blog.description }}</p>
                        <a href="blog-single.vue">Read More</a>
                      </div>
                    </div>
                    <div class="sb-meta">
                      <div class="sb-comment-count">
                        <a href="#"
                          ><i class="fa fa-comments"></i>
                          <span>{{ blog.comments }}</span></a
                        >
                      </div>
                      <div class="sb-tags">
                        <i class="fa fa-tags"></i>
                        <a href="#">Event</a> , <a href="#">{{ blog.tag }}</a>
                      </div>
                    </div>
                    <div class="sb-social-share">
                      <a href="#" class="social-trigger"
                        ><i class="fa fa-share-alt"></i
                      ></a>
                      <ul>
                        <li>
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-dribbble"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sb-bottom">
                    <h6>{{ blog.date }}</h6>
                    <h5>
                      <a href="blog-single.vue">{{ blog.title }}</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sidebar-area primary-shadow">
              <div class="input-box-underline mb-3">
                <input class="form-control" type="text" placeholder="Search" />
              </div>
              <div class="single-widget text-widget mb-3">
                <h5>Text Widget</h5>
                <p>
                  Design is all about the way you look on anything you see, or
                  how you do imagine about something in your dream. Also, you
                  need to be creative. Now if you want to join this, then good
                  luck.
                </p>
              </div>
              <div class="single-widget mb-3">
                <h5>Recent Gallery</h5>
                <ul class="gallery-list d-flex flex-wrap">
                  <li
                    v-for="(image, index) in galleryImages"
                    :key="index"
                    class="me-2 mb-2"
                  >
                    <img :src="image" alt="gallery" class="img-fluid" />
                  </li>
                </ul>
              </div>
              <div class="single-widget mb-3">
                <h5>Popular Posts</h5>
                <ul class="post-list">
                  <li
                    v-for="(post, index) in popularPosts"
                    :key="index"
                    class="widget-post mb-2"
                  >
                    <a class="clearfix" href="#">
                      <img :src="post.image" alt="post" class="me-2" />
                      <h6>
                        {{ post.title }}<small>{{ post.date }}</small>
                      </h6>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="single-widget">
                <h5>Tag Clouds</h5>
                <ul class="tag-list d-flex flex-wrap">
                  <li
                    v-for="(tag, index) in tags"
                    :key="index"
                    class="me-2 mb-2"
                  >
                    <a href="#">{{ tag }}</a>
                  </li>
                </ul>
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
              <p>
                Evemat is a Responsive HTML Event Template based on material
                design language invented by Google.
              </p>
              <ul class="footer-social">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-tumblr"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="single-footer-widget">
              <h4>SUBSCRIBE ME!</h4>
              <form action="subscribe.php" class="subscription-form">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                />
                <input type="submit" value="Go" class="btn btn-primary mt-2" />
              </form>
              <p>Your information is safe with us.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="single-footer-widget">
              <h4>MINI Gallery</h4>
              <ul class="gallery-list d-flex flex-wrap">
                <li
                  v-for="(image, index) in miniGallery"
                  :key="index"
                  class="me-2 mb-2"
                >
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
      blogs: [
        {
          image: "images/blog/1.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          comments: 12,
          tag: "Girl",
          date: "14 December 2015",
          title: "Beautyfull girl outside of venue",
        },
        {
          image: "images/blog/2.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          comments: 12,
          tag: "Chair",
          date: "09 December 2015",
          title: "Nice & Unique Chair for Visitors",
        },
        {
          image: "images/blog/3.jpg",
          description:
            "The way of Learning Design is all about the way you look on anything you see, or how you do imagine about something in your dream , also you need to be creative.",
          comments: 12,
          tag: "Note",
          date: "07 December 2015",
          title: "Making our event Schedule",
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
      popularPosts: [
        {
          image: "images/widgets/post/1.jpg",
          title: "Making our event Schedule",
          date: "14 December 2015",
        },
        {
          image: "images/widgets/post/2.jpg",
          title: "Making our event Schedule",
          date: "14 December 2015",
        },
        {
          image: "images/widgets/post/3.jpg",
          title: "Making our event Schedule",
          date: "14 December 2015",
        },
      ],
      tags: [
        "VENUE",
        "Beautiful",
        "SCHEDULE",
        "Unique",
        "Material",
        "Design",
        "MAKING",
        "GIRL",
        "Visitor",
      ],
      miniGallery: [
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

<style>
/* Add your custom styles here */
</style>
