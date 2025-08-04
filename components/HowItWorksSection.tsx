'use client'

import { motion } from 'framer-motion'
import { UserPlus, Search, DollarSign, Award } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register your skills",
      description: "Sign up and showcase your unique abilities, from teaching to technical skills.",
      color: "primary"
    },
    {
      icon: Search,
      title: "Match with local tasks",
      description: "Find gigs in your neighborhood that match your skills and schedule.",
      color: "secondary"
    },
    {
      icon: DollarSign,
      title: "Earn money",
      description: "Complete tasks and get paid directly to your account.",
      color: "green"
    },
    {
      icon: Award,
      title: "Get certified",
      description: "Receive official certificates and build your professional portfolio.",
      color: "purple"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who are already earning through their skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  step.color === 'primary' ? 'bg-primary-100' :
                  step.color === 'secondary' ? 'bg-secondary-100' :
                  step.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.color === 'primary' ? 'text-primary-600' :
                    step.color === 'secondary' ? 'text-secondary-600' :
                    step.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your journey?
          </p>
          <a href="#contact" className="bg-gradient-to-r from-primary-800 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
} 