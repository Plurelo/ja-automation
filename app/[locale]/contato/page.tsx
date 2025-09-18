"use client";

import type React from "react"

import { useState } from "react"
import { Mail, Phone, User } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

export default function ContactPage() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8 px-4">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  {t.contactPage.title}
                  <br />
                  {t.contactPage.subtitle}
                  <br />
                  {t.contactPage.subtitle2}
                </h1>
                <p className="text-gray-600 mt-4 flex items-center gap-2">{t.contactPage.description}</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {/* Engineer Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <User className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t.contactPage.contactPerson}</p>
                      <p className="text-gray-900 font-semibold">Eng. Antonny Luty</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-100 p-1.5 rounded">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <a 
                      href="mailto:antonny.luty@j-aautomation.com"
                      className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                    >
                      antonny.luty@j-aautomation.com
                    </a>
                  </div>
                  
                  {/* Phone Numbers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-1.5 rounded">
                        <Phone className="w-4 h-4 text-gray-600" />
                      </div>
                      <p className="text-gray-700 transition-colors text-sm">+1 864 208 4684</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">{t.contactPage.sendMessage}</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={t.contactPage.form.fullName}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contactPage.form.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.contactPage.form.subject}
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t.contactPage.form.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {t.contactPage.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}