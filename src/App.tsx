import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MoviesContext } from './context/MoviesContext';

import './styles/global.scss';

export function App() {
  return (
    <MoviesContext>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContext>
  )
}