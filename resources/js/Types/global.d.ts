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
    };
  }
}
