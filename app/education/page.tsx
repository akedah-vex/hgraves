import Button from "@/components/button";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Wrapper from "@/components/wrapper"; // Assuming standard path alias setup

export default function Education() {
  return (
    <Wrapper>
      {/* The main content structure previously inside the page component now goes here */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
            Education
        </h1>
        <p className="text-2xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-3xl mx-auto">
          A journey of continuous learning and technical growth.
        </p>

        {/* Education Card Container */}
        <div className="space-y-12 md:space-y-20 mt-16">
          {/* Chico State University Entry */}
          <section className="border-b pb-8 border-zinc-200 dark:border-zinc-700 last:border-b-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Institution Details */}
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
                  Chico State University
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-purple-400 mt-1">
                  Bachelor of Science in Computer Science
                </p>
              </div>

              {/* Dates/Location */}
              <div className="flex flex-col items-end md:items-start space-y-2 text-right md:text-left">
                <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                  Degree awarded, May 2020
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Chico, California
                </p>
              </div>
            </div>

            {/* Details/Description */}
            <div className="pt-4 md:pt-6 space-y-3 text-left w-full mx-auto md:mx-0">
              <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white border-b pb-1 border-zinc-100 dark:border-zinc-700">
                Key Highlights & Focus Areas
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                Focused coursework in data structures, algorithms, object-oriented programming, 
                and database management. Completed several major projects demonstrating proficiency 
                in full-stack development using modern frameworks.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {['Algorithms', 'Data Structures', 'Web Development', 'Database Design'].map((skill) => (
                  <span key={skill} className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Placeholder for previous education (Optional) */}
          <section className="border-b pb-8 border-zinc-200 dark:border-zinc-700 last:border-b-0">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Butte College
                </h2>
                <p className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                  Computer Science Major
                </p>
              </div>

              {/* Dates/Location */}
              <div className="flex flex-col items-end md:items-start space-y-2 text-right md:text-left">
                <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                  CSU Transfer, 2017
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Oroville, CA
                </p>
              </div>
            </div>
          </section>

          {/* Continued Education & Certifications */}
          <section className="pt-4 md:pt-6 space-y-3 text-left w-full mx-auto md:mx-0">
             <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white border-b pb-1 border-zinc-100 dark:border-zinc-700">
                Continued Education
              </h3>
              {/* subtitle */}
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
                I do my best to stay up-to-date with modern technologies.
                The authors of these materials do an amazing job re-freshing their content. As a result, I make sure
                to come back regularly and review each of these courses, as well as investing time to learn
                technologies and strategies that are new to me.
              </p>
              <div className="space-y-4 pt-2">
                <div>
                    <Card 
                        title="Modern React with Redux"
                        image="https://icon.icepanel.io/Technology/svg/React.svg"
                        link="https://www.udemy.com/course/react-redux/" 
                        subTitle="Udemy | Taught by Stephen Grider"
                        description="Learning modern React and Redux for building snappy, beautiful web applications" 
                    />
                </div>
                <div>
                    <Card 
                        title="React Native // Hooks, Context, Navigation"
                        image="https://icon.icepanel.io/Technology/svg/React.svg"
                        link="https://www.udemy.com/course/the-complete-react-native-and-redux-course" 
                        subTitle="Udemy | Taught by Stephen Grider" 
                        description="Continuously learning React Native for mobile app development" 
                    />
                </div>

                <div>
                    <Card 
                        title="Docker and Kubernetes // The Complete Guide"
                        image="https://icon.icepanel.io/Technology/svg/Docker.svg"
                        link="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide" 
                        subTitle="Udemy | Taught by Stephen Grider" 
                        description="Learning Docker and Kubernetes to containerize and deploy applications" 
                    />
                </div>

                <div>
                    <Card 
                        title="Next JS: The Complete Developer's Guide"
                        image="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
                        link="https://www.udemy.com/course/next-js-the-complete-developers-guide" 
                        subTitle="Udemy | Taught by Stephen Grider" 
                        description="Learning to build applications with the latest version of Next. Using App Router, Next Auth, NextUI, and TailwindCSS." 
                    />
                </div>
                
                <div>
                    <Card 
                        title="Machine Learning with Javascript"
                        image="https://icon.icepanel.io/Technology/svg/TensorFlow.svg"
                        link="https://www.udemy.com/course/machine-learning-with-javascript" 
                        subTitle="Udemy | Taught by Stephen Grider" 
                        description="Learning Machine Learning from scratch using Javascript and TensorflowJS with hands-on projects" 
                    />
                </div>

                <div>
                    <Card 
                        title="Beginner's Guide to Zig"
                        image="https://icon.icepanel.io/Technology/svg/Zig.svg"
                        link="https://www.udemy.com/course/beginners-guide-to-zig" 
                        subTitle="Udemy | Taught by Bohdan Zaremba" 
                        description="I have a love for the systems/low level languages. 
                            Learning the fundamentals of the Zig programming language in 
                            hopes of utilizing it practically with some low level projects I have planned." 
                    />
                </div>
              </div>
          </section>
        </div>
        <div className="flex justify-center pt-10">
            <Button variant="primary" href="/contact">
                Let's Connect
            </Button>
            </div>
          <Footer />
    </Wrapper>
  );
}
