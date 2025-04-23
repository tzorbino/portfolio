// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Intro from '@/views/Intro.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import Metacognitives from '@/views/Metacognitives.vue';


const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/metacognitives', 
    name: 'Metacognitives', 
    component: Metacognitives
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;