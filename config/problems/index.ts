import { StaticImageData } from 'next/image';
import cyberbullyingImg from '@/assets/problems/cyberbullying.jpeg';
import llmCyberImg from '@/assets/problems/llm-cyber.jpeg';
import sosSafetyImg from '@/assets/problems/sos-safety.jpeg';
import iotSecurityImg from '@/assets/problems/iot-security.jpg';
import trafficSimImg from '@/assets/problems/traffic-sim.jpeg';

export interface ProblemData {
  id: string;
  heading: string;
  content: string;
  img1: StaticImageData;
}

export const problemData: ProblemData[] = [
  {
    id: 'problem-1',
    heading: 'Cyberbullying Detection & Prevention',
    content:
      'Develop an AI-powered mobile application that monitors user messages and social media interactions for offensive or abusive content using NLP and sentiment analysis. The app should detect harmful patterns, issue real-time alerts, and provide reporting options with mental health resources.',
    img1: cyberbullyingImg,
  },
  {
    id: 'problem-2',
    heading: 'LLM for Cyber Issue SOPs',
    content:
      "Design an LLM-powered assistant trained on official government guidelines, CERT-In advisories, and cybercrime SOPs. The model should understand natural queries like 'Someone made a fake account of me' and provide step-by-step instructions with relevant official links and reporting forms.",
    img1: llmCyberImg,
  },
  {
    id: 'problem-3',
    heading: 'SOS & Geo-Fencing Safety App',
    content:
      'Create a lightweight safety mobile app supporting one-touch SOS alerts, geo-fencing, and real-time location sharing. The system should detect if a user exits a safe zone or triggers panic detection, sending alerts via SMS, WhatsApp, or calls even in low-network conditions.',
    img1: sosSafetyImg,
  },
  {
    id: 'problem-4',
    heading: 'IoT Device Security Analyzer',
    content:
      'Build a network-scanning and vulnerability-assessment tool that detects IoT devices connected to local Wi-Fi, identifies their make/model, and checks for known vulnerabilities (CVE database) or default credentials. Provide security scores and recommendations for securing each device.',
    img1: iotSecurityImg,
  },
  {
    id: 'problem-5',
    heading: 'Indian Traffic Simulation Modeling',
    content:
      'Design an AI-assisted, MATLAB-integrated toolset that generates realistic digital twins of Indian road networks from map data, drone imagery, or sensor datasets. Achieve 70-90% reduction in manual modeling time with seamless integration with MATLAB, Simulink, and RoadRunner.',
    img1: trafficSimImg,
  },
];


