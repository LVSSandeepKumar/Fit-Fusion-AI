# Fit Fusion AI

## Overview
Fit Fusion AI is an advanced platform for generating personalized diet and workout plans using artificial intelligence. Built with Next.js, TypeScript, Prisma, PostgreSQL, and integrated with Gemini AI, it aims to provide users with tailored health and fitness recommendations.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [Deployment](#deployment)
6. [Key Coding Takeaways](#key-coding-takeaways)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)

## Features
- **Personalized Diet Plans**: Generate customized diet plans based on user preferences and goals.
- **Workout Plan Generation**: Create tailored workout routines to meet fitness objectives.
- **AI Integration**: Utilize Gemini AI for advanced recommendations and insights.
- **User Authentication**: Secure user login and profile management.
- **Responsive Design**: Optimized for all device sizes, ensuring a seamless user experience.
- **Interactive Dashboard**: View and manage diet and workout plans through an intuitive interface.
- **Real-Time Updates**: Immediate plan adjustments based on user feedback and progress.
- **Nutritional Analysis**: Detailed breakdown of nutritional values for each meal plan.
- **Progress Tracking**: Monitor fitness progress with detailed analytics and reports.

## Installation
### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/LVSSandeepKumar/Fit-Fusion-AI.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Fit-Fusion-AI
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up the environment variables (create a `.env` file in the root directory with the necessary variables):
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    ```
5. Start the server:
    ```sh
    npm run start
    ```
6. Navigate to the `frontend` directory and install the dependencies:
    ```sh
    cd frontend
    npm install
    ```
7. Start the frontend application:
    ```sh
    npm run dev
    ```
8. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Usage
After starting the application, users can sign up, log in, and generate personalized diet and workout plans. The interactive dashboard allows users to view, edit, and track their plans.

## File Structure
The file structure includes:
- **prisma/**: Prisma schema and migrations.
- **public/**: Public assets.
- **scripts/**: Utility scripts.
- **src/**: Source code for the application.
  - **components/**: Reusable React components.
  - **pages/**: Next.js pages.
  - **styles/**: CSS files for styling the application.
  - **utils/**: Utility functions and helpers.
- **.eslintrc.json**: ESLint configuration file.
- **.gitignore**: Git ignore file.
- **package.json**: Project metadata and dependencies.
- **README.md**: Project documentation.

## Deployment
This project is deployed at [Fit Fusion AI on Vercel](https://fit-fusion-ai-lvs-sandeep-kumar.vercel.app).

## Key Coding Takeaways
- **Next.js**: Utilization of Next.js for server-side rendering and static site generation.
- **TypeScript**: Implementation of TypeScript for type safety and better code maintainability.
- **Prisma**: Integration with Prisma for ORM and database management.
- **Zod**: Use of Zod for schema validation and form handling.
- **TailwindCSS**: Implementation of TailwindCSS for efficient and responsive styling.
- **Component-Based Architecture**: Modular design with reusable React components.
- **Responsive Design**: Ensuring the application looks great on all devices.
- **AI Integration**: Leveraging Gemini AI for advanced diet and workout recommendations.
- **Authentication**: Secure user authentication and profile management.
- **Real-Time Updates**: Immediate plan adjustments based on user feedback and progress tracking.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## Acknowledgements
- Built using Next.js, TypeScript, Prisma, PostgreSQL, and Gemini AI.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
