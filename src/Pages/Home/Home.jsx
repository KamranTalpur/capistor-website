import React from 'react';
import styles from './Home.module.css';
import founder from '../../assets/Images/founder.webp';
import two from '../../assets/Images/grid2.webp';
import { GrYoutube } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

// Define your images array with width and height
const images = [
  // { src: one, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
  { src: two, width: 4, height: 3 },
];

const Home = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-6 col-md-12">
              <div className={styles.founder1}>
                <img src={founder} alt="Founder" width="90%" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.type}>
                <h2>Co-founder & CEO<br />Shoaib Mustafa</h2>
                <p>
                  "We are a technology-oriented company specializing in cutting-edge electronics products, including embedded devices. Our expertise lies in developing innovative solutions that integrate seamlessly with modern technologies, pushing the boundaries of what's possible in the world of electronics. From concept to production, we are dedicated to creating high-performance, reliable, and efficient products that meet the evolving needs of our clients and the market."
                </p>
                <section className={styles.social}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-6">
                        <div className={styles.youtube}>
                          <a href="https://www.youtube.com/@capistor1/" target="_blank" rel="noopener noreferrer">
                            <div className={styles.youtubeLink}>
                              <p><GrYoutube size={30} /></p>
                              <h3>@capistor1</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6">
                        <div className={styles.github}>
                          <a href="https://github.com/manhoosbilli1" target="_blank" rel="noopener noreferrer">
                            <div className={styles.youtubeLink}>
                              <p><FaGithub size={30} /></p>
                              <h3>Shoaib Mustafa</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.second}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className={styles.gridd}>
                <h1>Cutting-edge electronics products</h1>
                <div className={styles.photoGallery}>
                  {/* Render images directly without a gallery package */}
                  <div className={styles.imageGrid}>
                    {images.map((image, index) => (
                      <img key={index} src={image.src} alt={`Gallery Image ${index}`} className={styles.galleryImage} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
