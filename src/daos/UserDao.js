import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDao {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserById(id) {
    await getDoc(doc(this.collectionRef.doc, id))
      .then((userDoc) => {
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() };
        } else {
          return { success: false, data: null };
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  async createUser(userData) {
    await addDoc(this.collectionRef, userData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  async updateUser(id, userData) {
    const userRef = doc(this.collectionRef, id);
    await updateDoc(userRef, userData)
      .then(console.log("Document succesfully updated!"))
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  async deleteUser(id) {
    await deleteDoc(doc(this.collectionRef, id))
    .then(console.log("Document succesfully deleted!"))
    .catch((error) => {
      console.error("Error deleting document: ", error);
    });
  }
}

export default new UserDao();
