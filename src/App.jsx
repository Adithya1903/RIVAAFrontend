import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, Apple, Play, Dumbbell, Brain, Users, TrendingUp,
  Target, Sparkles, Zap, Award, CheckCircle2, Star,
  Activity, Heart, Calendar, ArrowRight, ChevronDown
} from 'lucide-react';
import { PhoneMockup } from './components/PhoneMockup';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { StatCard } from './components/StatCard';
import { AppScreenshot } from './components/AppScreenshot';
import { Button } from './components/Button';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Core Features */}
      <FeaturesSection />
      
      {/* Screenshots Gallery */}
      <ScreenshotsSection />
      
      {/* AI Capabilities */}
      <AISection />
      
      {/* Premium Pricing */}
      <PricingSection />
      
      {/* Social Proof */}
      <SocialProofSection />
      
      {/* Technology Stack */}
      <TechnologySection />
      
      {/* Download CTA */}
      <DownloadCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation Component
function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Riva
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#ai" className="text-gray-700 hover:text-purple-600 transition-colors">AI Coach</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Reviews</a>
            <Button size="sm">Download</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4"
          >
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
              <a href="#ai" className="text-gray-700 hover:text-purple-600 transition-colors">AI Coach</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Reviews</a>
              <Button size="sm" className="w-full">Download</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50 -z-10"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Fitness Tracking</span>
            </div>
            
            <h1 className="mb-6 text-gray-900">
              Transform Your Fitness Journey
            </h1>
            
            <p className="mb-8 text-gray-600 max-w-xl">
              Experience the perfect blend of workout tracking, AI coaching, and social motivation. 
              Riva combines the precision of Strong with the intelligence of GPT-4 and the 
              community of Strava.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" icon={Apple}>
                Download for iOS
              </Button>
              <Button size="lg" variant="secondary" icon={Play}>
                Get on Android
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-purple-600 text-purple-600" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>50K+ Users</span>
              </div>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <PhoneMockup>
              <AppScreenshot>
                <div className="px-6 py-4">
                  <h2 className="mb-6 text-gray-900">Today's Workout</h2>
                  
                  {/* Workout Cards */}
                  <div className="space-y-4">
                    <WorkoutCard exercise="Bench Press" sets="4 × 8" weight="185 lbs" />
                    <WorkoutCard exercise="Squats" sets="5 × 5" weight="225 lbs" />
                    <WorkoutCard exercise="Deadlift" sets="3 × 6" weight="275 lbs" />
                  </div>

                  {/* Progress Ring */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span>Daily Goal</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </AppScreenshot>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-purple-600" />
      </motion.div>
    </section>
  );
}

