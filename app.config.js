// Expo CLI loads .env / .env.local into process.env before evaluating this file.
export default {
  "expo": {
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "O $(PRODUCT_NAME) acede às suas fotos para poder adicionar imagens dos livros que publica ou troca.",
          "cameraPermission": "O $(PRODUCT_NAME) usa a câmara para tirar fotos dos seus livros.",
          // Only photos are picked, so no microphone access is needed.
          "microphonePermission": false
        }
      ],
      [
        "expo-camera",
        {
          "cameraPermission": "O $(PRODUCT_NAME) usa a câmara para ler o código de barras (ISBN) dos livros e tirar fotos.",
          // Barcode scanning records no audio; asking for the microphone would be an unused permission.
          "microphonePermission": false,
          "recordAudioAndroid": false
        }
      ],
      "@react-native-community/datetimepicker",
      "expo-status-bar"
    ],
    "name": "BookLoop",
    "slug": "BookLoop",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "bundleIdentifier": 'com.bookloop.app',
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.bookloop.app"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
}
