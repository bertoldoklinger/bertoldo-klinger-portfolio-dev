import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "🍕 PizzaShop ",
      description: "O pizza.shop Web é um aplicativo de entrega de comida construído com TypeScript, React, React-Query, TailwindCSS e Shadcn UI. Ele permite o gerenciamento de restaurantes, pedidos, menus e avaliações.",
      image:
        "https://raw.githubusercontent.com/bertoldoklinger/pizzashop-web/main/docs/images/cover.png",
      link: "#",
      colSpan: "col-span-2",
    },
    ,
    {
      title: "FakeMeli",
      description: "Projeto desenvolvido com React, Typescript e TailwindCSS, consumindo a API do Mercado Livre.",
      image:
        "/assets/fakemeli.png",
      link: "https://fakemeli-frontend.vercel.app/",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "finance.ctrl",
      description: "LandingPage e Aplicação Web desenvolvidos com HTML, CSS e Javascript onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída.",
      image:
        "/assets/finance.ctrl.png",
      link: "https://bertoldoklinger.github.io/finance.ctrl/",
      colSpan: "col-span-3",
    },
    {
      title: "Sleepr - API de Reservas de Hotéis",
      description: "Sistema de reserva de serviços implementado com microservices NestJS.implantação com CI/CD",
      image:
        "https://ih1.redbubble.net/image.1084299836.8155/flat,750x1000,075,f.webp",
      link: "https://github.com/bertoldoklinger/sleepr-microservices-nest",
      colSpan: "col-span-1",
    },
    {
      title: "💳 CodePix",
      description: "Codepix - Um simulador de Transações Pix usando Microservices, Nestjs, Golang, Nextjs e Kafka para mensa",
      image:
        "https://miro.medium.com/v2/resize:fit:800/1*CASqCA5UISzNu9vsNvQ74w.jpeg",
      link: "https://github.com/bertoldoklinger/codepix",
      colSpan: "col-span-1",
    },
    {
      title: "Página de captura e venda Pâmela Maranhão",
      description: "Página para captura de leads e venda de produtos digitais responsiva com formulário para envio de e-mail e integração com o Emailjs.",
      image:
        "/assets/paginapamelamaranhao.png",
      link: "https://portugalbypamela.com/",
      colSpan: "col-span-1",
    },

  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className=" mr-3 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project?.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project?.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold text-center">
                    {project?.title}
                  </h4>
                  <p className=" mb-4 text-sm text-center px-2">{project?.description}</p>
                  <a href={project?.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}