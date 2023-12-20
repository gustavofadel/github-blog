import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { PostsProvider } from './contexts/PostsContext'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <UserProvider>
          <PostsProvider>
            <Router />
          </PostsProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
