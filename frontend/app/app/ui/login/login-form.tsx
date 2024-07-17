'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { gql, useMutation } from "@apollo/client";
import { useFlash } from "@/components/ui/FlashProvider";
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

interface LoginUserResponse {
  loginUser: {
    user: User;
  };
}

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;


const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;


export default function LoginForm(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setFlashMessage } = useFlash();
  const router = useRouter();

  const [loginUser, { loading }] = useMutation<LoginUserResponse>(LOGIN_USER, {
    update(cache, { data }) {
      if (data) {
        const userData = data.loginUser.user;
      }
    },
    onCompleted: (data) => {
      setFlashMessage({ type: 'success', message: '正常にログインできました' });
      router.push('/graphql');
    },
    onError: (error) => {
      setFlashMessage({ type: 'error', message: `エラー: ${error.message}` });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  const togglePasswordVisibility = (field: 'password' | 'passwordConfirmation') => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'passwordConfirmation') {
      setShowPasswordConfirmation(!showPasswordConfirmation);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">ログイン</CardTitle>
        <CardDescription>アカウントにログインするためのメールアドレスを入力してください。</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレスを入力" />
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute bottom-1 right-1 h-7 w-7"
                onClick={togglePasswordVisibility('password')}
              >
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">パスワードの表示を切り替える</span>
              </Button>
            </div>
            <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                パスワードを忘れた場合
              </Link>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'ログイン中...' : 'ログイン'}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            アカウントをお持ちでない場合は{" "}
          <Link href="/sign-up" className="underline" prefetch={false}>
            新規登録
          </Link>
        </div>
        </form>
      </CardContent>
    </Card>
  );
}

interface EyeIconProps extends React.SVGProps<SVGSVGElement> {}

function EyeIcon(props: EyeIconProps) {
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
  );
}
