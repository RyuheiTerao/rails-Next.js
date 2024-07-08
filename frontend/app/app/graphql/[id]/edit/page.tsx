import EditUser from '@/components/EditUser'
import { FlashMessage } from '@/components/ui/FlashMessage'

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
    <FlashMessage />
      <section className="py-5 md:py-5 lg:py-200 bg-gray-100 dark:bg-gray-900">
        <EditUser userId={id}  />
      </section>
    </main>
  )
}
