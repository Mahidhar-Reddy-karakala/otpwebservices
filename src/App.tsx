
import Page from "@/components/docsPage"
import { LandingPage } from "@/pages/LandingPage"
import { Routes, Route } from 'react-router-dom'
import Signinpage from "@/pages/Signinpage"
import LoginPage from "@/pages/loginPage"
function App() {
  return (
    // <div className="bg-black text-white min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/documentation"
            element={<Page/>}
          />
          <Route path='/signin' element={<Signinpage />} />
          <Route path='/login' element={<LoginPage />} />
          {/* add a contact route if you create one */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">Not Found</div>} />
        </Routes>
      </main>
    // </div>
  )
}

export default App