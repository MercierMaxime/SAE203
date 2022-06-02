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
          <div class="card-header">
            <h5 style="color: white">Suppression d'un artiste</h5>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="text-center">
                  <img class="preview img-fluid" :src="photoActuelle" />
                </div>
              </div>

              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nom</span>
                  </div>
                  <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" disabled />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Prénom</span>
                  </div>
                  <input class="form-control" placeholder="Prénom de la personne" v-model="artiste.prenom" disabled />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Âge</span>
                  </div>
                  <input class="form-control" required v-model="artiste.age" placeholder="Âge de la personne" />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Interpréteur</span>
                  </div>
                  <input class="form-control" required v-model="artiste.interpreteur" placeholder="Quel chanteur interprète t-il ?" />
                </div>
                <br />
              </div>
            </div>
            <br />
            <h5 class="alert alert-warning text-center" role="alert">
              Attention vous allez supprimer cet artiste, cette action est irréversible !!
            </h5>
          </div>

          <div class="card-footer">
            <button type="submit" class="btn btn-dark float-left">Supprimer</button>
            <button class="btn btn-dark float-right">
              <RouterLink to="/artiste">Cancel</RouterLink>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Footerpart />
</template>