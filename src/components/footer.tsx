"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calculator, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">수학의 정석</span>
            </div>
            <p className="text-gray-400">
              체계적인 수학 교육으로 학생들의 성공을 이끌어가는 
              전문 수학 학원입니다.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#"><Youtube className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">빠른 링크</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">학원 소개</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">교육 과정</Link></li>
              <li><Link href="/teachers" className="text-gray-400 hover:text-white transition-colors">강사진</Link></li>
              <li><Link href="/success" className="text-gray-400 hover:text-white transition-colors">성공 사례</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">교육 서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/services#basic" className="text-gray-400 hover:text-white transition-colors">기초 수학</Link></li>
              <li><Link href="/services#advanced" className="text-gray-400 hover:text-white transition-colors">고급 수학</Link></li>
              <li><Link href="/services#exam" className="text-gray-400 hover:text-white transition-colors">시험 대비</Link></li>
              <li><Link href="/services#group" className="text-gray-400 hover:text-white transition-colors">소수정예</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">서울시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@mathacademy.kr</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 수학의 정석. 모든 권리 보유.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              이용약관
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 