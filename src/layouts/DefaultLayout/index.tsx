import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Content } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  )
}
