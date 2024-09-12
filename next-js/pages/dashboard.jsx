import { useEffect } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = cookie.get('token');
    
    if (!token) {
      router.push('/'); 
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard page!</p>
    </div>
  );
}