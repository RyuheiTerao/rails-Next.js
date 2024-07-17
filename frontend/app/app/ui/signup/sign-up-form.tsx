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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserResponse {
  createUser: {
    user: User;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
    createUser(input: { name: $name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation }) {
      user {
        id
        name
        email
      }
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const schema = yup.object().shape({
  name: yup.string().required('ユーザー名は必須です'),
  email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
  password: yup.string()
    .min(8, 'パスワードは8文字以上である必要があります')
    .required('パスワードは必須です'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password')], 'パスワードが一致しません')
    .required('パスワード確認は必須です')
});

export default function SignUpForm(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

  const { setFlashMessage } = useFlash();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [createUser, { loading }] = useMutation<CreateUserResponse>(CREATE_USER, {
    update(cache, { data }) {
      if (data) {
        const newUser = data.createUser.user;
        const existingUsers = cache.readQuery<{ users: User[] }>({ query: GET_USERS });

        if (existingUsers) {
          cache.writeQuery({
            query: GET_USERS,
            data: { users: [...existingUsers.users, newUser] },
          });
        }
      }
    },
    onCompleted: (data) => {
      setFlashMessage({ type: 'success', message: 'ユーザーが正常に作成されました！' });
      router.push('/graphql');
    },
    onError: (error) => {
      setFlashMessage({ type: 'error', message: `エラー: ${error.message}` });
      router.push('/sign-up');
    }
  });

  const onSubmit = (data: any) => {
    createUser({ variables: data });
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
        <CardTitle className="text-2xl font-bold">サインアップ</CardTitle>
        <CardDescription>新しいアカウントを作成するためのフォームです。</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">ユーザー名</Label>
              <Input id="name" {...register('name')} placeholder="ユーザー名を入力" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" type="email" {...register('email')} placeholder="メールアドレスを入力" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register('password')}
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
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="passwordConfirmation">パスワードの確認</Label>
              <Input
                id="passwordConfirmation"
                type={showPasswordConfirmation ? "text" : "password"}
                {...register('passwordConfirmation')}
                placeholder="パスワードを入力"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute bottom-1 right-1 h-7 w-7"
                onClick={togglePasswordVisibility('passwordConfirmation')}
              >
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">パスワードの表示を切り替える</span>
              </Button>
              {errors.passwordConfirmation && <p className="text-red-500 text-sm">{errors.passwordConfirmation.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'サインアップ中...' : 'サインアップ'}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            アカウントをお持ちの場合は{" "}
            <Link href="/login" className="underline" prefetch={false}>
              ログイン
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
