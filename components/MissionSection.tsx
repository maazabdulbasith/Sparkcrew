'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, TrendingUp } from 'lucide-react'

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to normalize hyper-local gig culture in India, especially for students.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower students to work, grow, and earn with dignity.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  We believe every student has unique skills that deserve recognition and compensation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  From teaching to technical assistance, we connect students with meaningful opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              To make skill-based local gigs mainstream for Indian students.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Create a society where part-time work is celebrated, not frowned upon.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-500 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Build a platform where students can monetize their abilities, no matter how small or unique.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Student-First</h4>
            <p className="text-gray-600">
              Designed specifically for Indian students aged 16-24, understanding their unique needs and challenges.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-secondary-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Skill-Based</h4>
            <p className="text-gray-600">
              Focus on what you can do, not just your degree. Every skill has value in our community.
            </p>
          </div>

                      <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-600" />
              </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Growth-Focused</h4>
            <p className="text-gray-600">
              Earn money while building experience, confidence, and a professional network.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 