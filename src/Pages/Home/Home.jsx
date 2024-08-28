import React from "react";
import styles from "./Home.module.css";
import founder from "../../assets/Images/founder.webp";
import two from "../../assets/Images/grid2.webp";
import { GrYoutube } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

// Define your images array with width and height
const images = [
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
                <h2>
                  CEO & Founder
                  <br />
                  Shoaib Mustafa
                </h2>
                <p>
                  Capistor is at the forefront of innovation, specializing in
                  advanced electronics and software solutions. We design and
                  develop cutting-edge technology that powers next-generation
                  devices, with a focus on embedded systems, RF communications,
                  and custom firmware. Our mission is to deliver high-quality,
                  reliable, and efficient solutions that drive progress in the
                  tech industry, helping our clients turn their ideas into
                  reality.
                </p>
                <br />
                <p>You can follow us here to see more of our work.</p>
                <section className={styles.social}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-6">
                        <div className={styles.youtube}>
                          <a
                            href="https://www.youtube.com/@capistor1/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={styles.youtubeLink}>
                              <p>
                                <GrYoutube size={30} />
                              </p>
                              <h3>Capistor</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6">
                        <div className={styles.github}>
                          <a
                            href="https://github.com/manhoosbilli1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={styles.youtubeLink}>
                              <p>
                                <FaGithub size={30} />
                              </p>
                              <h3>Shoaib</h3>
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
      {/* Hire Us Button Section */}
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <a
          href="https://www.freelancer.com/u/ShoaibMustafa88"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hireButton}
        >
          Hire Us on Freelancer
        </a>
        <a
          href="https://www.fiverr.com/shoaibmustafa7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hireButton}
        >
          Hire Us on Fiverr
        </a>
      </section>
      <section
        style={{
          backgroundColor: "#f9f9f9",
          padding: "40px 20px",
          borderRadius: "8px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ lineHeight: "1.8" }}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  About Me
                </h2>
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                  I'm an engineering enthusiast and physicist by training, with
                  a passion for innovation and have a diverse skill set. My
                  skills span across theoretical knowledge about RF and waves,
                  specializing in light matter interaction. Software
                  development, Linux, and embedded systems, where I bring ideas
                  to life through meticulous design and execution.
                 </p>

                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                  I love to write about my projects, helps me clear out my
                  head and helps the community out as well. Check them in the
                  blog section or{" "}
                  <a
                    href="https://hackaday.io/manhoosbilli1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    follow me on Hackaday
                  </a>
                  .
                </p>
                <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />
                <h3 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  Experience
                </h3>
                <ul style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
                  <li>
                    <strong>Freelancer (2019-Present):</strong> Leading a team,
                    I've managed and delivered over 400 projects, each bringing
                    unique challenges and rewarding outcomes.
                  </li>
                  <li>
                    <strong>Hardware Engineer at MECTEC (2019-2021):</strong>{" "}
                    Contributed to high-impact projects with renowned
                    universities, pushing the boundaries of innovation.
                  </li>
                  <li>
                    <strong>Embedded Engineer at Fambzzhh (2021-2024):</strong>{" "}
                    Developed various products such as GPS trackers.
                  </li>
                </ul>
                <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />
                <h3 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  Skills
                </h3>
                <p >Although I've dabbled in uncountable things yet I am somewhat proficient in these</p>
                <ul style={{ fontSize: "1.1rem" }}>
                  <li>Proficient in C and Python</li>
                  <li>
                    Embedded systems.
                  </li>
                  <li>
                    Hardware systems, research, schematic and pcb design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Gallery Section Moved to Bottom
      <section className={styles.second}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className={styles.gridd}>
                <h1>Gallery</h1>
                <div className={styles.photoGallery}>
                  <div className={styles.imageGrid}>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={`Gallery Image ${index}`}
                        className={styles.galleryImage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </>
  );
};

export default Home;
