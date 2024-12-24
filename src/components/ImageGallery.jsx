import cat_1 from '../assets/cat_1.png'
import cat_2 from '../assets/cat_2.png'
import cat_3 from '../assets/cat_3.png'
import cat_4 from '../assets/cat_4.png'
import React, { useState } from 'react';
import styles from './ImageGallery.module.css'; 

const images = [
   cat_1,
   cat_2,
   cat_3,
   cat_4,

];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryflex}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            onClick={() => handleImageClick(image)}
            className={styles.galleryimage}
          />
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={selectedImage} alt="Selected" className={styles.modalimage} />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;