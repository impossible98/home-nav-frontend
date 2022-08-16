// import third-party modules
import React, { lazy, Suspense, type ReactNode } from 'react';

const Home = lazy(() => import('../pages/Home'));
const lazyLoad = (children: ReactNode) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      {children}
    </Suspense>
  )
}
const router = [
  {
    path: "/",
    element: lazyLoad(<Home />),
  }
]

export default router
