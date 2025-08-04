'use client'

import { motion } from 'framer-motion'
import { Shield, Award, MapPin, Clock, Users, Star } from 'lucide-react'

export default function WhySparkCrewSection() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified users and secure payment system ensure your safety.",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Hyper-Local",
      description: "Find gigs in your neighborhood, reducing travel time and costs.",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work around your schedule - no fixed timings required.",
      color: "secondary"
    },
    {
      icon: Award,
      title: "Digital Certifications",
      description: "Earn certificates that enhance your resume and portfolio.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Student-Focused",
      description: "Built specifically for Indian students aged 16-24.",
      color: "blue"
    },
    {
      icon: Star,
      title: "Skill-First",
      description: "Focus on what you can do, not just your academic background.",
      color: "orange"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SparkCrew?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another gig platform. We're a community built for students, by students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                feature.color === 'green' ? 'bg-accent-100' :
                feature.color === 'primary' ? 'bg-primary-100' :
                feature.color === 'secondary' ? 'bg-secondary-100' :
                feature.color === 'purple' ? 'bg-purple-100' :
                feature.color === 'blue' ? 'bg-blue-100' : 'bg-accent-100'
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === 'green' ? 'text-accent-600' :
                  feature.color === 'primary' ? 'text-primary-600' :
                  feature.color === 'secondary' ? 'text-secondary-600' :
                  feature.color === 'purple' ? 'text-purple-600' :
                  feature.color === 'blue' ? 'text-blue-600' : 'text-accent-600'
                }`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-800 to-secondary-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the Revolution
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of the movement that's changing how Indian students work and earn.
            </p>
            <a href="#contact" className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block">
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 