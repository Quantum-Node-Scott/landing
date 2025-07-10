"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Users, Trophy, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const stats = [
    { icon: Users, value: "500+", label: "수강생" },
    { icon: Trophy, value: "95%", label: "성적 향상률" },
    { icon: TrendingUp, value: "10년+", label: "교육 경력" },
    { icon: Calculator, value: "50+", label: "전문 강사" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                수학이{" "}
                <span className="text-blue-600">쉬워지는 특별한 방법</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                체계적인 커리큘럼과 개인별 맞춤 학습으로 수학 실력을 완전히 바꿔보세요. 
                기초부터 심화까지, 모든 학생이 성공할 수 있도록 도와드립니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/register">무료 체험 신청</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">서비스 둘러보기</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-indigo-400 rounded-full"></div>
        <div className="absolute bottom-20 right-60 w-20 h-20 bg-purple-400 rounded-full"></div>
      </div>
    </section>
  )
} 