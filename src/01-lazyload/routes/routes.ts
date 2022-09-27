import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  name: string,
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: 'lazy-layout',
    path: '/lazy-layout/*',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },

  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]