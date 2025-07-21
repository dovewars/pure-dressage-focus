export interface Movement {
  id: number;
  description: string;
  coefficient: number;
}

export interface CollectiveMark {
  id: string;
  description: string;
  coefficient: number;
}

export interface DressageTest {
  id: string;
  name: string;
  level: string;
  movements: Movement[];
  collectiveMarks: CollectiveMark[];
}

export const dressageTests: DressageTest[] = [
  {
    id: 'usdf-training-1',
    name: 'USDF Training Level Test 1',
    level: 'Training',
    movements: [
      { id: 1, description: 'Enter working trot, halt at X, salute', coefficient: 1 },
      { id: 2, description: 'Track left, working trot', coefficient: 1 },
      { id: 3, description: 'Circle 20m at E', coefficient: 1 },
      { id: 4, description: 'Between K & A, Medium walk', coefficient: 1 },
      { id: 5, description: 'F-E Free walk', coefficient: 2 },
      { id: 6, description: 'E-H Medium walk', coefficient: 1 },
      { id: 7, description: 'C Working trot', coefficient: 1 },
      { id: 8, description: 'Circle 20m at B', coefficient: 1 },
      { id: 9, description: 'Between F & M, Change rein', coefficient: 1 },
      { id: 10, description: 'Between C & H, Working canter left lead', coefficient: 1 },
      { id: 11, description: 'E Circle 20m', coefficient: 1 },
      { id: 12, description: 'Between E & K, Working trot', coefficient: 1 },
      { id: 13, description: 'A Down centerline, X halt, salute', coefficient: 1 }
    ],
    collectiveMarks: [
      { id: 'gaits', description: 'Gaits', coefficient: 1 },
      { id: 'impulsion', description: 'Impulsion', coefficient: 1 },
      { id: 'submission', description: 'Submission', coefficient: 2 },
      { id: 'rider-position', description: 'Rider\'s position and seat', coefficient: 1 },
      { id: 'rider-aids', description: 'Rider\'s correct and effective use of aids', coefficient: 1 }
    ]
  },
  {
    id: 'usdf-training-2',
    name: 'USDF Training Level Test 2',
    level: 'Training',
    movements: [
      { id: 1, description: 'Enter working trot, halt at X, salute', coefficient: 1 },
      { id: 2, description: 'Track right, working trot', coefficient: 1 },
      { id: 3, description: 'C Track left, E Circle left 20m', coefficient: 1 },
      { id: 4, description: 'Between E & K Working canter left lead', coefficient: 1 },
      { id: 5, description: 'A Circle 20m left', coefficient: 1 },
      { id: 6, description: 'Between A & F Medium canter', coefficient: 1 },
      { id: 7, description: 'Between F & B Working canter', coefficient: 1 },
      { id: 8, description: 'Between B & M Working trot', coefficient: 1 },
      { id: 9, description: 'C Medium walk', coefficient: 1 },
      { id: 10, description: 'H-X-F Free walk', coefficient: 2 },
      { id: 11, description: 'F-A Medium walk', coefficient: 1 },
      { id: 12, description: 'A Working trot', coefficient: 1 },
      { id: 13, description: 'E Circle right 20m', coefficient: 1 },
      { id: 14, description: 'Between E & H Working canter right lead', coefficient: 1 },
      { id: 15, description: 'C Circle 20m right', coefficient: 1 },
      { id: 16, description: 'Between C & M Medium canter', coefficient: 1 },
      { id: 17, description: 'Between M & B Working canter', coefficient: 1 },
      { id: 18, description: 'Between B & F Working trot', coefficient: 1 },
      { id: 19, description: 'A Down centerline, X halt, salute', coefficient: 1 }
    ],
    collectiveMarks: [
      { id: 'gaits', description: 'Gaits', coefficient: 1 },
      { id: 'impulsion', description: 'Impulsion', coefficient: 1 },
      { id: 'submission', description: 'Submission', coefficient: 2 },
      { id: 'rider-position', description: 'Rider\'s position and seat', coefficient: 1 },
      { id: 'rider-aids', description: 'Rider\'s correct and effective use of aids', coefficient: 1 }
    ]
  },
  {
    id: 'usdf-training-3',
    name: 'USDF Training Level Test 3',
    level: 'Training',
    movements: [
      { id: 1, description: 'Enter working trot, halt at X, salute', coefficient: 1 },
      { id: 2, description: 'Track left, working trot', coefficient: 1 },
      { id: 3, description: 'C Halt through medium walk', coefficient: 1 },
      { id: 4, description: 'C Proceed medium walk', coefficient: 1 },
      { id: 5, description: 'H-X-F Free walk', coefficient: 2 },
      { id: 6, description: 'F Working trot', coefficient: 1 },
      { id: 7, description: 'Between A & K Working canter right lead', coefficient: 1 },
      { id: 8, description: 'E Circle right 20m', coefficient: 1 },
      { id: 9, description: 'Between E & H Working trot', coefficient: 1 },
      { id: 10, description: 'C Circle left 20m rising trot', coefficient: 1 },
      { id: 11, description: 'Between C & M Working canter left lead', coefficient: 1 },
      { id: 12, description: 'B Circle left 20m', coefficient: 1 },
      { id: 13, description: 'Between B & F Working trot', coefficient: 1 },
      { id: 14, description: 'A Down centerline', coefficient: 1 },
      { id: 15, description: 'X Halt, salute', coefficient: 1 }
    ],
    collectiveMarks: [
      { id: 'gaits', description: 'Gaits', coefficient: 1 },
      { id: 'impulsion', description: 'Impulsion', coefficient: 1 },
      { id: 'submission', description: 'Submission', coefficient: 2 },
      { id: 'rider-position', description: 'Rider\'s position and seat', coefficient: 1 },
      { id: 'rider-aids', description: 'Rider\'s correct and effective use of aids', coefficient: 1 }
    ]
  },
  {
    id: 'usdf-first-1',
    name: 'USDF First Level Test 1',
    level: 'First',
    movements: [
      { id: 1, description: 'Enter working trot, halt at X, salute', coefficient: 1 },
      { id: 2, description: 'Track left, working trot', coefficient: 1 },
      { id: 3, description: 'C-H-S Lengthen stride in trot', coefficient: 1 },
      { id: 4, description: 'S-E-V-K Working trot', coefficient: 1 },
      { id: 5, description: 'A Halt 4 seconds, proceed medium walk', coefficient: 1 },
      { id: 6, description: 'F-X-H Change rein, free walk', coefficient: 2 },
      { id: 7, description: 'H-C Medium walk', coefficient: 1 },
      { id: 8, description: 'C Working trot', coefficient: 1 },
      { id: 9, description: 'B Circle left 20m', coefficient: 1 },
      { id: 10, description: 'Corner before F, KXM Change rein', coefficient: 1 },
      { id: 11, description: 'Between M & C Working canter right lead', coefficient: 1 },
      { id: 12, description: 'E Circle right 20m', coefficient: 1 },
      { id: 13, description: 'Between E & K Working trot', coefficient: 1 },
      { id: 14, description: 'A Down centerline', coefficient: 1 },
      { id: 15, description: 'X Halt, salute', coefficient: 1 }
    ],
    collectiveMarks: [
      { id: 'gaits', description: 'Gaits', coefficient: 1 },
      { id: 'impulsion', description: 'Impulsion', coefficient: 1 },
      { id: 'submission', description: 'Submission', coefficient: 2 },
      { id: 'rider-position', description: 'Rider\'s position and seat', coefficient: 1 },
      { id: 'rider-aids', description: 'Rider\'s correct and effective use of aids', coefficient: 1 }
    ]
  }
];

export function getTestById(id: string): DressageTest | undefined {
  return dressageTests.find(test => test.id === id);
}

export function calculateMaxScore(test: DressageTest): number {
  const movementScore = test.movements.reduce((sum, movement) => sum + (10 * movement.coefficient), 0);
  const collectiveScore = test.collectiveMarks.reduce((sum, mark) => sum + (10 * mark.coefficient), 0);
  return movementScore + collectiveScore;
}