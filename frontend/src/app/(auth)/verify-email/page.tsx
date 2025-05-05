"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

export default function VerifyEmail() {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const resendVerification = async () => {
    setLoading(true)
    try {
      // TODO: API連携の実装 - メール再送信のエンドポイントを呼び出す
      setStatus("確認メールを再送信しました。")
    } catch (error) {
      setStatus("エラーが発生しました。しばらく経ってから再度お試しください。")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>メールアドレスの確認</CardTitle>
          <CardDescription>
            登録時のメールアドレスに確認メールを送信しました。
            メール内のリンクをクリックして、メールアドレスの確認を完了してください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {status && (
              <div className="text-sm text-green-600 bg-green-50 p-3 rounded">
                {status}
              </div>
            )}

            <p className="text-sm text-gray-600">
              確認メールが届いていない場合は、以下のボタンをクリックして再送信してください。
            </p>

            <Button
              onClick={resendVerification}
              disabled={loading}
              className="w-full"
            >
              {loading ? "送信中..." : "確認メールを再送信"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}