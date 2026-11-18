'use client';

import { signIn } from 'next-auth/react';

export default function AdminSignInButton() {
  return <button className="admin-primary" type="button" onClick={() => signIn('github', { callbackUrl: '/admin' })}>
    Entrar com GitHub ↗
  </button>;
}
