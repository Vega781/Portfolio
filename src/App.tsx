import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ExperiencePage } from './pages/ExperiencePage'

function App() {
    return (
        <BrowserRouter basename='/Portfolio/'>
            <div className='centered'>
                <Header />
            </div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/experience' element={<ExperiencePage />} />
                <Route path='/projects' element={<ProjectsPage />} />
            </Routes>
            <div className='centered'>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
