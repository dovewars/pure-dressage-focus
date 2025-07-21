'use client';

interface ScoreDisplayProps {
  percentage: number;
  earnedPoints: number;
  totalPoints: number;
}

export default function ScoreDisplay({ percentage, earnedPoints, totalPoints }: ScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  const progressWidth = Math.min(100, Math.max(0, percentage));

  return (
    <div className="bg-surface-dark border border-border-subtle rounded-2xl p-6">
      <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Your Score</h3>
      
      <div className="text-center mb-6">
        <div className={`text-6xl font-mono font-bold ${getScoreColor(percentage)} animate-score-reveal`}>
          {percentage.toFixed(1)}%
        </div>
      </div>

      <div className="mb-4">
        <div className="bg-surface-elevated rounded-full h-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold/70 transition-all duration-500 ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>

      <div className="text-center text-text-secondary">
        <span className="font-mono">{earnedPoints}</span>
        <span className="text-text-muted"> / </span>
        <span className="font-mono">{totalPoints}</span>
        <span className="text-text-muted"> points</span>
      </div>
    </div>
  );
}