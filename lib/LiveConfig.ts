export interface OperatorData {
    name: string;
    title: string;
    searchPlaceholder: string;
    addButtonText: string;
    columns: {
        name: string;
        count: string;
        lang: string;
        status: string;
        lastEdited: string;
        action: string;
    };
    rows: Array<{
        name: string;
        count: string | number;
        lang: string;
        status: 'red' | 'green' | 'yellow';
        lastEdited: string;
    }>;
}

export const OperatorConfig: Record<string, OperatorData> = {
    'magic-portal': {
        name: 'Magic Portal',
        title: 'Magic Portal',
        searchPlaceholder: 'Search Portal Name...',
        addButtonText: 'Create New Portal',
        columns: {
            name: 'Portal Name',
            count: 'Puzzles',
            lang: 'Language',
            status: 'Status',
            lastEdited: 'Last Modified',
            action: 'Action'
        },
        rows: [
            {
                name: 'Enchanted Forest',
                count: 7,
                lang: 'FR',
                status: 'green',
                lastEdited: '12.01.2026 08:45'
            },
            {
                name: 'Crystal Cave',
                count: 3,
                lang: 'DE',
                status: 'yellow',
                lastEdited: '13.01.2026 10:20'
            },
            {
                name: 'Mystic Lake',
                count: 5,
                lang: 'EN',
                status: 'red',
                lastEdited: '14.01.2026 12:00'
            }
        ]
    },
    'operation-mindfall': {
        name: 'Operation Mindfall',
        title: 'Operation Mindfall',
        searchPlaceholder: 'Search Spy Mission...',
        addButtonText: 'Create New Mission',
        columns: {
            name: 'Mission Title',
            count: 'Tasks',
            lang: 'Language',
            status: 'Status',
            lastEdited: 'Last Modified',
            action: 'Action'
        },
        rows: [
            {
                name: 'Silent Echo',
                count: 10,
                lang: 'ES',
                status: 'yellow',
                lastEdited: '15.02.2026 09:30'
            },
            {
                name: 'Shadow Strike',
                count: 6,
                lang: 'EN',
                status: 'green',
                lastEdited: '16.02.2026 11:15'
            },
            {
                name: 'Phantom Protocol',
                count: 8,
                lang: 'IT',
                status: 'red',
                lastEdited: '17.02.2026 13:40'
            }
        ]
    },
    'blackout': {
        name: 'Blackout',
        title: 'Blackout',
        searchPlaceholder: 'Search Blackout Scenario...',
        addButtonText: 'Create New Scenario',
        columns: {
            name: 'Scenario Title',
            count: 'Levels',
            lang: 'Language',
            status: 'Status',
            lastEdited: 'Last Modified',
            action: 'Action'
        },
        rows: [
            {
                name: 'Power Surge',
                count: 4,
                lang: 'EN',
                status: 'green',
                lastEdited: '18.03.2026 15:00'
            },
            {
                name: 'Citywide Chaos',
                count: 9,
                lang: 'RU',
                status: 'yellow',
                lastEdited: '19.03.2026 16:25'
            },
            {
                name: 'Nightfall',
                count: 2,
                lang: 'EN',
                status: 'red',
                lastEdited: '20.03.2026 18:10'
            }
        ]
    }
};

export const getOperatorData = (operatorType: string): OperatorData | null => {
    return OperatorConfig[operatorType] || null;
};
