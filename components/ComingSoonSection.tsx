'use client'

import { motion } from 'framer-motion'
import { Construction, Mail, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const mailtoLink = `mailto:sparkcrewinnovations@gmail.com?subject=SparkCrew Early Access Request&body=${encodeURIComponent(`Email: ${email}\n\nI would like to be notified when SparkCrew launches!`)}`
      
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setEmail('')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Construction Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center">
              <Construction className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚧 We're Building Something Big
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            The revolution begins soon. Stay tuned for the launch of India's first student-focused gig platform.
          </p>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Get Early Access
              </h3>
              <p className="text-white/80 mb-6">
                Be the first to know when we launch. Sign up for early access and exclusive updates.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                        : 'bg-white text-primary-600'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Notify Me'}</span>
                  </motion.button>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-xl">
                    Thanks! We'll notify you when we launch.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 text-white px-4 py-3 rounded-xl">
                    There was an error. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Student-First</h4>
              <p className="text-white/80 text-sm">
                Built specifically for Indian students aged 16-24
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Hyper-Local</h4>
              <p className="text-white/80 text-sm">
                Find gigs in your neighborhood
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Certified</h4>
              <p className="text-white/80 text-sm">
                Earn certificates for your achievements
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 