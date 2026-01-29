'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Code, Trophy, Users, Lightbulb, CheckCircle } from 'lucide-react';

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    type: 'start' | 'milestone' | 'end';
}

const timelineEvents: TimelineEvent[] = [
    {
        date: 'Feb 6, 2026',
        title: 'Registration Opens',
        description: 'Online registrations begin. Form your teams and sign up!',
        icon: <Users className="w-6 h-6" />,
        type: 'start',
    },
    {
        date: 'Feb 10, 2026',
        title: 'Idea Submission Deadline',
        description: 'Submit your innovative ideas and project proposals.',
        icon: <Lightbulb className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 14, 2026',
        title: 'Shortlisted Teams Announced',
        description: 'Selected teams will be notified via email.',
        icon: <CheckCircle className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 18, 2026',
        title: 'Hackathon Begins',
        description: '24-hour coding marathon starts! Build, innovate, create.',
        icon: <Code className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 20, 2026',
        title: 'Finals & Awards',
        description: 'Final presentations and prize ceremony. Winners announced!',
        icon: <Trophy className="w-6 h-6" />,
        type: 'end',
    },
];

function TimelineItem({
    event,
    index,
    isLast,
}: {
    event: TimelineEvent;
    index: number;
    isLast: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`flex items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
        >
            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-16 md:pl-0 text-left`}
            >
                <div
                    className={`group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 ${event.type === 'start'
                            ? 'ring-2 ring-green-400'
                            : event.type === 'end'
                                ? 'ring-2 ring-yellow-400'
                                : ''
                        }`}
                >
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold mb-3">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                    </p>

                    {/* Type indicator */}
                    {event.type === 'start' && (
                        <div className="mt-3 text-xs font-semibold text-green-600 uppercase tracking-wide">
                            🚀 Event Kickoff
                        </div>
                    )}
                    {event.type === 'end' && (
                        <div className="mt-3 text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                            🏆 Grand Finale
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Center Timeline Node */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${event.type === 'start'
                            ? 'bg-gradient-to-br from-green-400 to-green-600'
                            : event.type === 'end'
                                ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                                : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        } text-white`}
                >
                    {event.icon}
                </motion.div>

                {/* Connecting Line Animation */}
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-1 bg-gradient-to-b from-blue-400 to-blue-600 absolute top-14 h-full"
                        style={{ minHeight: '60px' }}
                    />
                )}
            </div>

            {/* Empty space for alignment */}
            <div className="hidden md:block md:w-5/12" />
        </div>
    );
}

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section
            id="timeline"
            ref={containerRef}
            className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-semibold tracking-wide uppercase mb-4">
                        Mark Your Calendar
                    </div>
                    <h2 className="font-wc-rough-trad text-[clamp(2.5rem,5vw,4rem)] text-gray-900 leading-none mb-4">
                        Event{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Timeline
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From registration to the grand finale, here&apos;s your roadmap to innovation
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Center Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
                    <motion.div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full origin-top"
                        style={{ height: lineHeight }}
                    />

                    {/* Left Line (Mobile) */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />

                    {/* Timeline Events */}
                    <div className="space-y-12 md:space-y-16 relative">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={event.date}
                                event={event}
                                index={index}
                                isLast={index === timelineEvents.length - 1}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm mb-4">
                        📅 Don&apos;t miss out on any important dates!
                    </p>
                    <a
                        href="#register"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Register Now
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
