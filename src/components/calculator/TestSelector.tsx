'use client';

import { dressageTests } from '@/data/dressageTests';

interface TestSelectorProps {
  selectedTest: string;
  onChange: (testId: string) => void;
}

export default function TestSelector({ selectedTest, onChange }: TestSelectorProps) {
  const testsByLevel = dressageTests.reduce((acc, test) => {
    if (!acc[test.level]) {
      acc[test.level] = [];
    }
    acc[test.level].push(test);
    return acc;
  }, {} as Record<string, typeof dressageTests>);

  return (
    <div className="bg-surface-dark border border-border-subtle rounded-2xl p-6">
      <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Select Test</h3>
      
      <select
        value={selectedTest}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface-elevated border border-border-subtle rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
      >
        {Object.entries(testsByLevel).map(([level, tests]) => (
          <optgroup key={level} label={`${level} Level`}>
            {tests.map(test => (
              <option key={test.id} value={test.id}>
                {test.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-text-secondary mb-2">Popular Tests:</h4>
        <ul className="space-y-1 text-sm text-text-muted">
          <li>• Training Level 1-3</li>
          <li>• First Level 1-3</li>
          <li>• Second Level 1-3</li>
        </ul>
      </div>
    </div>
  );
}