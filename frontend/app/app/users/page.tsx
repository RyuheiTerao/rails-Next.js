import { Inter } from 'next/font/google'
// import Calendar from '@/app/ui/users/calendar'
import dynamic from 'next/dynamic';
import '@/app/globals.css'
import { Suspense } from 'react';
import { CalendarSkeleton } from '@/app/ui/skeletons';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Dynamic Importを使用してクライアントサイドでのみレンダリングするようにする
const Calendar = dynamic(() => import('@/app/ui/users/calendar'), {
  ssr: false,
});

export default function Users() {
  return (
    <main className={inter.variable}>
      <div>
        <Suspense fallback={<CalendarSkeleton />}>
          <Calendar />
        </Suspense>
      </div>
    </main>
  );
}
