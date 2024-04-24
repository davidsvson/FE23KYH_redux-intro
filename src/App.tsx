
import './App.css'
import Counter from './components/Counter'
import { useSelector } from 'react-redux'
import { RootState } from './main'
import Profile from './components/Profile';

function App() {

  const countValue = useSelector((state : RootState) => state.conter);
  const name = useSelector((state : RootState) => state.profile.name);

  return (
    <>
      <Profile />
      {countValue}
      <Counter />
      <Counter />
      <Counter />
      {name}
    </>
  )
}

export default App
