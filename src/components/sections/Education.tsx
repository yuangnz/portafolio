import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const education = [
    {
        degree: 'Ingeniería en Informática',
        institution: 'Universidad Rafael Belloso Chacín',
        period: '2020 - 2024',
        description: 'Especialización en desarrollo de software y sistemas distribuidos. Promedio general: 17.56/20.',
        achievements: [
            'Beca de excelencia académica',
            'Reconocimientos de jurados en tesis Frontend - Preguntar por carta.'
        ]
    },
    {
        degree: 'Técnico Superior en Cyberseguridad',
        institution: 'AIEP - Chile',
        period: '2024 - Presente',
        description: 'Formación en seguridad informática y protección de datos.',
        achievements: [
            'Certificaciones pendientes',

        ]
    }
];

export default function Education() {
    return (
        <section id="education" className="section-padding bg-neutral-50 dark:bg-zinc-950 rounded-2xl">
            <div className="container mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-neutral-900 dark:text-white">Educación</h2>
                    <div className="h-1 w-20 bg-neutral-900 dark:bg-white mx-auto mb-6"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border border-neutral-200 shadow-md dark:border-zinc-600">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-neutral-100 rounded-full dark:bg-zinc-800">
                                            <GraduationCap className="h-5 w-5 text-neutral-900 dark:text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-medium text-neutral-900 dark:text-white">{edu.degree}</h3>
                                                <Badge variant="outline" className="flex items-center gap-1 border-neutral-800 dark:border-zinc-200">
                                                    <Calendar className="h-3 w-3" />
                                                    {edu.period}
                                                </Badge>
                                            </div>
                                            <p className="text-neutral-800 dark:text-zinc-300 font-medium mb-2">{edu.institution}</p>
                                            <p className="text-neutral-700 mb-4 dark:text-white">{edu.description}</p>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-neutral-800 dark:text-zinc-300">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}