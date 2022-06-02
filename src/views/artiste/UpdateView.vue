<script>
import Headerpart from "../../components/Header.vue";
import Footerpart from "../../components/Footer.vue";

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
    this.getArtistes();
  },

  methods: {
    async getArtistes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artiste");

      const q = query(dbArtistes, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.ListeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

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
          <div class="card-header">
            <h5 style="color: white">Mise à jour artiste</h5>
          </div>

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
                    <span class="input-group-text">Nom</span>
                  </div>
                  <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" required />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Prénom</span>
                  </div>
                  <input class="form-control" placeholder="Prénom de la personne" v-model="artiste.prenom" required />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                  </div>
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
          </div>

          <div class="card-footer">
            <button type="submit" class="btn btn-dark float-left">Modifier</button>
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