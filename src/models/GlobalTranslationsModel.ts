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
         message: string;
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
   contact: {};
}
