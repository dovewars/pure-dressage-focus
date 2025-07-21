# Stage 1: Dressage Score Calculator (1-2 Week Build)

## Overview
A simple web-based calculator that allows riders to quickly calculate their dressage test scores. No login required, instant results, mobile-friendly.

## Core Features

### 1. Quick Score Entry
- Grid of movement scores (1-10 with 0.5 increments)
- Automatic handling of coefficients
- Running percentage display
- Support for common test formats:
  - Training Level (13-14 movements)
  - First Level (15-17 movements)  
  - Second Level (16-19 movements)
  - Custom test option

### 2. Test Templates
Pre-loaded templates for popular tests:
- USDF Training Level Tests 1-3
- USDF First Level Tests 1-3
- USDF Second Level Tests 1-3
- USEF Training-Second Level Tests
- Generic template (customizable movements)

### 3. Collective Marks
Standard collective marks with coefficients:
- Gaits (coefficient: 1)
- Impulsion (coefficient: 1)
- Submission (coefficient: 2)
- Rider's Position (coefficient: 1)
- Rider's Effectiveness (coefficient: 1)

### 4. Results Display
- Final percentage
- Total points earned / possible
- Movement-by-movement breakdown
- Lowest scoring movements highlighted
- Share results via link

## Technical Implementation

### Tech Stack (Simple)
- **Frontend Only**: React + Vite
- **Styling**: Tailwind CSS
- **State**: React hooks (no Redux needed)
- **Hosting**: Vercel/Netlify (free)
- **Analytics**: Google Analytics

### Key Components

```jsx
// ScoreCalculator.jsx
function ScoreCalculator() {
  const [test, setTest] = useState('training-1');
  const [scores, setScores] = useState({});
  const [collectiveScores, setCollectiveScores] = useState({});
  
  const calculatePercentage = () => {
    // Sum all movement scores * coefficients
    // Add collective marks * coefficients
    // Divide by total possible points
  };
  
  return (
    <div className="calculator">
      <TestSelector value={test} onChange={setTest} />
      <MovementGrid test={test} scores={scores} onChange={setScores} />
      <CollectiveMarks scores={collectiveScores} onChange={setCollectiveScores} />
      <Results percentage={calculatePercentage()} scores={scores} />
    </div>
  );
}
```

### Data Structure

```javascript
const TESTS = {
  'training-1': {
    name: 'USDF Training Level Test 1',
    movements: [
      { id: 1, description: 'Enter A, halt, salute', coefficient: 1 },
      { id: 2, description: 'Track left C', coefficient: 1 },
      { id: 3, description: 'Circle 20m E', coefficient: 1 },
      // ... etc
    ],
    maxMovementScore: 140, // sum of all movements * coefficients
    maxCollectiveScore: 60  // sum of collective marks * coefficients
  }
};
```

## UI Design

### Mobile-First Layout
```
┌─────────────────────────┐
│   Dressage Calculator   │
│  ▼ Training Level 1     │
├─────────────────────────┤
│ Movement 1        [7.5] │
│ Movement 2        [6.0] │
│ Movement 3        [7.0] │
│ ...                     │
├─────────────────────────┤
│ Collective Marks        │
│ Gaits            [7.0] │
│ Impulsion        [6.5] │
│ Submission (x2)  [7.0] │
│ Rider Position   [7.5] │
│ Rider Effect     [7.0] │
├─────────────────────────┤
│ TOTAL: 68.5%           │
│ 137/200 points         │
│                        │
│ [Share] [Clear] [Save] │
└─────────────────────────┘
```

### Desktop Enhancement
- Side-by-side movement list and scoring
- Keyboard navigation (Tab, Arrow keys)
- Hover tooltips with movement descriptions
- Print-friendly layout

## Development Timeline

### Week 1
**Day 1-2**: Setup & Core Structure
- Create React app with Vite
- Setup Tailwind CSS
- Build component structure
- Create test data files

**Day 3-4**: Calculator Logic
- Score input components
- Calculation engine
- Test template system
- Results display

**Day 5**: Polish & Testing
- Mobile responsiveness
- Cross-browser testing
- Performance optimization
- Bug fixes

### Week 2 (Optional Polish)
**Day 1-2**: Enhanced Features
- Save to localStorage
- Export as PDF
- Share via URL
- Print stylesheet

**Day 3-4**: Additional Tests
- Add more test levels
- International tests (FEI)
- Eventing dressage tests
- Western dressage

**Day 5**: Launch Prep
- Setup domain
- Deploy to production
- Setup analytics
- Create landing page

## Monetization (Simple)
- Google AdSense (non-intrusive)
- "Buy me a coffee" button
- Optional premium features later:
  - Save unlimited tests
  - Historical tracking
  - No ads

## Marketing (Grassroots)
1. Share in Facebook dressage groups
2. Post in equestrian forums
3. Create Instagram posts showing the tool
4. Ask friends to test and share
5. SEO optimize for "dressage score calculator"

## Success Metrics
- 1,000 unique users in first month
- 5,000 calculations performed
- 4.5+ user satisfaction (via feedback form)
- 50+ email list signups for Stage 2

## Why Start Here?
1. **Validates Demand**: See if riders actually want digital scoring
2. **Builds Trust**: Free tool establishes credibility
3. **Gathers Emails**: For Stage 2 launch list
4. **Low Risk**: Minimal investment, quick feedback
5. **Technical Learning**: Test core scoring logic

## Stage 2 Preview
Once calculator proves popular (5,000+ users), expand to:
- User accounts
- Save test history
- Video integration
- Training mode
- Crypto rewards
- Mobile apps
- Premium features

## Next Steps
1. Choose domain name
2. Setup GitHub repo
3. Create basic React app
4. Build first working prototype (Day 1)
5. Get 10 riders to test it (Day 3)

Total investment: ~40 hours of development time