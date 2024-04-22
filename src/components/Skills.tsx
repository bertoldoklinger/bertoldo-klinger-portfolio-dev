import { HiAcademicCap } from "react-icons/hi2"

export default function Skills() {
  const educations = [
    {
      name: "Construindo Aplicações Enterprise com Node.js | TechLeads Club",
    },
    {
      name: "Método TAJS | Erick Wendel",
    },
    {
      name: "NodeJs Avançado com TDD, Clean Architecture e Typescript | Rodrigo Manguinho",
    },
    {
      name: "Ignite Nodejs  | Rocketseat",
    },
    {
      name: "NestJS Microservices: Build & Deploy a Scaleable Backend | Michael Guay",
    },
  ]


  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="ml-3 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="mr-3font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Software Engineer | React | Node.js | TypeScript
            | Docker | TDD | AWS
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}