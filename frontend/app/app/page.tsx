// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         <h1>
//           Welcome to the <br />
//           Attendance Management App <br />
//         </h1>
//         <br />
//         <p>
//         勤怠管理を行うアプリケーションです。 <br />
//         自分の勤怠管理する場合は、アカウントが必要です！ <br />
//         </p>
//         <Link
//           className="mb-2 flex h-2 rounded-md bg-blue-600 p-2 md:h-10"
//           href="/sign-up">
//             アカウント作成はこちら
//         </Link>
//         <Link
//           className="mb-2 flex h-2 rounded-md bg-blue-600 p-2 md:h-10"
//           href="/users">
//             閲覧のみの方はここをクリック
//         </Link>
//       </div>
//     </main>
//   );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V7dTvUh8abi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight text-gray-900 dark:text-gray-50">
                Unleash the Power of Our App
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover how our app can revolutionize the way you work, play, and connect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                アカウント作成
              </Link>
              <Link
                href="graphql"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                ユーザーデータ
              </Link>
              <Link
                href="/users"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                閲覧のみの方はこちら
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                  Discover What Sets Us Apart
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our app offers a unique set of features that will revolutionize the way you work, play, and connect.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Seamless Collaboration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Effortlessly work together with your team, no matter where you are.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Powerful Automation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your workflows and save time with our intelligent automation tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Personalized Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gain valuable insights tailored to your unique needs and preferences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Secure and Scalable</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rest assured that your data is safe and your app can grow with your business.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Intuitive User Experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enjoy a seamless and user-friendly experience that makes your life easier.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">Comprehensive Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get the help you need, whenever you need it, from our dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from real people who have transformed their lives with our app.
              </p>
            </div>
            <div className="divide-y rounded-lg border dark:border-gray-800">
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch justify-center divide-x dark:divide-gray-800">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-2 text-center">
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                      "Life-changing!"
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">- John Doe, Entrepreneur</p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-2 text-center">
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                      "Couldn't live without it!"
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">- Jane Smith, Designer</p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="grid gap-2 text-center">
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                      "Game-changer!"
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">- Bob Johnson, Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
