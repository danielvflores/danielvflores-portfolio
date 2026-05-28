export const technologies = [
{
title: "Java",
description: "Experiencia sólida en desarrollo Java junto con Maven para la gestión de dependencias. Dominio de programación orientada a objetos, desarrollo de APIs e integración con Spring Framework.",
imageUrl: "/icons/java-icon.png",
imageAlt: "Logo de Java"
},
{
title: "TypeScript",
description: "Experiencia en TypeScript para desarrollo de aplicaciones web. Implementación de tipado estático, interfaces bien estructuradas y enfoque en la calidad y mantenibilidad del código.",
imageUrl: "/icons/ts-icon.png",
imageAlt: "Logo de TypeScript"
},
{
title: "NodeJS",
description: "Experiencia utilizando NodeJS para desarrollo de aplicaciones y automatización de tareas. Creación de APIs REST, bots de Discord y herramientas orientadas a entornos backend.",
imageUrl: "/icons/nodejs-icon.png",
imageAlt: "Logo de NodeJS"
},
{
title: "Python & Automation",
description: "Uso de Python para scripting, automatización y herramientas orientadas a administración de sistemas y análisis de redes. Experiencia trabajando con threading, subprocess y automatización de tareas.",
imageUrl: "/icons/py-icon.png",
imageAlt: "Logo de Python"
},
{
title: "Linux & VPS",
description: "Experiencia administrando servidores Linux y entornos VPS. Configuración de servicios, manejo de usuarios, firewall con UFW, procesos, despliegue de aplicaciones y administración básica de infraestructura.",
imageUrl: "/icons/server-icon.png",
imageAlt: "Logo de Linux VPS"
},
{
title: "Cloud & Infrastructure",
description: "Experiencia desplegando y manteniendo proyectos en servidores cloud y entornos self-hosted. Uso de Docker, configuración de dominios, reverse proxies y gestión de servicios para aplicaciones web.",
imageUrl: "/icons/cloud-icon.png",
imageAlt: "Logo de Cloud Infrastructure"
}
];

export const projects = [
  {
    title: "Writook Platform",
    description: "Plataforma fullstack de escritura inspirada en Wattpad. Sistema que incluye autenticación JWT, gestión de historias, editor de capítulos con TinyMCE, sistema de comentarios y rating, con frontend React y backend Spring Boot robusto con API RESTful.",
    techs: ["Java 21", "Spring Boot", "Maven", "React", "TinyMCE", "JWT", "REST API", "Tailwind CSS"],
    repoUrl: "https://github.com/danielvflores/Writook",
    demoUrl: "https://writook.danielvflores.xyz",
    // featured: false, // Not used in the UI, but can be added if needed
    status: "En desarrollo",
    type: "fullstack",
    icon: "📚",
    // gradient: "", // Not used in the UI, but can be added if needed
    year: "2025"
  },
  {
    title: "Parallel Nmap Port Scanner",
    description: "Herramienta de pentesting para reconocimiento de redes con ejecución en paralelo permitiendo escaneo eficiente en poco tiempo. Utiliza Python 3.6+ con módulos como Threading y Subprocess para facilitar los escaneos de puertos de Nmap.",
    techs: ["Python 3.6+", "Nmap", "Threading", "Subprocess", "Network Security", "Penetration Testing"],
    repoUrl: "https://github.com/danielvflores/nmap-port-mc-revision",
    demoUrl: null,
    // featured: false, // Not used in the UI, but can be added if needed
    status: "Completado",
    type: "security",
    icon: "🔍",
    // gradient: "", // Not used in the UI, but can be added if needed
    year: "2025"
  },
  {
    title: "System Token Plugin (STP)",
    description: "Plugin para Minecraft desarrollado con Java 8 y arquitectura orientada a objetos. Sistema de economía con gestión de tokens, encantamientos personalizados modificando NBT, interfaces gráficas configurables e integración con PlaceholderAPI para la llamada de variables externas al plugin.",
    techs: ["Java 8", "Spigot API", "SQLite", "NBT Manipulation", "PlaceholderAPI", "Maven"],
    demoUrl: null,
    repoUrl: "https://github.com/danielvflores/system-token-plugin",
    // featured: false, // Not used in the UI, but can be added if needed
    status: "Completado",
    type: "plugin",
    icon: "⚡",
    // gradient: "", // Not used in the UI, but can be added if needed
    year: "2025"
  }
];