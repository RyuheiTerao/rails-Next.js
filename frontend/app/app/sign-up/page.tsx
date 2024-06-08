import Link from 'next/link';
import SignUpForm from '@/app/ui/signup/sign-up-form';

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SignUpForm />
      </div>
    </main>
  );
}
