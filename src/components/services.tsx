"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Target, Users } from "lucide-react"

const services = [
  {
    id: "basic",
    icon: BookOpen,
    title: "기초 수학 완성",
    description: "수학의 기본 개념을 체계적으로 학습하여 탄탄한 기초를 다집니다.",
    features: ["개념 이해 중심", "단계별 학습", "맞춤형 진도 관리"],
    image: "https://picsum.photos/400/250?random=1"
  },
  {
    id: "advanced",
    icon: Brain,
    title: "고급 수학 심화",
    description: "심화 과정을 통해 문제 해결 능력과 사고력을 극대화합니다.",
    features: ["심화 문제 풀이", "논리적 사고력 향상", "창의적 문제 해결"],
    image: "https://picsum.photos/400/250?random=2"
  },
  {
    id: "exam",
    icon: Target,
    title: "시험 완벽 대비",
    description: "수능, 내신 시험에 완벽하게 대비할 수 있도록 특별 커리큘럼을 제공합니다.",
    features: ["시험 유형 분석", "실전 모의고사", "오답 노트 관리"],
    image: "https://picsum.photos/400/250?random=3"
  },
  {
    id: "group",
    icon: Users,
    title: "소수정예 그룹 학습",
    description: "소규모 그룹으로 개인별 관리를 받으며 동기부여를 얻을 수 있습니다.",
    features: ["소수정예 클래스", "개인별 맞춤 관리", "동기부여 환경"],
    image: "https://picsum.photos/400/250?random=4"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            우리만의 특별한 교육 방법
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            체계적이고 과학적인 방법으로 수학 실력을 향상시켜 드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 