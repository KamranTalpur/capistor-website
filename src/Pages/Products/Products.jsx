import React from 'react';
import styles from './Products.module.css';
import Img1 from '../../assets/Images/grid2.webp';

const Product = () => {
  const products = {
    website: [
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",

      },
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",

      },
    ],
    ecomm: [
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",
      },
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",

      },
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",

      },
      {
        image: Img1,
        title: "Capistor",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veniam sed rem nostrum illum deserunt ea voluptatem exercitationem ullam velit iste," ,
        text: "View More",

      },
    
      // ...more ecomm objects
    ],
  };

  return (
    <>
      <section className={styles.pro}>
        <div className="container">
          <div className="row">
            {Object.keys(products).map((category) =>
              products[category].map((product, index) => (
                <div className="col-lg-4" key={index}>
                  <div className={styles.card}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{product.title}</h3>
                        {product.text && (
                          <a href="https://www.youtube.com/@capistor1/"  target="_blank" className={styles.viewMore}>
                            {product.text}
                          </a>
                        )}
                      </div>
                      <p className={styles.cardDescription}>
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
