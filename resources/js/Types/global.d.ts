import { PageProps as InertiaPageProps } from '@inertiajs/core';

declare module '@inertiajs/core' {
  interface PageProps extends InertiaPageProps {
    auth: {
      user: {
        id: number;
        name: string;
        email: string;
        role: 'admin' | 'editor' | 'user';
      } | null;
    },
    menus: {
      id: number,
      name: string
      url: string
      submenu?: {
        name: string
        url: string
      }[]
      contact?: {
        url_wa: string
        url_ig: string
        url_tt: string
        url_lk: string
      }
    }[],
    contact: {
      id: number
      id_menu: number
      url_wa?: string
      url_ig?: string
      url_tt?: string
      url_lk?: string
    },
  }
}
