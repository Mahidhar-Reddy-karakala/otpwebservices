import { LoginForm } from '@/components/login-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-black border-t border-gray-800">
      <div className="absolute top-6 left-6">
        <NavLink to="/">
          <Button variant="outline">
            <ArrowLeft />
            Back to Home
          </Button>
        </NavLink>
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