// Helper Component for Workout Cards
function WorkoutCard({ exercise, sets, weight }) {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between">
      <div>
        <div className="font-semibold text-gray-900">{exercise}</div>
        <div className="text-sm text-gray-500">{sets}</div>
      </div>
      <div className="text-purple-600 font-semibold">{weight}</div>
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "Comprehensive Tracking",
      description: "Log workouts, track progress, and analyze performance with detailed metrics and charts."
    },
    {
      icon: Brain,
      title: "AI Coaching",
      description: "Get personalized workout plans and real-time form feedback powered by GPT-4 intelligence."
    },
    {
      icon: Users,
      title: "Social Community",
      description: "Connect with friends, share achievements, and compete on leaderboards for motivation."
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visualize your fitness journey with advanced analytics and predictive insights."
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Riva combines powerful features to help you achieve your fitness goals faster and smarter.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Screenshots Section
function ScreenshotsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Beautiful & Intuitive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every screen is designed with care to make your fitness journey enjoyable.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <PhoneMockup>
              <AppScreenshot>
                <WorkoutScreen />
              </AppScreenshot>
            </PhoneMockup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PhoneMockup>
              <AppScreenshot>
                <ProgressScreen />
              </AppScreenshot>
            </PhoneMockup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PhoneMockup>
              <AppScreenshot>
                <SocialScreen />
              </AppScreenshot>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Screen Components
function WorkoutScreen() {
  return (
    <div className="px-6 py-4">
      <h3 className="mb-6 text-gray-900">Workout Log</h3>
      <div className="space-y-3">
        {['Bench Press', 'Incline Press', 'Chest Fly', 'Push-ups'].map((exercise, i) => (
          <div key={i} className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="font-semibold text-gray-900">{exercise}</div>
            <div className="text-sm text-gray-500 mt-1">3 × 10 reps</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="px-6 py-4">
      <h3 className="mb-6 text-gray-900">Your Progress</h3>
      <div className="space-y-6">
        {/* Chart Placeholder */}
        <div className="h-40 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
          <TrendingUp className="w-12 h-12 text-purple-600" />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">32</div>
            <div className="text-sm text-gray-600">Workouts</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">12k</div>
            <div className="text-sm text-gray-600">Calories</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialScreen() {
  return (
    <div className="px-6 py-4">
      <h3 className="mb-6 text-gray-900">Activity Feed</h3>
      <div className="space-y-4">
        {[
          { name: 'Sarah M.', action: 'completed leg day', time: '2h ago' },
          { name: 'Mike R.', action: 'hit a PR!', time: '4h ago' },
          { name: 'Alex K.', action: 'joined a challenge', time: '6h ago' }
        ].map((activity, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
              {activity.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{activity.name}</div>
              <div className="text-sm text-gray-500">{activity.action}</div>
            </div>
            <div className="text-xs text-gray-400">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// AI Section
function AISection() {
  const aiFeatures = [
    { icon: Target, title: "Personalized Plans", desc: "Custom workouts based on your goals" },
    { icon: Sparkles, title: "Form Feedback", desc: "Real-time AI coaching on technique" },
    { icon: Zap, title: "Smart Predictions", desc: "Anticipate plateaus and adjust" }
  ];

  return (
    <section id="ai" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
              <Brain className="w-4 h-4" />
              <span>Powered by GPT-4</span>
            </div>

            <h2 className="mb-6 text-gray-900">Your AI Fitness Coach</h2>
            <p className="mb-8 text-gray-600">
              Experience personalized coaching that adapts to your progress, provides real-time feedback, 
              and helps you achieve your goals faster than ever before.
            </p>

            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PhoneMockup>
              <AppScreenshot>
                <div className="px-6 py-4">
                  <h3 className="mb-4 text-gray-900">AI Coach</h3>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div className="flex-1 p-3 rounded-2xl bg-purple-100">
                        <p className="text-sm text-gray-900">
                          Based on your progress, I recommend increasing your bench press weight by 5 lbs next session.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end">
                      <div className="flex-1 p-3 rounded-2xl bg-gray-100 text-right">
                        <p className="text-sm text-gray-900">
                          How's my squat form?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div className="flex-1 p-3 rounded-2xl bg-purple-100">
                        <p className="text-sm text-gray-900">
                          Great depth! Try keeping your chest more upright on the descent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AppScreenshot>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Basic workout tracking",
        "Exercise library access",
        "Progress charts",
        "Community features"
      ],
      cta: "Get Started",
      variant: "secondary"
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      features: [
        "Everything in Free",
        "AI coaching & feedback",
        "Personalized workout plans",
        "Advanced analytics",
        "Priority support",
        "Ad-free experience"
      ],
      cta: "Start Free Trial",
      variant: "primary",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock the full power of AI coaching.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-white border-2 ${
                plan.popular ? 'border-purple-600 shadow-2xl' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-gray-900">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      quote: "Riva transformed how I approach fitness. The AI coaching is like having a personal trainer in my pocket!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Competitive Athlete",
      quote: "The tracking features are incredibly detailed. I've seen measurable improvements in just 3 months.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Beginner",
      quote: "As someone new to fitness, the personalized guidance has been invaluable. Highly recommend!",
      rating: 5
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users", icon: Users },
    { value: "1M+", label: "Workouts Logged", icon: Activity },
    { value: "4.9", suffix: "/5", label: "App Rating", icon: Star },
    { value: "95%", label: "User Satisfaction", icon: Heart }
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Loved by Thousands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join a thriving community of fitness enthusiasts achieving their goals with Riva.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Technology Section
function TechnologySection() {
  const technologies = [
    { name: "React Native", color: "from-blue-600 to-blue-500" },
    { name: "GPT-4", color: "from-green-600 to-green-500" },
    { name: "TensorFlow", color: "from-orange-600 to-orange-500" },
    { name: "AWS", color: "from-yellow-600 to-yellow-500" },
    { name: "TypeScript", color: "from-blue-700 to-blue-600" },
    { name: "GraphQL", color: "from-pink-600 to-pink-500" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Built with Modern Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powered by cutting-edge technologies to deliver the best experience.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white border border-gray-200 text-center"
            >
              <div className={`mb-2 h-12 flex items-center justify-center text-2xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.name.charAt(0)}
              </div>
              <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Download CTA
function DownloadCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-500 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
          </div>

          <div className="relative text-center">
            <h2 className="mb-4 text-white">Ready to Transform Your Fitness?</h2>
            <p className="mb-8 text-purple-100 max-w-2xl mx-auto">
              Join thousands of users who are already achieving their fitness goals with Riva.
              Download now and start your journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                icon={Apple}
              >
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                icon={Play}
              >
                Get on Android
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">Riva</span>
            </div>
            <p className="text-sm">
              Transform your fitness journey with AI-powered coaching and comprehensive tracking.
            </p>
          </div>

          {/* Product */}
          <div>
            <h6 className="mb-4 text-white">Product</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#ai" className="hover:text-purple-400 transition-colors">AI Coach</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="mb-4 text-white">Company</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="mb-4 text-white">Legal</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Riva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;

