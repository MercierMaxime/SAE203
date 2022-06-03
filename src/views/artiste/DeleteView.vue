<script>
import Headerpart from "../../components/Header.vue";
import Footerpart from "../../components/Footer.vue";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "DeleteView",
  components: { Headerpart, Footerpart },
  data() {
    return {
      artiste: {
        nom: null, // son nom
        prenom: null, // son prénom
        photo: null, // sa photo (nom du fichier)
        age: null, // sa date de naissance
        interpreteur: null, // sa nationalité
      },

      refartiste: null,
      photoActuelle: null,
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche  concerné
    this.getArtistes(this.$route.params.id);
  },

  methods: {
    async getArtistes(id) {
      // Obtenir Firestore
      const firestore = getFirestore();

      const docRef = doc(firestore, "artiste", id);

      this.refartiste = await getDoc(docRef);

      if (this.refartiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refartiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();

      const spaceRef = ref(storage, "artistes/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async DeleteArtiste() {
      const firestore = getFirestore();

      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "artistes/" + this.artiste.photo);
      // Suppression du fichier
      deleteObject(docRef);

      this.$router.push("/artiste");
    },
  },
};
</script>

<template>
  <Headerpart />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <div class="container">
      <form enctype="multipart/form-data" @submit.prevent="DeleteArtiste">
        <div class="card bg-dark">
          <p class="px-5 pt-6 text-center text-white sm:text-xl lg:text-3xl xl:text-5xl">Supprimer un artiste</p>

          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="text-center">
                  <img class="preview img-fluid h-60" :src="photoActuelle" />
                </div>
              </div>

              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Nom</span>
                  </div>
                  <input class="form-control" required placeholder="Nom de l'artiste" v-model="artiste.nom" />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Prénom</span>
                  </div>
                  <input class="form-control" required placeholder="Prénom de l'artiste" v-model="artiste.prenom" />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Âge</span>
                  </div>
                  <input class="form-control" required v-model="artiste.age" placeholder="Âge de l'artiste" />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Interpréteur</span>
                  </div>
                  <input class="form-control" required v-model="artiste.interpreteur" placeholder="Qui interprète t-il ?" />
                </div>
                <br />
              </div>
            </div>
            <br />
            <h5 class="alert alert-warning text-center text-white" role="alert">
              Attention vous allez supprimer cet artiste, cette action est irréversible !!
            </h5>
          </div>

          <div class="flex-cols-2 flex justify-center gap-5">
            <div class="flex flex-col py-10">
              <button type="submit" class="relative flex flex-col gap-1 rounded-lg bg-[#322e88] px-5 py-3 text-white">Supprimer</button>
            </div>

            <div class="flex flex-col py-10">
              <RouterLink to="/artiste">
                <button type="submit" class="relative flex flex-col gap-1 rounded-lg bg-[#322e88] px-5 py-3 text-white">Retour</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Footerpart />
</template>