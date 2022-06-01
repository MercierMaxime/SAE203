import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsView from '../views/MentionsView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ContactView from '../views/ContactView.vue'
import EvenementView from '../views/EvenementView.vue'
import Evenement2View from '../views/Evenement2View.vue'
import Evenement3View from '../views/Evenement3View.vue'
import Evenement4View from '../views/Evenement4View.vue'

import ListeArtiste from '../views/artiste/ListeView.vue'
import CreateArtiste from '../views/artiste/CreateView.vue'
import UpdateArtiste from '../views/artiste/UpdateView.vue'
import DeleteArtiste from '../views/artiste/DeleteView.vue'

import Page404View from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/Mentions', name: 'Mentions', component: MentionsView },
    { path: '/Billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/Evenement', name: 'Evenement', component: EvenementView },
    { path: '/Evenement2', name: 'Evenement2', component: Evenement2View },
    { path: '/Evenement3', name: 'Evenement3', component: Evenement3View },
    { path: '/Evenement4', name: 'Evenement4', component: Evenement4View },

    { path: '/Artiste', name: 'ListeArtiste', component: ListeArtiste },
    { path: '/createArtiste', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/updateArtiste/:id', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/deleteArtiste/:id', name: 'DeleteArtiste', component: DeleteArtiste },

    { path: '/:pathMatch(.*)*', name: 'Page404View', component: Page404View },

  ]
})

export default router
