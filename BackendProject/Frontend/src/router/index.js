// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Index.vue";
import Speakers from "../components/Speakers.vue";
import Schedule from "../components/Schedule.vue";
import Sponsors from "../components/Sponsors.vue";
import About from "../components/About.vue";
import Accommodation from "../components/Accommodation.vue";
import Gallery from "../components/Gallery.vue";
import PriceTable from "../components/Price-table.vue";
import Blog from "../components/Blog.vue";
import BlogSingle from "../components/Blog-single.vue";
import NotFound from "../components/404.vue";
import Contact from "../components/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/speakers", component: Speakers },
  { path: "/schedule", component: Schedule },
  { path: "/sponsors", component: Sponsors },
  { path: "/about", component: About },
  { path: "/accommodation", component: Accommodation },
  { path: "/gallery", component: Gallery },
  { path: "/price-table", component: PriceTable },
  { path: "/blog", component: Blog },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route for 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
