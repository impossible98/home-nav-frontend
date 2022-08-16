// import third-party modules
import React, { lazy, Suspense, type ReactNode } from 'react';
// import local modules
import Base from '../layout/Base';

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
    element: <Base />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
    ]
  },
]

export default router
