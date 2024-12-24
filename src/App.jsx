import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import ImageGallery from './components/ImageGallery'
const App = () => {


  return (
    <>
     <div className={styles.cont}>
     <h1>Image Gallery</h1>
     <ImageGallery/>
     </div>
    </>
  )
}

export default App
