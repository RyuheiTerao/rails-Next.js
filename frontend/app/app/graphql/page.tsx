import UserList from '@/components/UserList'
import CreateUser from '@/components/CreateUser'
import { FlashMessage } from '@/components/ui/FlashMessage'

export default function Home() {
  return (
    <main>
    <FlashMessage />
      <section className="py-5 md:py-5 lg:py-200 bg-gray-100 dark:bg-gray-900">
          <UserList />
      </section>

      <section className="py-5 md:py-5 lg:py-200 bg-gray-100 dark:bg-gray-900">
        <CreateUser />
      </section>
    </main>
  )
}
