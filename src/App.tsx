import './styles/main.css';
import logo from './assets/logo-nlw.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt='Logo of eSports site'></img>

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

      </div>
      <div className='pb-1 bg-nlw-gradient self-stretch mt-8 rounded-lg'>
        <div className='bg-[#2A2634] px-6 py-6'>
          
        </div>
      </div>
    </div>
  )
}

export default App
