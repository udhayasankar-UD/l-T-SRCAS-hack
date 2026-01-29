export interface Guideline {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export const guidelinesData: Guideline[] = [
    {
        id: 'hackathon',
        icon: 'hackathon',
        title: '36-Hour Hackathon',
        description:
            'An intense 36-hour coding marathon where you build innovative solutions to real-world problems.',
    },
    {
        id: 'register',
        icon: 'register',
        title: 'Free Registration',
        description:
            'Participation is completely free! No registration fees required to join the hackathon.',
    },
    {
        id: 'team',
        icon: 'team',
        title: 'Team Size: 2-4 Members',
        description:
            'Form a team of 2 to 4 members. Cross-college teams are allowed and encouraged!',
    },
    {
        id: 'no-prerequisites',
        icon: 'no-prerequisites',
        title: 'No Prerequisites',
        description:
            'Open to all skill levels! Whether you are a beginner or an expert, everyone is welcome.',
    },
    {
        id: 'id-card',
        icon: 'id-card',
        title: 'Valid College ID Required',
        description:
            'All participants must carry a valid college ID card for verification during the event.',
    },
    {
        id: 'free-food',
        icon: 'free-food',
        title: 'Meals Provided',
        description:
            'All meals, snacks, and refreshments will be provided throughout the hackathon.',
    },
    {
        id: 'in-person',
        icon: 'in-person',
        title: 'In-Person Event',
        description:
            'This is an offline event. All participants must be present at the venue throughout the hackathon.',
    },
    {
        id: 'venue',
        icon: 'venue',
        title: 'SRCAS Campus',
        description:
            'The hackathon will be held at Sri Ramakrishna College of Arts and Science, Coimbatore.',
    },
    {
        id: 'safe',
        icon: 'safe',
        title: 'Safe & Inclusive',
        description:
            'We ensure a safe, inclusive, and harassment-free environment for all participants.',
    },
];
