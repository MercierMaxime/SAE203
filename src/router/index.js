import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsView from '../views/MentionsView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/Mentions', name: 'Mentions', component: MentionsView },
    { path: '/Billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/Contact', name: 'Contact', component: ContactView },

  ]
})

export default router
