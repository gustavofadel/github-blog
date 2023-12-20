/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_USER_ENDPOINT: string
  readonly VITE_POSTS_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
