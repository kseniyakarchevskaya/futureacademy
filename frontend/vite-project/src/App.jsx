import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './header/header.jsx'
import Footer from './Footer/footer.jsx'
import Page1 from './page1/page1.jsx'
import Contact from './Contact/contact.jsx'
import News from './News/news.jsx'
import More from './More/more.jsx'
import Auth from './Auth/auth.jsx'
import Event from './Event/event.jsx'
import Career from './Career/Career.jsx'
import CarPage from './careerPage/carPage.jsx'
import Academy from './Academy/academy.jsx'
import Courses from './Courses/courses.jsx'
import EventDetail from './EventDetail/eventDetail.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" index element={<Page1/>}/>
            <Route path="/contact" index element={<Contact/>}/>
            <Route path="/news" index element={<News/>}/>
            <Route path="/more" index element={<More/>}/>
            <Route path="/auth" index element={<Auth/>}/>
            <Route path="/event" index element={<Event/>}/>
            <Route path="/event-detail" element={<EventDetail/>}/>
            <Route path="/career" index element={<Career/>}/>
            <Route path="/carPage" index element={<CarPage/>}/>
            <Route path="/academy" index element={<Academy/>}/>
            <Route path="/courses" element={<Courses/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
