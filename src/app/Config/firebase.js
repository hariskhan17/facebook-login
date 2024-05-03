import { initializeApp } from "firebase/app";
import { getAuth,FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb0sYCYPbl_0dZVqcaK6lUiduFjlZ55oI",
  authDomain: "ex-hackathon.firebaseapp.com",
  projectId: "ex-hackathon",
  storageBucket: "ex-hackathon.appspot.com",
  messagingSenderId: "259295706096",
  appId: "1:259295706096:web:316f648bbcd49c93e7fb35"
};

// Initialize Firebase

// Initialize //
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export const provider = new FacebookAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// image work //


// export async function files(HASIL){
//   try{    
//   const {text , fileState} = HASIL
//   //step 1.//
//   const storageRef = ref(storage, `adds - ${fileState.name}`);
//   await uploadBytes(storageRef, fileState)
//   //step 2.//
//   const url = await  getDownloadURL(storageRef)
//   //step 3.//
//   await addDoc(collection(db, "post"), {
//       work: text,
//       imaurl: url
//     });
//     alert('Your Work is perfect!')
  
//     return true
  
//   }catch(e){
//       alert(e.message)
//       throw e;
      
//   }
//   }  
  

export async function files(HASIL) {
  try {
      const { text, imageFile, videoFile } = HASIL;
      
      if (imageFile) {
          // Upload image to storage
          const imageStorageRef = ref(storage, `images - ${imageFile.name}`);
          await uploadBytes(imageStorageRef, imageFile);
          // Get image URL
          const imageUrl = await getDownloadURL(imageStorageRef);

          // Save image URL to Firestore
          await addDoc(collection(db, "post"), {
              work: text,
              imaurl: imageUrl
          });
      }

      if (videoFile) {
          // Upload video to storage
          const videoStorageRef = ref(storage, `videos - ${videoFile.name}`);
          await uploadBytes(videoStorageRef, videoFile);
          // Get video URL
          const videoUrl = await getDownloadURL(videoStorageRef);

          // Save video URL to Firestore
          await addDoc(collection(db, "post"), {
              work: text,
              videourl: videoUrl
          });
      }

      alert('Your Work is perfect!');
      return true;
  } catch(e) {
      alert(e.message);
      throw e;
  }
}



// get docs //


export async function getData(){

  const querySnapshot = await getDocs(collection(db,"post"));
  const ADD =[]

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const ads = doc.data();
    ads.id = doc.id
    
    ADD.push(ads)
 
  });

  return ADD

}