import Home from '@/pages/Home';
import Apage from '@/pages/A';
import Bpage from '@/pages/B';

type ComponentType =
  typeof Home |
  typeof Apage |
  typeof Bpage;

export interface RouterItem {
  exact?: boolean;
  path: string;
  component: ComponentType;
  Breadcrumb: string;
  menuKey?: string;
  children?: RouterItem[];
}

const routePath: RouterItem[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    Breadcrumb: 'Home page',
  },
  {
    exact: true,
    path: '/A',
    component: Apage,
    Breadcrumb: 'A page',
  }, {
    exact: true,
    path: '/B/:time',
    component: Bpage,
    Breadcrumb: 'B page',
  },
];

export default routePath;
