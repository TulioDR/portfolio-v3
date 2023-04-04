import GlobalTranslationsModel from "@/models/GlobalTranslationsModel";

const spanish: GlobalTranslationsModel = {
   navbar: {
      menu: "Menú",
      home: "Home",
      skills: "Habilidades",
      about: "Sobre Mí",
      projects: "Proyectos",
      contact: "Contacto",
      footer1: "Hecho con",
      footer2: "en Carabobo, Venezuela.",
   },
   // others: {
   //    goBack: "Regresar",
   // },
   home: {
      developer: "Desarrollador de Software",
   },
   about: {
      title: "Sobre Mí",
      card: "Es importante pensar fuera de la caja",
      sub1: "Intentar cosas nuevas",
      sub2: "Soy Disciplinado con una Gran atención al detalle",
      sub3: "Hablo Inglés, Español y Coding",
      sub4: "Aprendo Rápido",
      sub5: "Amante de Clean Code",
      p1: "Soy un desarrollador de Front-End autodidacta, con conocimientos básicos de tecnología Back-End.",
      p2: "Soy una persona organizada, solucionador de problemas, tengo gran atención a los detalles.",
      p3: "Programar es una pasión que me motiva a aprender y mejorar mis habilidades día a día, ya sea con mi equipo o por mi cuenta.",
      p4: "Interesado en todo el espectro de FrontEnd y trabajar en projects ambiciosos con personas positivas.",
   },
   skills: {
      title: "Habilidades",
      main: "Principales",
      secondary: "Secundarias",
      inProgress: "En Progreso",
   },
   projects: {
      title: "Proyectos",
      button: "Ver Proyectos",
      filer: {
         open: "Abrir Filtro",
         close: "Cerrar Filtro",
         drag: "Arrástrame!",
         title: "Filtrar Proyectos",
         technologies: "Technologías",
         message: "Selecciona una tecnología de abajo para filtrar proyectos",
         reset: "Resetear",
      },
      details: {
         viewCode: "Ver Código",
         visitSite: "Visitar Sitio",
         roleTile: "Rol",
         dateTitle: "Fecha",
         overviewTitle: "Descripción",
         featuresTitle: "Características",
         technologiesUsed: "Tecnologías Usadas",
         back: "Volver",
      },
   },
   contact: {
      title: "Contáctame",
      contactMeAt: "Contáctame en",
      placeholders: {
         firstName: "Nombre",
         lastName: "Apellido",
         email: "Correo",
         phone: "Teléfono (opcional)",
         message: "Escribe tu mensage aquí",
      },
      errors: {
         noFirstName: "Por favor añade tu nombre",
         invalidFirstName: "Solo debería contener letras y espacios",
         noLastName: "Por favor añade tu apellido",
         invalidLastName: "Solo debería contener letras y espacios",
         noEmail: "Por favor añade tu correo",
         invalidEmail: "Correo inválido",
         noMessage: "Por favor escribe un mensaje",
      },
      send: "Enviar",
      successMessage: "Correo enviado con éxito",
      errorMessage:
         "Algo salió mal, inténtalo de nuevo más tarde o contáctame directamente por correo",
   },
};

export default spanish;
