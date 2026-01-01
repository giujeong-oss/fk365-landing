'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FK</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Fresh Kitchen 365</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">회사 소개</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">서비스</a>
              <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">제품</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">문의</a>
              <a
                href="https://app.freshkitchen365.com"
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                로그인
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-gray-600 hover:text-green-600" onClick={() => setMobileMenuOpen(false)}>회사 소개</a>
                <a href="#services" className="text-gray-600 hover:text-green-600" onClick={() => setMobileMenuOpen(false)}>서비스</a>
                <a href="#products" className="text-gray-600 hover:text-green-600" onClick={() => setMobileMenuOpen(false)}>제품</a>
                <a href="#contact" className="text-gray-600 hover:text-green-600" onClick={() => setMobileMenuOpen(false)}>문의</a>
                <a
                  href="https://app.freshkitchen365.com"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg text-center hover:bg-green-700 transition-colors font-medium"
                >
                  로그인
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                365일 신선한<br />
                <span className="gradient-text">프리미엄 식자재</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                태국 파타야 & 방콕 지역 레스토랑, 호텔, 급식업체를 위한
                신선한 채소, 과일, 주방 비품을 365일 안정적으로 공급합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors text-center shadow-lg shadow-green-600/30"
                >
                  문의하기
                </a>
                <a
                  href="#services"
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors text-center"
                >
                  서비스 알아보기
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🥬</div>
                  <p className="text-2xl font-bold">Fresh & Quality</p>
                  <p className="text-green-100 mt-2">Since 2020</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-500">거래처</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">1,000+</div>
                <div className="text-sm text-gray-500">제품 종류</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5+', label: '운영 연차', icon: '📅' },
              { value: '500+', label: '파트너 고객사', icon: '🤝' },
              { value: '1,000+', label: '취급 품목', icon: '📦' },
              { value: '99%', label: '정시 배송률', icon: '🚚' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">회사 소개</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh Kitchen 365는 태국 현지에서 신선한 채소, 과일, 주방 비품을 전문으로 공급하는 기업입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '신뢰할 수 있는 품질',
                description: '엄격한 품질 관리 시스템을 통해 채소와 과일의 최상의 신선도를 유지합니다. 매일 새벽 시장에서 직접 검수하여 최고 품질만을 선별합니다.',
                icon: '✅',
              },
              {
                title: '365일 안정 공급',
                description: '비 오나 눈 오나 365일 안정적인 공급을 약속드립니다. 철저한 재고 관리와 다중 공급망으로 품절 걱정 없이 운영하세요.',
                icon: '📆',
              },
              {
                title: '합리적인 가격',
                description: '중간 유통 과정을 최소화하여 최고 품질을 합리적인 가격에 제공합니다. 고객 등급별 맞춤 가격 정책으로 더 큰 혜택을 드립니다.',
                icon: '💰',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">서비스</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              고객의 니즈에 맞춘 다양한 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '정기 배송',
                description: '매일 정해진 시간에 정확하게 배송',
                icon: '🚛',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                title: '긴급 배송',
                description: '당일 긴급 주문도 신속하게 처리',
                icon: '⚡',
                color: 'bg-yellow-50 text-yellow-600',
              },
              {
                title: '맞춤 컨설팅',
                description: '식자재 원가 절감 컨설팅 제공',
                icon: '💼',
                color: 'bg-purple-50 text-purple-600',
              },
              {
                title: '재고 관리',
                description: '실시간 재고 현황 모니터링',
                icon: '📊',
                color: 'bg-green-50 text-green-600',
              },
            ].map((service, idx) => (
              <div key={idx} className={`p-6 rounded-2xl ${service.color} hover:scale-105 transition-transform`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">취급 제품</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              신선 채소부터 과일, 주방 비품까지 주방에 필요한 모든 것을 공급합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: '채소류', icon: '🥬', count: '200+' },
              { name: '과일류', icon: '🍎', count: '100+' },
              { name: '가공식품', icon: '🥫', count: '300+' },
              { name: '주방 비품', icon: '🍽️', count: '150+' },
              { name: '소모품', icon: '📦', count: '200+' },
            ].map((category, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors">
                <div className="text-5xl mb-3">{category.icon}</div>
                <div className="font-bold mb-1">{category.name}</div>
                <div className="text-green-200 text-sm">{category.count} 품목</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet365 Sister Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-red-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="text-sm text-red-600 font-semibold bg-red-100 px-3 py-1 rounded-full">
                    자매회사
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  고기 주문은<br />
                  <span className="text-red-600">Meet365</span>에서!
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  프리미엄 돼지고기, 소고기, 닭고기가 필요하신가요?<br />
                  Fresh Kitchen 365의 자매회사 <strong>Meet365</strong>에서
                  엄선된 최고급 육류를 만나보세요.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">🥩</span>
                    <span>프리미엄 돼지고기 (삼겹살, 목살, 항정살 등)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">🥓</span>
                    <span>최고급 소고기 (등심, 안심, 갈비 등)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">🍗</span>
                    <span>신선한 닭고기 (닭다리, 닭가슴살 등)</span>
                  </li>
                </ul>
                <a
                  href="https://www.meet365.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
                >
                  Meet365 방문하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl mb-4">🥩</div>
                    <p className="text-2xl font-bold">Premium Meat</p>
                    <p className="text-red-100 mt-2">365일 신선 배송</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-500">거래처</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-500">신선도 보장</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">문의하기</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fresh Kitchen 365와 함께 하고 싶으시다면 언제든지 연락주세요.
                전문 상담원이 친절하게 안내해 드립니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">전화 문의</div>
                    <div className="font-semibold text-gray-900">+66 038-XXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Line ID</div>
                    <div className="font-semibold text-gray-900">@freshkitchen365</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">이메일</div>
                    <div className="font-semibold text-gray-900">contact@freshkitchen365.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">주소</div>
                    <div className="font-semibold text-gray-900">Pattaya, Chonburi, Thailand</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">견적 문의</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">회사/상호명</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">담당자명</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="담당자명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="문의 내용을 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FK</span>
                </div>
                <span className="font-bold text-xl">Fresh Kitchen 365</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                태국 파타야 & 방콕 지역<br />
                채소, 과일, 주방 비품 전문 유통
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">정기 배송</a></li>
                <li><a href="#" className="hover:text-white transition-colors">긴급 배송</a></li>
                <li><a href="#" className="hover:text-white transition-colors">맞춤 컨설팅</a></li>
                <li><a href="#" className="hover:text-white transition-colors">재고 관리</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사 정보</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">취급 제품</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">고객 지원</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="https://app.freshkitchen365.com" className="hover:text-white transition-colors">
                    주문 시스템 로그인
                  </a>
                </li>
                <li><a href="#contact" className="hover:text-white transition-colors">고객 문의</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">자매회사</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="https://www.meet365.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    Meet365 - 프리미엄 육류
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Fresh Kitchen 365. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
