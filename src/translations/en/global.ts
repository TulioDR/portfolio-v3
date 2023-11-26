import GlobalTranslationsModel from "@/models/GlobalTranslationsModel";

const english: GlobalTranslationsModel = {
   navbar: {
      menu: "Menu",
      home: "Home",
      skills: "Skills",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      footer1: "Made with",
      footer2: "in Carabobo, Venezuela.",
   },
   home: {
      developer: "Software Developer",
   },
   about: {
      title: "About Me",
      card: "I love to think outside the box",
      sub1: "To try new Things",
      sub2: "I'm Disciplined with a high attention to Detail",
      sub3: "I Speak English, Spanish and Coding",
      sub4: "I learn fast",
      sub5: "Clean Code Enyoer",
      p1: "I'm a software Developer specialized in Front-End. I have a serious passion for coding problem solving, and learning new technologies.",
      p2: "I'm a well-organized person, a fast learner with high attention to detail.",
      p3: "Coding is a passion that motivates me to learn and improve my skills day by day.",
      p4: "Although I'm very proficient with React and Next.js, I'm interested in the entire Front-End spectrum and working on all kinds of projects with all kinds of people.",
   },
   skills: {
      title: "Skills",
      main: "Main",
      secondary: "Secondary",
      inProgress: "In Progress",
   },
   projects: {
      title: "Projects",
      button: "View Projects",
      filer: {
         open: "Open Filter",
         close: "Close Filter",
         drag: "Drag me!",
         title: "Filter Projects",
         technologies: "Technologies",
         reset: "Reset",
      },
      details: {
         viewCode: "View Code",
         visitSite: "Visit Site",
         roleTile: "Role",
         dateTitle: "Date",
         overviewTitle: "Overview",
         featuresTitle: "Features",
         technologiesUsed: "Technologies Used",
         back: "Back",
      },
   },
   contact: {
      title: "Get In Touch",
      contactMeAt: "Contact me at",
      placeholders: {
         firstName: "First name",
         lastName: "Last name",
         email: "Email",
         phone: "Phone Number (optional)",
         message: "Write your message here",
      },
      errors: {
         noFirstName: "Please add your first name",
         invalidFirstName: "It should only contain letters and space",
         noLastName: "Please add your last name",
         invalidLastName: "It should only contain letters and space",
         noEmail: "Please add your email",
         invalidEmail: "Invalid Email",
         noMessage: "Please write a message",
      },
      send: "Send",
      successMessage: "Email sent successfully",
      errorMessage:
         "Something went wrong, try again later or message me directly by email.",
   },
};

export default english;
