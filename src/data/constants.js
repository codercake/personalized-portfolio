import taskmgtImage from '../images/taskmgtapp.png';
import wiresharkImage from '../images/wireshark.png';
import gighiveImage from '../images/gighiveImage.png';

export const Bio = {
  name: "Ishitha Chaudhary",
  roles: [
    "Full-Stack Developer",
    "Public Speaker",
    "Bookworm",
    "Freelancer",
  ],
  description: `Hello, there.
  I'm Ishitha, a proactive individual eagerly seeking opportunities to diversify and strengthen my skill set. With a passion for coding, web development and emerging technologies, I thrive on challenges that set me apart. When I'm not tinkering with my laptop, I enjoy reading novels and browsing informative content!`,
  
  github: "https://github.com/codercake",
 resumeView: "/Ishitha_Jain-Resume.pdf",
 resumeDownload: "/Ishitha_Jain-Resume.pdf",  
 linkedin: "https://www.linkedin.com/in/ishitha-chaudhary",
};
  
console.log(Bio.resume);

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Redux",
        image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image: "data:image/png;base64,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",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        name: "Tailwind CSS",
        image: "data:image/png;base64,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",
      },
      {
        name: "TypeScript",
        image: "https://seekvectors.com/files/download/Typescript-01.png",
      },
      {
        name: "Bootstrap",
        image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image: "https://mui.com/static/logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express.js",
        image: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
      },
      {
        name: "REST API",
        image: "https://cdn-icons-png.flaticon.com/512/4781/4781517.png",
      },
      {
        name: "Flask",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_wqQda2BHb3TW1uS_lOE6E0nNbP-AKJAlsVQsdt7VtagaSoOnustTQ3kYQTa2B5Sv_w&usqp=CAU",
      },
      {
        name: "FastAPI",
        image: "https://cdn.vectorstock.com/i/1000v/38/92/logo-of-fastapi-python-web-framework-vector-50653892.jpg",
      },
    ],
  },  
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
      },
      {
        name: "SQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Docker",
        image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "https://foundersbook.eclublbs.com/wp-content/uploads/2023/01/impactree-logo.jpeg",
    role: "Junior Frontend Developer",
    company: "Impactree Data Technologies",
    date: "July 2025 – Present",
    desc: "Leading frontend development for Impactree’s production platform using Next.js and Angular. Built dynamic dashboards with ApexCharts for real-time analytics, optimized Lighthouse performance scores, and modularized legacy code for faster feature delivery. Collaborating with design and backend teams to ship accessible, high-performance web experiences.",
    skills: [
      "Next.js",
      "Angular",
      "ApexCharts",
      "TypeScript",
      "SSR (Server-Side Rendering)",
      "Performance Optimization",
      "Accessibility (WCAG)"
    ],
  },
  {
    id: 2,
    img: "https://pbs.twimg.com/profile_images/1800736411110506496/VV_h1yaj_400x400.jpg",
    role: "Full Stack Intern",
    company: "Zidio Development",
    date: "Aug 2024 - Dec 2024",
    desc: "Built and optimized GigHive, a MERN-based job portal featuring advanced search, real-time notifications, and personalized dashboards. Improved UI responsiveness and authentication security while collaborating across teams to enhance scalability and reliability.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JavaScript",
      "JWT Authentication",
      "Responsive Design",
      "Git/GitHub",
    ],
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
    role: "Frontend Engineer Intern",
    company: "Neurobit",
    date: "Oct 2023 - Nov 2023",
    desc: "Developed UI components for Neurobit’s web platform using ReactJS, Redux, and Material UI. Focused on implementing modular, maintainable, and performant interfaces aligned with product goals.",
    skills: [
      "React.js",
      "Redux",
      "Material UI",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Next.js",
    ],
  },
  {
    id: 4,
    img: "https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Aug 2023",
    desc: "Contributed to 30+ open-source projects, raising and merging multiple PRs focused on bug fixes, documentation improvements, and new feature implementations. Strengthened version control practices and cross-project collaboration through Git workflows.",
    skills: [
      "Git",
      "GitHub",
      "Open Source Contribution",
      "Testing",
      "CI/CD",
      "Documentation",
      "Team Collaboration",
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: "https://imgs.search.brave.com/-yQluBLk01tM2SbXmjl7sbv5dkj38OsqqHEa691MKpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/YS9hYy9IaW5kdXN0/YW5fSW5zdGl0dXRl/X29mX1RlY2hub2xv/Z3lfYW5kX1NjaWVu/Y2VfbG9nby5wbmcv/MjIwcHgtSGluZHVz/dGFuX0luc3RpdHV0/ZV9vZl9UZWNobm9s/b2d5X2FuZF9TY2ll/bmNlX2xvZ28ucG5n",
      school: "Hindustan Institute of Technology and Science, Chennai",
      date: "2022 - 2025",
      grade: "9.53 CGPA",
      desc: "I am currently pursuing a Bachelor's degree Computer Applications at Hindustan Institue of Technology and Science, Chennai. I have completed 3  semesters and have a CGPA of 9.53. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at HITS, where I am learning and working on exciting projects with a team of talented developers.",
      degree: "Bachelor's in Computer Applications- BCA, Cybersecurity",
    },
    {
      id: 1,
      img: "https://www.yayskool.com/images/school/shri-b-s-mootha-girls-senior-secondary-school-chennai-797618287.png",
      school: "Shri B.S Mootha Girls Senior Secondary School (SBSM), Chennai",
      date: "2020-2022",
      grade: "89.2%",
      desc: "I completed my class 12 high school education at SBSM,  where I studied Commerce with Computer Science.",
      degree: "CBSE(XII), Commerce with Computer",
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Network Analysis and Report Generation App with ML-based Attack Detection",
      date: "March 2025",
      description: 
        "A web app that captures and analyzes network traffic using Wireshark, generates detailed reports, and detects attacks with ML. It supports live capture, PCAP uploads, filtering, and multi-format exports, making it useful for network monitoring and cybersecurity analysis.",
      image: 
          wiresharkImage,
      tags: [
        "Flask", 
        "Tshark", 
        "Pyshark", 
        "pandas", 
        "sci-kit learn", 
        "React", 
        "ChartJS",
      ],
      category: "web app",
      github: "https://github.com/codercake/wireshark-reports-generation",
    },
    {
      id: 1,
      title: "Task Management App",
      date: "Dec 2024",
      description: 
        "A simple Task Management System built with CRUD operations using useTasks for state management.",
      image: 
        taskmgtImage, 
      tags: [
        "Next.js", 
        "TypeScript", 
        "CSS", 
        "Vercel", 
      ],
      category: "web app",
      github: "https://github.com/codercake/task-mgt-sys",
      webapp: "https://task-mgt-sys.vercel.app/",
    },
    {
      id: 3,
      title: "GigHive",
      date: "October 2024",
      description: 
        "GigHive is a job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides features like job listings, advanced search and filters, personalized user profiles, real-time notifications, secure authentication with token-based access, and a responsive design. The platform enhances the job-seeking and recruitment experience with a modern, user-friendly interface.",
      image: 
        gighiveImage,
      tags: ["React.js", "MongoDB", "Express.js", "Node.js", "JWT Authentication"],
      category: "web app",
      github: "https://github.com/codercake/gighive-jobportal",
      webapp: "https://gighive-client.vercel.app/",
    },
    {
      id: 4,
      title: "Fake News Detection",
      date: "July 2023",
      description: 
        "Fake News Detection leverages Natural Language Processing (NLP) techniques and machine learning models to analyze linguistic patterns, semantic cues, and metadata in news articles, social media posts, and other text resources. The system uses Keras and TensorFlow for training deep learning models and includes a React-based web interface for seamless interaction. It aims to combat misinformation by providing accurate predictions with real-time feedback.",
      image: 
        "https://s3.amazonaws.com/libapps/accounts/987/images/fnewsinvation.jpg",
      tags: [
        "Python", 
        "Keras", 
        "TensorFlow", 
        "NLP", 
        "Pickle", 
        "React", 
        "Flask", 
        "Deep Learning"
      ],
      category: "machine learning",
      github: "https://github.com/codercake/fake-news-prediction/tree/main",
    },
  ];
  
  