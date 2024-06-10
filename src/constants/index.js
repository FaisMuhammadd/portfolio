import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `enthusiastic and motivated web developer with a budding career in web development. With less than a year of hands-on experience, has developed a strong foundation in front-end technologies such as HTML, CSS, and JavaScript, and is beginning to explore back-end development with tools like Node.js and Express.js. successfully completed several personal projects, including a responsive personal portfolio website and a basic blog platform, ability to create user-friendly and visually appealing websites.
Eager to expand my skill set, continuous learning through online courses, tutorials, and coding challenges, also a proactive participant in coding communities and forums, seeking advice and collaborating with peers 	to enhance my knowledge and expertise. My passion for web development, coupled with a strong commitment to personal and professional growth. With continued learning and experience, I wish to become a highly skilled and valuable member of any web development team
.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Full Stack Developer Intern",
    company: "Klinik Inggit Medical Centre.",
    description: `A Fullstack Developer Internship offers aspiring developers a comprehensive experience in both frontend and backend development, enabling them to build and maintain user interfaces and server-side logic. Interns will work with modern technologies like HTML, CSS, JavaScript, and frameworks such as React on the frontend, as well as languages like Node.js and databases like MySQL, MongoDB on the backend.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Threads Cllone",
    image: project1,
    description:
      "Build a full stack Threads clone using Next.js 14+, user interaction to community management, technical implementation, and various features, including nested deep comments, notifications, real-time-search.",
    technologies: ["TypeScript", "NextJS", "MongoDB", "TailwindCSS", "Zod"],
  },
  {
    title: "Brainwave",
    image: project2,
    description:
      "Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    technologies: ["ReactJS", "TailwindCSS", "Vite"],
  },
  {
    title: "Metaverse Single Page",
    image: project3,
    description:
      "A web user interface static about the metaverse typically refers to a non-interactive webpage or website that provides information, resources, or discussions related to the concept of the metaverse. These static interfaces often serve as introductory platforms, offering descriptions, articles, graphics, and links to further explore the idea of the metaverse.",
    technologies: ["ReactJS", "TailwindCSS", "NextJS"],
  },
  {
    title: "Lyrics",
    image: project4,
    description:
      "Build a Music Web app With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts.",
    technologies: ["ReactJS", "RapidAPI", "Vite", "Axios"],
  },
  {
    title: "Dalle AI Image Generator",
    image: project5,
    description:
      "An AI image web generator is an online tool that utilizes artificial intelligence algorithms to create images from user input. These generators can produce a wide range of visuals, from realistic photos to abstract art, based on text descriptions, sketches, or other criteria provided by the user.",
    technologies: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Makassar, Indonesia",
  phoneNo: "+62 895-8034-74380",
  email: "muhammadfais2525@gmail.com",
};
