export default interface GlobalTranslationsModel {
   navbar: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
      menu: string;
      footer1: string;
      footer2: string;
   };
   home: {
      developer: string;
   };
   about: {
      title: string;
      card: string;
      sub1: string;
      sub2: string;
      sub3: string;
      sub4: string;
      sub5: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
   };
   skills: {
      title: string;
      main: string;
      secondary: string;
      inProgress: String;
   };
   projects: {
      title: string;
      button: string;
      filer: {
         open: string;
         close: string;
         drag: string;
         title: string;
         technologies: string;
         message1: string;
         message2: string;
         reset: string;
      };
      details: {
         viewCode: string;
         visitSite: string;
         roleTile: string;
         dateTitle: string;
         overviewTitle: string;
         featuresTitle: string;
         technologiesUsed: string;
         back: string;
      };
   };
   contact: {
      title: string;
      contactMeAt: string;
      placeholders: {
         firstName: string;
         lastName: string;
         email: string;
         phone: string;
         message: string;
      };
      errors: {
         noFirstName: string;
         invalidFirstName: string;
         noLastName: string;
         invalidLastName: string;
         noEmail: string;
         invalidEmail: string;
         noMessage: string;
      };
      send: string;
      successMessage: string;
      errorMessage: string;
   };
}
