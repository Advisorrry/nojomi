import { Routes, Route } from 'react-router'
import { lazy } from 'react'

const TestPage = lazy(() => import('./test-page'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  )
}
