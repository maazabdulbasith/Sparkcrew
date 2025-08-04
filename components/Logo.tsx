'use client'

import { motion } from 'framer-motion'

export default function Logo({ size = 'default', variant = 'default' }: { size?: 'small' | 'default' | 'large', variant?: 'default' | 'light' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-10 h-10',
    large: 'w-12 h-12'
  }

  const iconSizes = {
    small: 'w-4 h-4',
    default: 'w-5 h-5',
    large: 'w-6 h-6'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2"
    >
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-primary-800 to-secondary-700 shadow-lg`}>
        {/* LinkedIn Profile Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQFb99qs-OBFqw/profile-displayphoto-shrink_800_800/B4EZWysqwNGgAc-/0/1742459809454?e=1756944000&v=beta&t=ILwURcA_lEsvasND6xdLwkm6kclEGQpdMaxoxbq4rF0"
          alt="SparkCrew Founder"
          className="w-full h-full object-cover"
        />
      </div>
      <span className={`font-bold ${variant === 'light' ? 'text-white' : 'text-gray-900'} ${size === 'large' ? 'text-2xl' : size === 'small' ? 'text-sm' : 'text-xl'}`}>
        SparkCrew
      </span>
    </motion.div>
  )
} 