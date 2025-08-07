/// <reference types="astro/client" />

// Declaraciones de tipos adicionales para resolver errores de TypeScript
declare module '*.astro' {
  const Component: any;
  export default Component;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.js' {
  const content: any;
  export default content;
}
