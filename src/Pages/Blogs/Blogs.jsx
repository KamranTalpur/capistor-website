import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Blogs.module.css'; // Import your CSS module

const Blogs = () => {
  const blogPosts = [
    {
      title: "Further Plan",
      date: "August 30, 2024",
      content: `
  # Further Plan
  
  I'm going to stop with the experimental setup now and think about the following steps. 
  
  - A way to generate a scanning mechanism for the laser. 
  - Writing a program that will turn on the laser only at points of interest.
  - Mixing the colors in order to create RGB colors. 
  
  Here are my initial thoughts. I was thinking of looking up some papers where people have attempted to achieve this. Then find a way for the laser to be turned on and at points that I want. I would ideally like this to be connected to galvo's feedback so that it knows exactly where the galvo mirror is pointing. I was thinking of creating some functions on the microcontroller (initially on computer using C) where it will take certain parameters and draw a number of points horizontally. The more control I have with this function, the more I will be able to understand its working. 
  
  I could build the following abilities into the function: 
  
  - Takes an array of points 
  - Takes length of points 
  - Takes pixels of points 
  - Gives feedback after each point is successfully drawn 
  - Ability to draw primary colors on certain points 
  - Ability to draw a mix of colors using the hex code of a color 
  - Ability to draw a mix of colors using RGB value for that pixel 
  - Ability to control the speed of the line being drawn
  - Ability to control the frequency of the line being drawn
  - The direction of drawing the line
  - To map that line from Cartesian to the real world
  - To read world values to Cartesian for drawing
  - Ability to take the length of a line in millimeters and convert that to a pixel of a certain size
  - Ability to provide analytics of the process, time remaining, dots remaining, percentage, etc.
  
  The idea is to take this function and impose it on the line scanning mechanism of the galvo, where it scans horizontally while keeping the vertical angle fixed, and then increments after the horizontal scan is complete. I want to be able to make these two functions—the horizontal scan and the line drawing mechanism—work together. Being both horizontal, I should be able to draw the appropriate number of points in that certain horizontal line from a picture and then move on to the next increment of vertical and repeat the same procedure.
  
  Here is how it should look like: Say we are given an image which after being processed looks like a vector image or a bitmap to make it simple.
  
  \`\`\`c
  byte customChar[] = {
    B01110,
    B10001,
    B10001,
    B01110,
    B10001,
    B10001,
    B10001,
    B01110
  };
  \`\`\`
  
  ![Real Setup](Assets/bitmap.png)
  
  All I have to do is, when I know that the galvo is at the top vertical position (i.e., top right (0,0)) and scans horizontally towards the right, it should go something like this:
  
  \`\`\`c
  pixelTobePopulated()? DrawPixel(): skip();
  \`\`\`
  
  So it should result in the following: \`FTTTF\`. (T for true and F for false.)
  
  Now, initially, I should just give a hard-coded bitmap or vector image to it, after conforming it to needs such as screen size and limits of the system.
  
  Actually, while searching for something similar, I stumbled upon this great [video](https://www.youtube.com/watch?v=2bVhyB7Av8s). It showed me that if this approach does work, I could go into the archives of old CRT TVs or the initial source code of old systems to figure out how they achieved this scanning methodology.
  
  Once this part is done, and I know where my dots are landing, then I will worry about projecting different colors or a mix of colors on those spots. For that, I'm thinking of following the RGB LED mechanism for generating a certain color, but that's for later.
  
  Also, I'll need some way to simulate this process—somewhere for me to see immediately whether my code changes are working or not. I think the best way to do this would be to use the command line as my simulation monitor. I could control its cursor just like I can control the galvo's position. I can control where the dot will land easily. It would be just like the old days of learning to program by printing a certain shape of a tree.
  
  Once these initial steps are done, I could then worry about the refresh rates, the FPS, the time delay for dots to stay at a certain point before moving.
  
  Also, just to note here that I would ideally like this project to be portable so that I can experiment with it somewhere at home or someplace. That would require creating a somewhat similar optical table as in my lab by using CNC to drill holes and eventually threads into it to hold all my stuff. Hopefully, I can get there because the beam alignment is a pain and shifting the project to another optical table would prove difficult.
      `,
    },
    {
      title: "Generating RGB Colors with Lasers",
      date: "August 8, 2024",
      content: `
  # Generating RGB Colors with Lasers
  
  I think the nearest possible application is of an RGB LED and how it's able to generate a certain color. Since I'm using a laser, it will be a bit different, but I think the conversion factor can be changed. I'll look into the construction of a laser, how it's driven, and find some papers that have attempted to control the color of a laser.
  
  **Side note:** Just figured out why the IR wavelength was showing in the green laser. Turns out the pure green lasers are rare, and what we get is an IR laser lasing at around 1056nm. The frequency is then doubled within the structure, which halves the wavelength, so we get around 532nm green light.
  
  The green laser is usually made of InGaN material, but since my diode is an IR one, I'm not so sure what it's made of. Here's a proper true green laser: [OSRAM Green Laser](https://ams-osram.com/products/lasers/color-lasers-eel/osram-metal-can-to56-plt5-520b). I found a good paper explaining the effects of PWM with this laser. I'll read it to see if it will give me some insight into having proper PWM control with the laser.
  
  **Interesting facts gathered from this paper:**
  - The current and output power show almost a linear trend with the green laser, but not so much with the blue laser. When I'm looking into the blue laser, I'll have to keep that in mind.
  - Higher temperature requires more current and outputs less power.
  - The power and duty cycle graph shows the best possible results with the highest power, lowest current, and temperature controlled at 10kHz at 30°C.
  
  I haven't tried to control the laser with current yet. Would I be able to? Because the circuit inside the laser is a constant current (CC) driver. I should try at least. And while I'm at it, I'll collect each laser's wavelength using a spectrometer for CIE coordinates. I'll also measure each laser's optical power with a change in voltage/PWM.
  
  I've found that most instruments have a USBTCM connection, which will let us talk to the device and gather data programmatically. I'll try to set that up because when the new lasers arrive, I have to be able to get the data fast. Even right now, I have to measure wavelength, voltage, current, PWM value, intensity, and so on—it will be hard to get 1024 (10-bit) data.
  
  # Success with Controlling Instruments with Python
  
  Happy to share that I've made some promising progress towards accessing instruments supporting USB with Python. I call the project "Instrument Orchestra." Instrument Orchestra is now hosted on GitHub with its own repository: [Instrument Orchestra on GitHub](https://github.com/manhoosbilli1/Instrument_Orchestra). I've provided a detailed step-by-step installation guide for the first experiment.
  
  I tried about 20 packages and different software to access this. I thought, why reinvent the wheel, but none worked and almost no one was using this simple approach of accessing the instrument through serial. Having some experience in electronics, it was easy setting it up, but installing the drivers was a pain.
  
  My setup is going to be a sweet one with me remotely getting data from the instrument. This will allow for long-lasting testing sessions even when the lab is closed. I only have to have my remote laptop attached to the instruments and powered on.
  
  The next step would be integrating all three instruments with this software and creating a GUI for it. I think a live graph of each instrument's data would be nice.
      `,
    },
    // Other blog posts...
  ];

  // Truncate content to show a preview
  const truncateContent = (content, length = 150) => {
    const plainText = content.replace(/[*_~`]/g, ''); // Remove simple Markdown characters
    return plainText.length > length ? `${plainText.substring(0, length)}...` : plainText;
  };

  return (
    <div className={styles.blogContainer}>
      <div className="row">
        {blogPosts.map((post, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text text-muted"><strong>Date:</strong> {post.date}</p>
                <p>{truncateContent(post.content)}</p>
                <Link to={`/blogs/${index}`} className={styles.btn}>Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
