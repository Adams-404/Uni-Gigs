# Uni-Gigs: University Job Exchange Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/adam-alee-s-projects/v0-university-job-exchange-5w)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Overview

Uni-Gigs is a modern university job exchange platform that connects students with part-time job opportunities, gigs, and freelance work. The platform is designed to help students find flexible work that fits around their academic schedules while providing employers with access to talented university students.

## Features

- **Gig Discovery**: Browse and search for available gigs and part-time jobs
- **User Profiles**: Create and manage your professional profile
- **Chat System**: Built-in messaging for seamless communication
- **Ratings & Reviews**: Rate and review your experience with employers/employees
- **Responsive Design**: Works seamlessly on both mobile and desktop devices
- **Real-time Notifications**: Stay updated on new opportunities and messages

## Tech Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI Primitives
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion & GSAP
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/uni-gigs.git
   cd uni-gigs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary environment variables.

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
uni-gigs/
├── app/                  # App router pages and routes
│   ├── chat/             # Chat functionality
│   ├── discover/         # Discover gigs
│   ├── my-gigs/          # User's posted gigs
│   ├── notifications/    # User notifications
│   ├── profile/          # User profiles
│   └── search/           # Search functionality
├── components/           # Reusable UI components
├── lib/                  # Utility functions and data
├── public/               # Static assets
└── styles/               # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please open an issue on GitHub.
