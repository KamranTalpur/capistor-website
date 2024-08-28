import React from 'react';
import styles from './Products.module.css';
import Img1 from '../../assets/Images/grid2.webp';
import petfeeder from '../../assets/Images/petfeeder.png';
import incubator from '../../assets/Images/incubatorpcb.png';
import iphone7 from '../../assets/Images/iphone7.png';
const Product = () => {
  const products = {
    website: [
      {
        image: petfeeder,
        title: "Pet Feeder",
        description: "An interesting DIY project to feed your pets when you aren't at home, built with raspberry-pi to detect your cat and based on the programmed time and settings dispenses precisely set amount of feed in weight.",
        text: "Watch Video",
        videoId: "d-mLrMGuj24" // Replace with actual YouTube video ID
      },
      {
        image: incubator,
        title: "Incubator",
        description: "Designed for effortless egg hatching and brooding, this fully automated incubator handles everything for you. Simply set it up using the provided app, and let it do the work while you wait for the chicks to hatch. You'll receive crucial notifications, including alerts for power outages, so you can rest easy knowing everything is under control.",
        text: "Source Code",
        videoId: "QkM2tHTfZXA" // No video for this product
      },
    ],
    ecomm: [
      {
        image: iphone7,
        title: "Iphone 7 without battery",
        description: "Ever wished to bring back your dead iphone to life? turns out batteries fail more than usual, throw your battery out and enjoy your device forever with a permanent umbilical cord attached to it.",
        text: "View More",
        videoId: "A5jC0rQ_heU" // No video for this product
      },
      // More ecomm products...
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
                    {product.videoId && (
                      <div className={styles.videoContainer}>
                        <iframe
                          width="100%"
                          height="200"
                          src={`https://www.youtube.com/embed/${product.videoId}`}
                          title={product.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{product.title}</h3>
                        {product.text && (
                          <a
                            href={product.videoId ? `https://www.youtube.com/watch?v=${product.videoId}` : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewMore}
                          >
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
