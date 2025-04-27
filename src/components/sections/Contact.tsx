"use client"
import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"
import emailjs from "@emailjs/browser"
import { PhoneInput } from "@/components/ui/phone-input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"


const EMAIL = "juandavidgonzaleznunez@gmail.com"

// Definir el esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor ingresa un número telefónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

// Tipo inferido del esquema
type FormValues = z.infer<typeof formSchema>

export default function Contact() {
  const { toast } = useToast()

  // Configurar el formulario con React Hook Form y Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
  })

  const onSubmit = async (data: FormValues) => {
    try {
      // Utiliza variables de entorno para los IDs
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
      )
      console.log("Email enviado:", data)
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé a la brevedad.",
      })

      form.reset()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje.",
        variant: "destructive",
      })
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    toast({
      title: "Email copiado",
      description: "Dirección de correo copiada al portapapeles",
    })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Contacto</h2>
          <div className="h-1 w-20 bg-gray-900 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-zinc-200">¿Tienes alguna pregunta o propuesta? No dudes en contactarme.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="border border-gray-200 dark:border-zinc-700 shadow-sm">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número Telefónico</FormLabel>
                        <FormControl>
                          <PhoneInput placeholder="Incluyendo el código de área" defaultCountry="US" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tu mensaje..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full ">
                    Enviar mensaje
                  </Button>
                </form>
              </Form>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <a href={`mailto:${EMAIL}`} className="text-gray-900 hover:underline dark:text-white">
                    {EMAIL}
                  </a>
                  <Button variant="ghost" size="sm" onClick={copyEmail} className="group">
                    <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
