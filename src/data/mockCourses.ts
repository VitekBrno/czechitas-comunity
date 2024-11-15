export const mockCourses = [
  // Past Courses
  {
    id: '1',
    title: 'Základy JavaScriptu',
    description: 'Naučte se základy programovacího jazyka JavaScript, včetně proměnných, funkcí a manipulace s DOM.',
    theme: 'programming',
    startDate: '2023-11-15T09:00:00',
    endDate: '2023-11-17T16:00:00',
    location: 'Prague',
    deliveryMethod: 'hybrid',
    capacity: 20,
    registered: 15,
    price: 3000,
    intensity: 'intensive',
    teachingHours: 24,
    instructors: [
      {
        name: 'Jana Nováková',
        title: 'Senior JavaScript Developer',
        photo: 'https://i.pravatar.cc/150?img=47'
      },
      {
        name: 'Petr Malý',
        title: 'Frontend Architect',
        photo: 'https://i.pravatar.cc/150?img=33'
      }
    ]
  },
  {
    id: '2',
    title: 'Úvod do UX designu',
    description: 'Základní principy uživatelského výzkumu a designu.',
    theme: 'uiuxDesign',
    startDate: '2023-12-01T09:00:00',
    endDate: '2023-12-03T16:00:00',
    location: 'Brno',
    deliveryMethod: 'offline',
    capacity: 15,
    registered: 15,
    price: 4000,
    intensity: 'weekend',
    teachingHours: 18,
    instructors: [
      {
        name: 'Petr Svoboda',
        title: 'UX Design Lead',
        photo: 'https://i.pravatar.cc/150?img=12'
      },
      {
        name: 'Markéta Horáková',
        title: 'Product Designer',
        photo: 'https://i.pravatar.cc/150?img=45'
      }
    ]
  },
  
  // Current and Upcoming Courses
  {
    id: '3',
    title: 'React a TypeScript',
    description: 'Moderní vývoj webových aplikací s React a TypeScript.',
    theme: 'programming',
    startDate: '2024-04-10T09:00:00',
    endDate: '2024-04-12T16:00:00',
    location: 'Prague',
    deliveryMethod: 'hybrid',
    capacity: 20,
    registered: 18,
    price: 5000,
    intensity: 'intensive',
    teachingHours: 24,
    instructors: [
      {
        name: 'Martin Černý',
        title: 'Frontend Developer',
        photo: 'https://i.pravatar.cc/150?img=15'
      },
      {
        name: 'Tereza Veselá',
        title: 'React Specialist',
        photo: 'https://i.pravatar.cc/150?img=23'
      }
    ]
  },
  {
    id: '4',
    title: 'Data Science v Pythonu',
    description: 'Analýza dat a strojové učení pomocí Python knihoven.',
    theme: 'dataScience',
    startDate: '2024-05-15T09:00:00',
    endDate: '2024-07-15T16:00:00',
    location: 'Ostrava',
    deliveryMethod: 'online',
    capacity: 25,
    registered: 10,
    price: 4500,
    intensity: 'semester',
    teachingHours: 62,
    instructors: [
      {
        name: 'Lucie Dvořáková',
        title: 'Data Scientist',
        photo: 'https://i.pravatar.cc/150?img=20'
      },
      {
        name: 'Jan Procházka',
        title: 'ML Engineer',
        photo: 'https://i.pravatar.cc/150?img=54'
      }
    ]
  },
  {
    id: '5',
    title: 'Kybernetická bezpečnost',
    description: 'Základy zabezpečení aplikací a prevence útoků.',
    theme: 'cybersecurity',
    startDate: '2024-06-20T09:00:00',
    endDate: '2024-06-22T16:00:00',
    location: 'Brno',
    deliveryMethod: 'offline',
    capacity: 18,
    registered: 5,
    price: 6000,
    intensity: 'intensive',
    teachingHours: 24,
    instructors: [
      {
        name: 'Tomáš Novotný',
        title: 'Security Expert',
        photo: 'https://i.pravatar.cc/150?img=25'
      },
      {
        name: 'Eva Kratochvílová',
        title: 'Penetration Tester',
        photo: 'https://i.pravatar.cc/150?img=44'
      }
    ]
  },
  
  // Future Courses 2025
  {
    id: '6',
    title: 'Cloud Computing s AWS',
    description: 'Komplexní kurz AWS služeb a cloud architektury.',
    theme: 'cloudComputing',
    startDate: '2025-01-15T09:00:00',
    endDate: '2025-03-15T16:00:00',
    location: 'Prague',
    deliveryMethod: 'hybrid',
    capacity: 20,
    registered: 3,
    price: 7000,
    intensity: 'semester',
    teachingHours: 48,
    instructors: [
      {
        name: 'David Procházka',
        title: 'Cloud Architect',
        photo: 'https://i.pravatar.cc/150?img=30'
      },
      {
        name: 'Michaela Svobodová',
        title: 'DevOps Engineer',
        photo: 'https://i.pravatar.cc/150?img=41'
      }
    ]
  },
  {
    id: '7',
    title: 'Projektové řízení v IT',
    description: 'Agilní metodiky a vedení IT projektů.',
    theme: 'projectManagement',
    startDate: '2025-02-10T09:00:00',
    endDate: '2025-02-12T16:00:00',
    location: 'Plzeň',
    deliveryMethod: 'online',
    capacity: 22,
    registered: 8,
    price: 5500,
    intensity: 'intensive',
    teachingHours: 24,
    instructors: [
      {
        name: 'Markéta Veselá',
        title: 'Project Manager',
        photo: 'https://i.pravatar.cc/150?img=35'
      },
      {
        name: 'Pavel Horák',
        title: 'Agile Coach',
        photo: 'https://i.pravatar.cc/150?img=52'
      }
    ]
  },
  {
    id: '8',
    title: 'Umělá inteligence a Machine Learning',
    description: 'Pokročilé techniky strojového učení a AI aplikací.',
    theme: 'artificialIntelligence',
    startDate: '2025-03-20T09:00:00',
    endDate: '2025-05-20T16:00:00',
    location: 'Olomouc',
    deliveryMethod: 'hybrid',
    capacity: 15,
    registered: 2,
    price: 8000,
    intensity: 'semester',
    teachingHours: 56,
    instructors: [
      {
        name: 'Jan Kovář',
        title: 'AI Research Scientist',
        photo: 'https://i.pravatar.cc/150?img=40'
      },
      {
        name: 'Barbora Němcová',
        title: 'ML Operations Engineer',
        photo: 'https://i.pravatar.cc/150?img=49'
      }
    ]
  }
]