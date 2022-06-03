<script>
import Headerpart from "../../components/Header.vue";
import Footerpart from "../../components/Footer.vue";

// Bibliothèque Firestore : import des fonctions
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
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "ListeView",
  components: { Headerpart, Footerpart },
  data() {
    return {
      ListeArtiste: [],
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      // Obtenir Firestore
      const firestore = getFirestore();

      const dbPart = collection(firestore, "artiste");

      const q = query(dbPart, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.ListeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.ListeArtiste.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>

<template>
  <Headerpart />

  <div class="bg-gradient-to-bl from-indigo-500 to-sky-400 pt-6">
    <p class="text-center font-bold text-white sm:text-2xl lg:text-3xl xl:text-5xl">Liste des Artistes</p>
    <span class="float-right" title="Créer un nouveau artiste">
      <RouterLink to="/createArtiste">
        <i class="fa fa-plus fa-lg text-light"></i>
      </RouterLink>
    </span>

    <div class="card-body table-responsive">
      <table class="text-light table text-white">
        <thead>
          <tr>
            <th scope="col" class="text-center">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Âge</th>
            <th scope="col">Interpréteur de</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="part in ListeArtiste" :key="part.id">
            <td class="text-center">
              <img class="media-object imageSmall" :src="part.photo" :alt="part.prenom + ' ' + part.nom" />
            </td>
            <td>
              <b>{{ part.nom }}</b>
            </td>
            <td>{{ part.prenom }}</td>
            <td>{{ part.age }}</td>
            <td>{{ part.interpreteur }}</td>
            <td>
              <span title="Supprimer l'artiste" class="mr-2">
                <RouterLink :to="{ name: 'DeleteArtiste', params: { id: part.id } }">
                  <i class="fa fa-times fa-lg text-light"></i>
                </RouterLink>
              </span>
              <span title="Modifier l'artiste" class="mr-2">
                <RouterLink :to="{ name: 'UpdateArtiste', params: { id: part.id } }">
                  <i class="fa fa-edit fa-lg text-light"></i>
                </RouterLink>
              </span>
            </td>
          </tr>
        </tbody>

        <div class="flex-cols-3 flex justify-center gap-5">
          <div class="flex flex-col py-10">
            <RouterLink to="/createArtiste">
              <button type="submit" class="relative flex flex-col rounded-lg bg-[#322e88] px-5 py-3 text-white">Créer un artiste</button>
            </RouterLink>
          </div>

          <div class="flex flex-col py-10">
            <RouterLink to="/updateArtiste/:id">
              <button type="submit" class="relative flex flex-col rounded-lg bg-[#322e88] px-5 py-3 text-white">Modifier un artiste</button>
            </RouterLink>
          </div>

          <div class="flex flex-col py-10">
            <RouterLink to="/deleteArtiste/:id">
              <button type="submit" class="relative flex flex-col rounded-lg bg-[#322e88] px-5 py-3 text-white">
                Supprimer un artiste
              </button>
            </RouterLink>
          </div>
        </div>
      </table>
    </div>
  </div>
  <Footerpart />
</template>