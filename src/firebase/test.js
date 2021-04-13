import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("koBNjaE187GF2EbbzyXa")
  .collection("cartItems")
  .doc("QSWtNgaZKgxgJ8fE0bxA");

firestore.doc("/user/koBNjaE187GF2EbbzyXa/cartItems/QSWtNgaZKgxgJ8fE0bxA");
firestore.collection("/user/koBNjaE187GF2EbbzyXa/cartItems");
