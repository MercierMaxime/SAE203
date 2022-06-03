<script>
import Headerpart from "../../components/Header.vue";
import Footerpart from "../../components/Footer.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString,
  deleteObject, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "UpdateView",
  components: { Headerpart, Footerpart },
  data() {
    return {
      imageData: null, // Image prévisualisée
      ListeArtiste: [],
      artiste: {
        nom: null, // son nom
        prenom: null, // son prénom
        photo: null, // sa photo (nom du fichier)
        age: null, // sa date de naissance
        interpreteur: null, // sa nationalité
      },

      refartiste: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);

    this.getArtistes(this.$route.params.id);
    // Appel de la liste des pays
  },

  methods: {
    async getArtistes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artiste");
      const q = query(dbArtistes, orderBy("nom", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.ListeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des Artistes", this.ListeArtiste);
      });
    },
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.photo = this.file.name;

      this.imgModifiee = true;

      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async getArtistes(id) {
      // Obtenir Firestore
      const firestore = getFirestore();

      const docRef = doc(firestore, "artiste", id);

      this.refartiste = await getDocs(docRef);

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];

      this.artiste.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async UpdateArtiste() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "artistes/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "artistes/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.photo);
        });
      }

      const firestore = getFirestore();

      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);

      this.$router.push("/artiste");
    },
  },
};
</script>

<template>
  <Headerpart />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <div class="container">
      <form enctype="multipart/form-data" @submit.prevent="UpdateArtiste">
        <div class="card bg-dark">
          <p class="px-5 pt-6 text-center text-white sm:text-xl lg:text-3xl xl:text-5xl">Modifier un artiste</p>

          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="text-center">
                  <img class="preview img-fluid" :src="imageData" />
                </div>
              </div>

              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Nom</span>
                  </div>
                  <input class="form-control" placeholder="Nom de l'artiste" v-model="artiste.nom" required />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Prénom</span>
                  </div>
                  <input class="form-control" placeholder="Prénom de l'artiste" v-model="artiste.prenom" required />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-white">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                  </div>
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

                <div class="flex-cols-2 flex justify-center gap-5">
                  <div class="flex flex-col py-10">
                    <button type="submit" class="relative flex flex-col gap-1 rounded-lg bg-[#322e88] px-5 py-3 text-white">
                      Modifier
                    </button>
                  </div>

                  <div class="flex flex-col py-10">
                    <RouterLink to="/artiste">
                      <button type="submit" class="relative flex flex-col gap-1 rounded-lg bg-[#322e88] px-5 py-3 text-white">
                        Retour
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <Footerpart />
</template>