import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HERO_INTRO } from './components/Hero/heroData'
import CvJobs from './components/Cv/CvJobs.jsx'

// cv.html stays hand-written and print-styled; only the intro and work experience
// are rendered here, from the same data the main site and /console use.
createRoot(document.getElementById('cv-intro')).render(<StrictMode>{HERO_INTRO}</StrictMode>)
createRoot(document.getElementById('cv-jobs')).render(<StrictMode><CvJobs /></StrictMode>)
