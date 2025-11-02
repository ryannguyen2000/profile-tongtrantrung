'use client'

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { Briefcase, Award, Phone, MessageCircle, TrendingUp, Users, Clock, DollarSign, Star, ChevronRight } from 'lucide-react';

export default function FinancialAdvisorCV() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Khách Hàng Là Ưu Tiên", desc: "Đặt lợi ích khách hàng lên hàng đầu" },
    { icon: <Clock className="w-6 h-6" />, title: "Hỗ Trợ 24/7", desc: "Luôn sẵn sàng tư vấn mọi lúc" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "5 Năm Kinh Nghiệm", desc: "Chuyên môn và uy tín đã được khẳng định" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Hỗ Trợ 50tr - 500tr", desc: "Giải pháp tài chính linh hoạt" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-white font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-1/2 -right-48 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -bottom-48 left-1/3 animation-delay-4000"></div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 bg-linear-to-r from-blue-600 to-cyan-600 p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 z-50 hover:scale-110 group">
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full"></span>
      </button>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="./trung.jpg" 
                    alt="Mr. Trung"
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-cyan-500/30"
                    style={{
                      objectFit: 'cover',
                      aspectRatio: '3/4'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mr. Trung
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <p className="text-3xl text-cyan-400 font-semibold">Chuyên Viên Tư Vấn Tài Chính</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-8">
                <Award className="w-5 h-5 text-yellow-400" />
                <p className="text-xl">Chuyên Nghiệp • Uy Tín • Tận Tâm</p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-linear-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-1">5+</div>
                  <div className="text-sm text-gray-400">Năm Kinh Nghiệm</div>
                </div>
                <div className="bg-linear-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Hỗ Trợ Khách Hàng</div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="tel:0855615160" className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50">
                <Phone className="w-6 h-6" />
                0855.615.160
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-linear-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                activeSection === index ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/50' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-300">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience Card */}
          <div className="bg-linear-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-cyan-300">Kinh Nghiệm & Chuyên Môn</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <p className="text-gray-300"><span className="text-cyan-400 font-semibold">5 năm kinh nghiệm</span> trong lĩnh vực tư vấn tài chính</p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <p className="text-gray-300">Chuyên sâu về <span className="text-cyan-400 font-semibold">giải pháp tài chính cá nhân</span></p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <p className="text-gray-300">Chăm sóc khách hàng <span className="text-cyan-400 font-semibold">tận nơi, tận tâm</span></p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <p className="text-gray-300">Hỗ trợ tài chính từ <span className="text-cyan-400 font-semibold">50 triệu - 500 triệu</span></p>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-linear-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
                <Star className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-cyan-300">Cam Kết Dịch Vụ</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300">Luôn đặt <span className="text-cyan-400 font-semibold">lợi ích khách hàng lên hàng đầu</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300">Tư vấn minh bạch, <span className="text-cyan-400 font-semibold">không phát sinh chi phí ẩn</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300">Giải pháp <span className="text-cyan-400 font-semibold">linh hoạt, phù hợp từng khách hàng</span></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-600 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300">Quy trình nhanh gọn, <span className="text-cyan-400 font-semibold">tiết kiệm thời gian</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 p-8 rounded-2xl shadow-2xl shadow-cyan-500/50 text-center">
          <h2 className="text-3xl font-bold mb-4">Liên Hệ Tư Vấn Ngay Hôm Nay</h2>
          <p className="text-lg mb-6 text-blue-100">Hỗ trợ 24/7 - Tư vấn miễn phí - Giải pháp tài chính tối ưu</p>
          <a href="tel:0855615160" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
            <Phone className="w-6 h-6" />
            0855.615.160
          </a>
          <p className="mt-4 text-sm text-blue-100">Nhấc máy lên và gọi ngay - Tôi luôn sẵn sàng hỗ trợ bạn!</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}