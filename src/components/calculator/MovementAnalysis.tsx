'use client';

import { Movement } from '@/data/dressageTests';

interface MovementAnalysisProps {
  movements: Movement[];
  scores: Record<number, number>;
}

export default function MovementAnalysis({ movements, scores }: MovementAnalysisProps) {
  const scoredMovements = movements
    .filter(m => scores[m.id] !== undefined)
    .map(m => ({
      ...m,
      score: scores[m.id]
    }))
    .sort((a, b) => b.score - a.score);

  const strongestMovements = scoredMovements.slice(0, 3);
  const weakestMovements = scoredMovements.slice(-3).reverse();

  if (scoredMovements.length === 0) {
    return null;
  }

  return (
    <div className="bg-surface-dark border border-border-subtle rounded-2xl p-6">
      <h3 className="text-xl font-heading font-semibold mb-6 text-gold">Movement Analysis</h3>
      
      {strongestMovements.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-success">Strongest Movements:</h4>
          <ul className="space-y-2">
            {strongestMovements.map(m => (
              <li key={m.id} className="flex items-center justify-between">
                <span className="text-text-secondary">
                  • Movement {m.id}: {m.description}
                </span>
                <span className="font-mono text-success font-semibold">
                  {m.score}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {weakestMovements.length > 0 && weakestMovements[0].score < 7 && (
        <div>
          <h4 className="text-lg font-semibold mb-3 text-warning">Needs Improvement:</h4>
          <ul className="space-y-2">
            {weakestMovements.filter(m => m.score < 7).map(m => (
              <li key={m.id} className="flex items-center justify-between">
                <span className="text-text-secondary">
                  • Movement {m.id}: {m.description}
                </span>
                <span className={`font-mono font-semibold ${
                  m.score < 5 ? 'text-error' : 'text-warning'
                }`}>
                  {m.score}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="flex-1 bg-gold text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all">
          Share Results
        </button>
        <button className="flex-1 border-2 border-border-strong text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-all">
          Save as PDF
        </button>
        <button className="flex-1 border-2 border-border-strong text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-all">
          Start New Test
        </button>
      </div>
    </div>
  );
}