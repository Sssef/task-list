// src/vite-env.d.ts
/// <reference types="vite/client" />

// CSS модули
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

// Side-effect CSS imports (обычные стили)
declare module '*.css?inline' {
  const content: string
  export default content
}