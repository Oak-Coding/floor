import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          Let's discuss your architectural needs and create something extraordinary together. Get in touch with our team
          today for a free consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg bg-transparent"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </Button>
        </div>

        <div className="mt-8 text-primary-foreground/80">
          <p className="text-lg">Free consultation • No obligation • Quick response</p>
        </div>
      </div>
    </section>
  )
}
