import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-41e86/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections));

//   collectionRef
//     .get()
//     .then((snapshop) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
//       dispatch(fetchCollectionsSuccess(collectionsMap));
//     })
//     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
// }

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
