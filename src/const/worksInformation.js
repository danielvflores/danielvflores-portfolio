export const technologies = [
  {
    title: "Java",
    description: "Experiencia sólida en desarrollo Java junto con Maven para la gestión de dependencias. Dominio de programación orientada a objetos, desarrollo de APIs seguras e integración con Spring Framework.",
    imageUrl: "/icons/java-icon.png",
    imageAlt: "Logo de Java"
  },
  {
    title: "TypeScript",
    description: "Experiencia en TypeScript para desarrollo de aplicaciones web. Implementación de tipado estático estricto, interfaces bien planificadas y un enfoque en la calidad del código.",
    imageUrl: "/icons/ts-icon.png",
    imageAlt: "Logo de TypeScript"
  },
  {
    title: "NodeJS",
    description: "Conocimientos versátiles en NodeJS tanto para desarrollo backend como desarrollo frontend. Experiencia creando APIS RESTful, microservicios y bots de Discord.",
    imageUrl: "/icons/nodejs-icon.png",
    imageAlt: "Logo de NodeJS"
  },
  {
    title: "Bases de Datos",
    description: "Experiencia con gestores de bases de datos, tanto relacionales como no relacionales. Entre ellas se encuentran PostgreSQL, SQLite y MongoDB.",
    imageUrl: "/icons/mongodb-icon.png",
    imageAlt: "Logo de Database"
  },
  {
    title: "Herramientas Sysadmin",
    description: "Administración de sistemas en entornos Linux. Experiencia con Docker, gestión de firewall (ufw), segmentación de redes y control de usuarios. Desarrollo de scripts para monitoreo de usuarios y procesos.",
    imageUrl: "/icons/server-icon.png",
    imageAlt: "Logo de Herramientas Sysadmin"
  },
  {
    title: "Herramientas Ciberseguridad",
    description: "Experiencia en herramientas de ciberseguridad para pentesting, utilizando Nmap, OWASP ZAP y sqlmap.",
    imageUrl: "/icons/security-icon.png",
    imageAlt: "Logo de Herramientas Ciberseguridad"
  }
];

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