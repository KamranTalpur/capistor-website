import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogsDetails.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogsDetails = () => {
  const { id } = useParams();
  const blogPosts = [
    {
      title: "Simulation Worked",
      date: "August 23, 2024",
      content: `
The simulation for the laser projector worked successfully. After testing the initial design in a virtual environment, we observed that the laser beam accurately projected the intended shapes. The key aspect was fine-tuning the laser modulation and ensuring the mirrors were perfectly aligned. This milestone confirms that the project is on the right track for physical prototyping.

**Key Points:**
- The virtual environment was crucial for the initial design tests.
- Laser modulation and mirror alignment were critical factors.
- The project is ready for the next phase: physical prototyping.

For more details, visit the [project page](https://hackaday.io/project/197282-laser-projector/log/232094-simulation-worked).
      `,
    },
    {
      title: "Initial Setup",
      date: "August 20, 2024",
      content: `
We completed the initial setup of the laser projector hardware. This involved assembling the basic structure, connecting the laser, and configuring the control software. Early tests showed promising results, with the laser responding correctly to the software commands.

**Key Points:**
- Hardware assembly was straightforward with no major issues.
- Control software integration was successful.
- Preliminary tests were positive, setting the stage for more detailed simulations.

For more details, visit the [project page](https://github.com/manhoosbilli1/Laser_Projector).
      `,
    },
    {
      title: "Challenges Faced",
      date: "August 18, 2024",
      content: `
We encountered some challenges during the project, particularly with the alignment of the laser mirrors. Small misalignments can lead to significant errors in the projected output. After several iterations, we found a reliable method to ensure proper alignment.

**Key Points:**
- Mirror alignment is critical and challenging.
- Iterative adjustments were necessary to achieve accuracy.
- The method found will be crucial for the project's success.

For more details, visit the [project page](https://github.com/manhoosbilli1/Laser_Projector).
      `,
    },
  ];

  const post = blogPosts[parseInt(id, 10)];

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className={styles.blogDetailContainer}>
      <h1 className={styles.blogTitle}>{post.title}</h1>
      <p className={styles.blogDate}><strong>Date:</strong> {post.date}</p>
      <div className={styles.blogContent}>
        {post.content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetails;
