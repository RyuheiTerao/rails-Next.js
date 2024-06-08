/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B25XXasQAVO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUpForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">サインアップ</CardTitle>
        <CardDescription>新しいアカウントを作成するためのフォームです。</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">ユーザー名</Label>
            <Input id="username" type="text" placeholder="ユーザー名を入力" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="メールアドレスを入力" required />
          </div>
          <div className="relative space-y-2">
            <Label htmlFor="password">パスワード</Label>
            <Input id="password" type="password" required />
            <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
              <EyeIcon className="h-4 w-4" />
              <span className="sr-only">パスワードの表示を切り替える</span>
            </Button>
          </div>
          <div className="relative space-y-2">
            <Label htmlFor="confirm-password">パスワードの確認</Label>
            <Input id="confirm-password" type="password" required />
            <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
              <EyeIcon className="h-4 w-4" />
              <span className="sr-only">パスワードの表示を切り替える</span>
            </Button>
          </div>
          <Button type="submit" className="w-full">
            サインアップ
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          アカウントをお持ちの場合は{" "}
          <Link href="#" className="underline" prefetch={false}>
            ログイン
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
