"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API連携の実装
    console.log(email)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>パスワードリセット</CardTitle>
          <CardDescription>
            登録時のメールアドレスを入力してください。パスワードリセット用のリンクを送信します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {status && (
              <div className="text-sm text-green-600 bg-green-50 p-3 rounded">
                {status}
              </div>
            )}

            <Button type="submit" className="w-full">
              リセットリンクを送信
            </Button>

            <div className="text-center text-sm text-gray-600">
              <Link href="/login" className="text-blue-600 hover:underline">
                ログインページに戻る
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}