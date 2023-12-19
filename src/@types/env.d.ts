/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
