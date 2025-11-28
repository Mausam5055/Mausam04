import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mausam ",
  lastName: "Kar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to My Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Website",
    icon: "globe",
    link: "https://mausam04.vercel.app/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mausam5055",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mausam-kar-6388861a7/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "rikikumkar@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Mausam Kar, a design engineer at <InlineCode>VIT</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mausam is a Indian-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX , resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-7.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "VIT Bhopal University",
        description: <>B.Tech in Computer Science and Engineering(AIML)</>,
      },
      {
        name: "Ramanuj Gupta Senior Secondary School",
        description: <>Primary and Secondary Education</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-08.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-09.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-10.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const projects = {
  label: "Projects",
  title: "My projects",
  description: `A collection of projects by ${person.name}`,
  // Projects showcase
  items: [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/images/gallery/img-01.jpg",
      github: "https://github.com/Mausam5055/project-1",
      orientation: "vertical",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "/images/gallery/img-02.jpeg",
      github: "https://github.com/Mausam5055/project-2",
      orientation: "horizontal",
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      image: "/images/gallery/img-03.jpg",
      github: "https://github.com/Mausam5055/project-3",
      orientation: "vertical",
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      image: "/images/gallery/img-04.webp",
      github: "https://github.com/Mausam5055/project-4",
      orientation: "horizontal",
    },
    {
      title: "Project 5",
      description: "Description of project 5",
      image: "/images/gallery/img-05.jpg",
      github: "https://github.com/Mausam5055/project-5",
      orientation: "horizontal",
    },
    {
      title: "Project 6",
      description: "Description of project 6",
      image: "/images/gallery/img-06.jpg",
      github: "https://github.com/Mausam5055/project-6",
      orientation: "vertical",
    },
    {
      title: "Project 7",
      description: "Description of project 7",
      image: "/images/gallery/img-07.jpg",
      github: "https://github.com/Mausam5055/project-7",
      orientation: "horizontal",
    },
    {
      title: "Project 8",
      description: "Description of project 8",
      image: "/images/gallery/img-08.jpg",
      github: "https://github.com/Mausam5055/project-8",
      orientation: "vertical",
    },
    {
      title: "Project 9",
      description: "Description of project 9",
      image: "/images/gallery/img-09.jpg",
      github: "https://github.com/Mausam5055/project-9",
      orientation: "horizontal",
    },
    {
      title: "Project 10",
      description: "Description of project 10",
      image: "/images/gallery/img-10.jpg",
      github: "https://github.com/Mausam5055/project-10",
      orientation: "horizontal",
    },
    {
      title: "Project 11",
      description: "Description of project 11",
      image: "/images/gallery/img-11.jpg",
      github: "https://github.com/Mausam5055/project-11",
      orientation: "vertical",
    },
    {
      title: "Project 12",
      description: "Description of project 12",
      image: "/images/gallery/img-12.jpg",
      github: "https://github.com/Mausam5055/project-12",
      orientation: "horizontal",
    },
    {
      title: "Project 13",
      description: "Description of project 13",
      image: "/images/gallery/img-13.jpg",
      github: "https://github.com/Mausam5055/project-13",
      orientation: "horizontal",
    },
    {
      title: "Project 14",
      description: "Description of project 14",
      image: "/images/gallery/img-14.jpg",
      github: "https://github.com/Mausam5055/project-14",
      orientation: "horizontal",
    },
    {
      title: "Project 15",
      description: "Description of project 15",
      image: "/images/gallery/img-01.jpg",
      github: "https://github.com/Mausam5055/project-15",
      orientation: "horizontal",
    },
    {
      title: "Project 16",
      description: "Description of project 16",
      image: "/images/gallery/img-02.jpeg",
      github: "https://github.com/Mausam5055/project-16",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, projects };
