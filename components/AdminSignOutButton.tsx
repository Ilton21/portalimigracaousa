'use client';
import { signOut } from 'next-auth/react';
export default function AdminSignOutButton() {
  return <button className="admin-signout" onClick={() => signOut({callbackUrl:'/admin/login'})}>Sair da administração</button>;
}
