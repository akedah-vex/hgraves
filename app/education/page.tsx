import Wrapper from "@/components/wrapper"; // Assuming standard path alias setup

export default function Education() {
  return (
    <Wrapper>
      {/* The main content structure previously inside the page component now goes here */}
      <div className="py-16 md:py-24 bg-white dark:bg-black">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
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
                  May 2020
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Chico, California
                </p>
              </div>
            </div>

            {/* Details/Description */}
            <div className="pt-4 md:pt-6 space-y-3 text-left max-w-xl mx-auto md:mx-0">
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
              {/* Institution Details */}
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

          <section>
            {/* add continued education here */}
          </section>

        </div>
      </div>
    </Wrapper>
  );
}
