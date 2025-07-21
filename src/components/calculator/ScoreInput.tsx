'use client';

interface ScoreInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  movementNumber?: number;
  description?: string;
  coefficient?: number;
}

export default function ScoreInput({ 
  value, 
  onChange, 
  movementNumber, 
  description, 
  coefficient = 1 
}: ScoreInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value === '' ? undefined : parseFloat(e.target.value);
    onChange(newValue);
  };

  const getScoreClass = (score: number | undefined) => {
    if (!score) return '';
    if (score >= 7) return 'text-success';
    if (score >= 5) return 'text-warning';
    return 'text-error';
  };

  const scores = [
    { value: '', label: '-' },
    { value: '0', label: '0' },
    { value: '0.5', label: '0.5' },
    { value: '1', label: '1' },
    { value: '1.5', label: '1.5' },
    { value: '2', label: '2' },
    { value: '2.5', label: '2.5' },
    { value: '3', label: '3' },
    { value: '3.5', label: '3.5' },
    { value: '4', label: '4' },
    { value: '4.5', label: '4.5' },
    { value: '5', label: '5' },
    { value: '5.5', label: '5.5' },
    { value: '6', label: '6' },
    { value: '6.5', label: '6.5' },
    { value: '7', label: '7' },
    { value: '7.5', label: '7.5' },
    { value: '8', label: '8' },
    { value: '8.5', label: '8.5' },
    { value: '9', label: '9' },
    { value: '9.5', label: '9.5' },
    { value: '10', label: '10' }
  ];

  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-surface-elevated rounded-lg transition-colors">
      <div className="flex-1 pr-4">
        {movementNumber && (
          <span className="text-text-muted mr-2">{movementNumber}.</span>
        )}
        <span className="text-text-primary">{description}</span>
        {coefficient > 1 && (
          <span className="ml-2 text-gold text-sm font-semibold">(×{coefficient})</span>
        )}
      </div>
      <select
        value={value ?? ''}
        onChange={handleChange}
        className={`bg-surface-elevated border border-border-subtle rounded-lg px-4 py-2 text-lg font-mono w-24 text-center focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all ${getScoreClass(value)}`}
      >
        {scores.map(score => (
          <option key={score.value} value={score.value}>
            {score.label}
          </option>
        ))}
      </select>
    </div>
  );
}