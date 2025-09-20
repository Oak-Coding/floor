import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Cog, Truck, Clock, Trophy } from "lucide-react"

export function ProcessSection() {
  const processSteps = [
    {
      title: "Consultation",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      description: "We discuss your vision, requirements, and project goals in detail.",
      duration: "30-60 min",
    },
    {
      title: "Concept Design",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      description: "Initial design concepts and layouts based on your specifications.",
      duration: "1-3 days",
    },
    {
      title: "Development",
      icon: <Cog className="h-8 w-8 text-white" />,
      description: "Detailed drawings, 3D renderings, and technical specifications.",
      duration: "2-7 days",
    },
    {
      title: "Delivery",
      icon: <Truck className="h-8 w-8 text-white" />,
      description: "Final delivery, revisions, and ongoing project support.",
      duration: "1-2 days",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We follow a proven 4-step process to ensure exceptional results and complete client satisfaction.
          </p>
        </div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="flex items-center relative max-w-6xl mx-auto justify-between">
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl font-bold text-foreground text-center mb-4">{step.title}</h3>

                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl border-4 border-primary/20 hover:scale-105 transition-transform duration-300 mb-4 w-24 h-24 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{step.duration}</span>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute top-16 left-20 flex justify-center z-0 w-72">
                    <svg
                      className="h-8 text-primary/60 ml-10 mt-1.5 w-64"
                      viewBox="0 0 128 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16 L112 16 M104 8 L112 16 L104 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {index === processSteps.length - 1 && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Trophy className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="bg-card text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 lg:hidden relative">
                  {step.icon}
                  {index === processSteps.length - 1 && (
                    <div className="absolute -top-1 -right-1">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg text-card-foreground">{step.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-accent" />
                  <span>{step.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
