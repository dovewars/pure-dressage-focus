'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { dressageTests, getTestById, calculateMaxScore } from '@/data/dressageTests';
import TestSelector from '@/components/calculator/TestSelector';
import ScoreDisplay from '@/components/calculator/ScoreDisplay';
import ScoreInput from '@/components/calculator/ScoreInput';
import MovementAnalysis from '@/components/calculator/MovementAnalysis';

export default function CalculatorPage() {
  const [selectedTestId, setSelectedTestId] = useState(dressageTests[0].id);
  const [movementScores, setMovementScores] = useState<Record<number, number>>({});
  const [collectiveScores, setCollectiveScores] = useState<Record<string, number>>({});

  const selectedTest = getTestById(selectedTestId);

  // Reset scores when test changes
  useEffect(() => {
    setMovementScores({});
    setCollectiveScores({});
  }, [selectedTestId]);

  if (!selectedTest) {
    return null;
  }

  const calculateScore = () => {
    let earnedPoints = 0;
    let possiblePoints = 0;

    // Calculate movement scores
    selectedTest.movements.forEach(movement => {
      const score = movementScores[movement.id];
      if (score !== undefined) {
        earnedPoints += score * movement.coefficient;
        possiblePoints += 10 * movement.coefficient;
      }
    });

    // Calculate collective marks
    selectedTest.collectiveMarks.forEach(mark => {
      const score = collectiveScores[mark.id];
      if (score !== undefined) {
        earnedPoints += score * mark.coefficient;
        possiblePoints += 10 * mark.coefficient;
      }
    });

    const percentage = possiblePoints > 0 ? (earnedPoints / possiblePoints) * 100 : 0;
    
    return {
      percentage,
      earnedPoints,
      possiblePoints
    };
  };

  const { percentage, earnedPoints, possiblePoints } = calculateScore();

  return (
    <>
      {/* Simple Navbar for Calculator */}
      <nav className="fixed top-0 w-full bg-charcoal/90 backdrop-blur-md border-b border-border-subtle z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-xl font-heading font-bold text-gold">
                Total Dressage Focus - Score Calculator
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-background pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Test Selector and Score Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1">
              <TestSelector 
                selectedTest={selectedTestId} 
                onChange={setSelectedTestId} 
              />
            </div>
            <div className="lg:col-span-2">
              <ScoreDisplay 
                percentage={percentage}
                earnedPoints={Math.round(earnedPoints)}
                totalPoints={calculateMaxScore(selectedTest)}
              />
            </div>
          </div>

          {/* Movement Scores */}
          <div className="bg-surface-dark border border-border-subtle rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-gold">Movement Scores</h3>
            <div className="space-y-2">
              {selectedTest.movements.map(movement => (
                <ScoreInput
                  key={movement.id}
                  value={movementScores[movement.id]}
                  onChange={(value) => setMovementScores(prev => ({
                    ...prev,
                    [movement.id]: value ?? 0
                  }))}
                  movementNumber={movement.id}
                  description={movement.description}
                  coefficient={movement.coefficient}
                />
              ))}
            </div>
          </div>

          {/* Collective Marks */}
          <div className="bg-surface-dark border border-border-subtle rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-gold">Collective Marks</h3>
            <div className="space-y-2">
              {selectedTest.collectiveMarks.map(mark => (
                <ScoreInput
                  key={mark.id}
                  value={collectiveScores[mark.id]}
                  onChange={(value) => setCollectiveScores(prev => ({
                    ...prev,
                    [mark.id]: value ?? 0
                  }))}
                  description={mark.description}
                  coefficient={mark.coefficient}
                />
              ))}
            </div>
          </div>

          {/* Movement Analysis */}
          <MovementAnalysis 
            movements={selectedTest.movements}
            scores={movementScores}
          />
        </div>
      </main>
    </>
  );
}