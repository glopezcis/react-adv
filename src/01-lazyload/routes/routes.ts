import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  name: string,
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../pages/LazyPage3'))

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-01'
  },

  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-02'
  },

  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-03'
  }
]