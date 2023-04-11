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
   home: {
      developer: "Desarrollador de Software",
   },
   about: {
      title: "Sobre Mí",
      card: "Disfruto pensar fuera de la caja",
      sub1: "Intentar cosas nuevas",
      sub2: "Soy Disciplinado con una Gran atención al detalle",
      sub3: "Hablo Inglés, Español y Coding",
      sub4: "Aprendo Rápido",
      sub5: "Amante de Clean Code",
      p1: "Soy un desarrollador de Software especializado en Front-End. Tengo una gran pasión por el código, resolver problemas y aprender nuevas tecnologías.",
      p2: "Soy una persona organizada, aprendo rápido, y con gran atención a los detalles.",
      p3: "Programar es una pasión que me motiva a aprender y mejorar mis habilidades día a día.",
      p4: "Aunque me especializo en React, estoy interesado en todo el espectro de Front-End y en trabajar en todo tipo de projects con todo tipo de personas.",
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
         message1: "Selecciona una tecnología de abajo para filtrar proyectos",
         message2: "Seleccionaste todo!, ¿Que demonios estás buscando?",
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
