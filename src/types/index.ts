export interface Course {
  id: string
  title: string
  description: string
  theme: string
  startDate: string
  endDate: string
  location: string
  deliveryMethod: 'online' | 'hybrid' | 'offline'
  capacity: number
  registered: number
  price: number
  intensity: 'semester' | 'intensive' | 'weekend'
  teachingHours: number
  instructors: {
    name: string
    title: string
    photo: string
  }[]
}