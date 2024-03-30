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
    id: 'professional' | 'basic' | 'basic2'
    features: { enabled: boolean; name: string }[]
  }
}
