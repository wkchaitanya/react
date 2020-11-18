import { lazy } from 'react';

const mainConceptsComponent = lazy(
  () => import('../components/component-main-concepts/component-main-concepts-container')
);

const advanceConceptsComponent = lazy(
  () => import('../components/component-advance-concepts/component-advance-concepts-container')
);

const ApiReferencesContainer = lazy(
  () => import('../components/component-api-references/component-api-references-container')
);

const HooksContainer = lazy(
  () => import('../components/component-hooks/component-hooks-container')
);

export const routes = [
  {
    component: mainConceptsComponent,
    path: '/main-concepts'
  },
  {
    component: advanceConceptsComponent,
    path: '/advance-guides'
  },
  {
    component: ApiReferencesContainer,
    path: '/api-references'
  },
  {
    component: HooksContainer,
    path: '/hooks'
  }
];
