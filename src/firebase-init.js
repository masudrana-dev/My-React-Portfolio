import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfELWnjAVvQx8x4GjkiEpUyydTXXKAkVQ",
    authDomain: "my-react-portfolio-2e3cd.firebaseapp.com",
    projectId: "my-react-portfolio-2e3cd",
    storageBucket: "my-react-portfolio-2e3cd.appspot.com",
    messagingSenderId: "798215698197",
    appId: "1:798215698197:web:c7a7d205640766db2c1b1c"
};

const app = initializeApp(firebaseConfig);


export default app;