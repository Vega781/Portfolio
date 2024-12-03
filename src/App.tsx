import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'

function App() {
    return (
        <>
            <div className='centered'>
                <Header />
            </div>
            <MainPage />
            <div className='centered'>
                <Footer />
            </div>
        </>
    )
}

export default App
