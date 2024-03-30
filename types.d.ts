export {}

declare global {
  export interface FeaturedCourse {
    title: string
    description: string
    image: string
  }
  export interface PricingItem {
    name: string
    description: string
    price: number
    featuredCourse?: FeaturedCourse
    key: 'professional' | 'basic' | 'basic2'
    features: { enabled: boolean; name: string; emphasized?: boolean }[]
  }
  export interface HeroContent {
    title: {
      text: string
      highlighted?: boolean
      _key: string
    }[]
    description: string
    cta: string
  }

  export interface Stats {
    lessons: number
    courses: number
    hours: number
  }
}
