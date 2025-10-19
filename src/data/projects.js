// src/data/projects.js
export const projects = [
  {
    title: "Writook Platform",
    description: "Plataforma completa de escritura colaborativa inspirada en Wattpad, desarrollada con arquitectura full-stack moderna. Sistema integral que incluye autenticación JWT, gestión de historias, editor de capítulos con TinyMCE, sistema de comentarios y rating, con frontend React responsivo y backend Spring Boot robusto con API RESTful.",
    techs: ["Java 21", "Spring Boot", "Maven", "React", "TinyMCE", "JWT", "REST API", "Tailwind CSS"],
    repoUrl: "https://github.com/danielvflores/Writook",
    demoUrl: "https://writook.danielvflores.xyz",
    featured: true,
    status: "En desarrollo",
    type: "fullstack",
    icon: "📚",
    gradient: "from-purple-500 to-indigo-600",
    year: "2025"
  },
  {
    title: "Sguard Project",
    description: "Plataforma completa de seguridad y moderación para Discord desarrollada como monorepo. Incluye bot inteligente con análisis de contenido, API RESTful robusta con autenticación OAuth2, interfaz web moderna con dashboard administrativo, y código compartido optimizado. Solución empresarial escalable para automatización de moderación con arquitectura full-stack integrada.",
    techs: ["TypeScript", "Node.js", "Discord.js", "DiscordX", "Express.js", "React", "Next.js", "PostgreSQL", "OAuth2", "Docker", "Monorepo", "REST API"],
    repoUrl: "https://github.com/danielvflores/sguard-project",
    demoUrl: null,
    featured: false,
    status: "En desarrollo",
    type: "fullstack",
    icon: "🛡️",
    gradient: "from-blue-500 to-cyan-600",
    year: "2025"
  },
  {
    title: "Parallel Nmap Port Scanner",
    description: "Herramienta avanzada de ciberseguridad para reconocimiento de redes con ejecución multi-hilo. Scanner profesional con detección automática de privilegios, validación de entrada robusta, resolución DNS, logging detallado y opciones de escaneo personalizables para auditorías de seguridad y pentesting.",
    techs: ["Python 3.6+", "Nmap", "Threading", "Subprocess", "Network Security", "Penetration Testing"],
    repoUrl: "https://github.com/danielvflores/nmap-port-mc-revision",
    demoUrl: null,
    featured: false,
    status: "Completado",
    type: "security",
    icon: "🔍",
    gradient: "from-red-500 to-orange-600",
    year: "2025"
  },
  {
    title: "System Token Plugin (STP)",
    description: "Plugin empresarial para Minecraft desarrollado con Java 8 y arquitectura orientada a objetos. Sistema completo de economía virtual con gestión de tokens, encantamientos personalizados mediante manipulación NBT, interfaces gráficas configurables y integración con PlaceholderAPI para servidores de alto rendimiento.",
    techs: ["Java 8", "Spigot API", "SQLite", "NBT Manipulation", "PlaceholderAPI", "Maven"],
    demoUrl: null,
    repoUrl: "https://github.com/danielvflores/system-token-plugin",
    featured: false,
    status: "Completado",
    type: "plugin",
    icon: "⚡",
    gradient: "from-green-500 to-emerald-600",
    year: "2025"
  }
];

export const technologies = [
  {
    title: "JavaScript",
    description: "Dominio avanzado de JavaScript ES6+ para desarrollo full-stack. Experiencia en programación asíncrona, manipulación del DOM, APIs modernas y desarrollo de aplicaciones escalables con patrones de diseño profesionales.",
    imageUrl: "/icons/js-icon.png",
    imageAlt: "Logo de JavaScript"
  },
  {
    title: "TypeScript",
    description: "Especialización en TypeScript para desarrollo de aplicaciones empresariales robustas. Implementación de tipado estático estricto, interfaces avanzadas y arquitecturas escalables que garantizan código mantenible y libre de errores en producción.",
    imageUrl: "/icons/ts-icon.png",
    imageAlt: "Logo de TypeScript"
  },
  {
    title: "Java",
    description: "Experiencia sólida en desarrollo Java empresarial con Maven para gestión de dependencias. Dominio de programación orientada a objetos, desarrollo de APIs robustas, integración con Spring Framework y implementación de soluciones backend escalables.",
    imageUrl: "/icons/java-icon.png",
    imageAlt: "Logo de Java"
  },
  {
    title: "Python",
    description: "Competencia en desarrollo Python para automatización de procesos, scripting avanzado y desarrollo backend. Experiencia en frameworks web, procesamiento de datos y implementación de soluciones eficientes para optimización de workflows empresariales.",
    imageUrl: "/icons/py-icon.png",
    imageAlt: "Logo de Python"
  },
  {
    title: "Database Management",
    description: "Experiencia integral en gestión de bases de datos relacionales y NoSQL (MongoDB, MySQL, SQLite). Especialización en modelado de datos eficiente, optimización de consultas, implementación de índices y arquitecturas de persistencia escalables.",
    imageUrl: "/icons/mongodb-icon.png",
    imageAlt: "Logo de Database"
  },
  {
    title: "API Development",
    description: "Desarrollo profesional de APIs RESTful siguiendo mejores prácticas de la industria. Implementación de sistemas de autenticación robustos, autorización granular, documentación técnica completa y arquitecturas de microservicios escalables.",
    imageUrl: "/icons/api-icon.png",
    imageAlt: "Logo de API Development"
  }
];
