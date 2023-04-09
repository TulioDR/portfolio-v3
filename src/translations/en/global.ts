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
   // others: {
   //    goBack: "Go Back",
   // },
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
      p1: "I'm a self-taught Front-End Developer with basic knowledge of Back-End Technology.",
      p2: "I'm a well-organized person, problem solver with high attention to detail that specializes on React.",
      p3: "Coding is a passion that motivates me to learn and improve my skills day by day, either with my team or on my own.",
      p4: "Interested in the entire frontend spectrum and working on ambitious projects with positive people.",
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
         message1: "Select a technology from below to filter the projects",
         message2:
            "You just selected everything!, what the hell are you looking for?",
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
