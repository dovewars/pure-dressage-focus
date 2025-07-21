# Total Dressage Focus - UI Design System

## Brand Identity

### Color Palette
```css
/* Primary Colors */
--primary-gold: #D4AF37;        /* Elegant gold - reminiscent of championship medals */
--primary-dark: #0A0A0A;        /* Rich black - sophistication */
--primary-charcoal: #1A1A1A;    /* Dark charcoal - main backgrounds */

/* Secondary Colors */
--accent-purple: #6B46C1;       /* Royal purple - premium features */
--accent-silver: #C0C0C0;       /* Silver - secondary achievements */
--accent-bronze: #CD7F32;       /* Bronze - tertiary elements */

/* UI Colors */
--surface-dark: #141414;        /* Card backgrounds */
--surface-elevated: #1F1F1F;    /* Elevated surfaces */
--border-subtle: #2A2A2A;       /* Subtle borders */
--border-strong: #3A3A3A;       /* Strong borders */

/* Text Colors */
--text-primary: #FFFFFF;        /* Primary text */
--text-secondary: #B3B3B3;      /* Secondary text */
--text-muted: #808080;          /* Muted text */

/* Status Colors */
--success: #10B981;             /* Good scores (7+) */
--warning: #F59E0B;             /* Average scores (5-6) */
--error: #EF4444;               /* Poor scores (<5) */
```

### Typography
```css
/* Headings - Playfair Display (Elegant Serif) */
--font-heading: 'Playfair Display', serif;

/* Body - Inter (Clean Sans-serif) */
--font-body: 'Inter', -apple-system, sans-serif;

/* Monospace - For scores */
--font-mono: 'JetBrains Mono', monospace;
```

## Landing Page Design

### Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Total Dressage Focus          [Calculator] [Login]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │    [Hero Image: Elegant dressage horse and rider     │ │
│  │     in extended trot, dramatic lighting, dark arena] │ │
│  │                                                       │ │
│  │     Master Your Dressage Journey                      │ │
│  │     ─────────────────────────────                     │ │
│  │     Track scores. Analyze progress.                   │ │
│  │     Achieve excellence.                               │ │
│  │                                                       │ │
│  │     [Try Calculator →]  [View Courses]                │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Features Section
```
┌─────────────────────────────────────────────────────────────┐
│                    Why Total Dressage Focus?                │
│                    ─────────────────────────                 │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │ 📊          │  │ 🎯          │  │ 🏆          │       │
│  │             │  │             │  │             │       │
│  │  Instant    │  │  Progress   │  │  Achieve    │       │
│  │  Scoring    │  │  Tracking   │  │  Goals      │       │
│  │             │  │             │  │             │       │
│  │ Calculate   │  │ Monitor     │  │ Set targets │       │
│  │ your test   │  │ improvement │  │ and reach   │       │
│  │ scores      │  │ over time   │  │ new levels  │       │
│  └─────────────┘  └─────────────┘  └─────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Coming Soon Section
```
┌─────────────────────────────────────────────────────────────┐
│                      Coming Soon                            │
│                      ───────────                            │
│                                                             │
│  ┌───────────────────────┐  ┌───────────────────────┐     │
│  │ [Course Image]        │  │ [App Preview]         │     │
│  │                       │  │                       │     │
│  │ Online Training       │  │ Mobile App            │     │
│  │ Courses              │  │                       │     │
│  │                       │  │ Take your training    │     │
│  │ Learn from top       │  │ anywhere with our     │     │
│  │ international        │  │ upcoming mobile app   │     │
│  │ trainers             │  │                       │     │
│  │                       │  │ [Join Waitlist]       │     │
│  │ [Learn More]         │  │                       │     │
│  └───────────────────────┘  └───────────────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Calculator Page Design

### Header
```
┌─────────────────────────────────────────────────────────────┐
│  [← Back] Total Dressage Focus - Score Calculator          │
├─────────────────────────────────────────────────────────────┤
```

### Main Calculator Interface
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│  │  Select Test            │  │  Your Score             │ │
│  │  ────────────           │  │  ──────────             │ │
│  │                         │  │                         │ │
│  │  [▼ USDF Training 1 ]  │  │    68.5%               │ │
│  │                         │  │                         │ │
│  │  Popular Tests:         │  │  ████████████░░░░      │ │
│  │  • Training Level 1-3   │  │                         │ │
│  │  • First Level 1-3      │  │  137 / 200 points      │ │
│  │  • Second Level 1-3     │  │                         │ │
│  └─────────────────────────┘  └─────────────────────────┘ │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Movement Scores                                    │   │
│  │  ────────────────                                   │   │
│  │                                                     │   │
│  │  1. Enter at A, halt                    [7.5] ▼   │   │
│  │  2. Track left at C                     [6.0] ▼   │   │
│  │  3. 20m circle at E                     [7.0] ▼   │   │
│  │  4. Medium walk FXH                     [6.5] ▼   │   │
│  │  5. Free walk across diagonal           [7.0] ▼   │   │
│  │  6. Working trot at A                   [7.5] ▼   │   │
│  │  7. 20m circle at B                     [6.5] ▼   │   │
│  │  8. Change rein FXH                     [7.0] ▼   │   │
│  │  9. Working canter left lead            [6.0] ▼   │   │
│  │  10. 20m circle at E                    [6.5] ▼   │   │
│  │  11. Change rein FXH                    [5.5] ▼   │   │
│  │  12. Working trot at A                  [7.0] ▼   │   │
│  │  13. Halt at X                          [7.5] ▼   │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Collective Marks                                   │   │
│  │  ─────────────────                                  │   │
│  │                                                     │   │
│  │  Gaits                                  [7.0] ▼   │   │
│  │  Impulsion                              [6.5] ▼   │   │
│  │  Submission (×2)                        [7.0] ▼   │   │
│  │  Rider's position & seat                [7.5] ▼   │   │
│  │  Rider's effectiveness of aids          [7.0] ▼   │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Movement Analysis                                  │   │
│  │  ─────────────────                                  │   │
│  │                                                     │   │
│  │  Strongest Movements:                               │   │
│  │  • Movement 1: Enter at A (7.5)                     │   │
│  │  • Movement 13: Halt at X (7.5)                     │   │
│  │                                                     │   │
│  │  Needs Improvement:                                 │   │
│  │  • Movement 11: Change rein FXH (5.5)               │   │
│  │  • Movement 9: Working canter (6.0)                 │   │
│  │                                                     │   │
│  │  [Share Results] [Save as PDF] [Start New Test]     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Responsive Design

### Mobile Landing Page (375px)
```
┌─────────────────────┐
│ ☰  Total Dressage   │
│    Focus            │
├─────────────────────┤
│                     │
│  [Hero Image]       │
│                     │
│  Master Your        │
│  Dressage Journey   │
│  ───────────────    │
│                     │
│  Track. Analyze.    │
│  Excel.             │
│                     │
│  [Try Calculator]   │
│                     │
├─────────────────────┤
│  📊 Instant Scoring │
│  Calculate scores   │
│  instantly          │
│                     │
│  🎯 Track Progress  │
│  Monitor your       │
│  improvement        │
│                     │
│  🏆 Achieve Goals   │
│  Reach new levels   │
│                     │
└─────────────────────┘
```

### Mobile Calculator (375px)
```
┌─────────────────────┐
│ ← Score Calculator  │
├─────────────────────┤
│                     │
│  Your Score         │
│  68.5%             │
│  ████████████░░░░   │
│                     │
│  [▼ USDF Train 1]  │
│                     │
├─────────────────────┤
│ Movement Scores     │
│ ───────────────     │
│                     │
│ 1. Enter A   [7.5]▼ │
│ 2. Track C   [6.0]▼ │
│ 3. Circle E  [7.0]▼ │
│ 4. Walk FXH  [6.5]▼ │
│ 5. Free walk [7.0]▼ │
│ ...                 │
│                     │
│ Collective Marks    │
│ ────────────────    │
│                     │
│ Gaits        [7.0]▼ │
│ Impulsion    [6.5]▼ │
│ Submission×2 [7.0]▼ │
│ Position     [7.5]▼ │
│ Aids         [7.0]▼ │
│                     │
│ [Share] [PDF] [New] │
│                     │
└─────────────────────┘
```

## Component Styling Examples

### Score Input Component
```css
.score-input {
  background: var(--surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 18px;
  width: 80px;
  text-align: center;
  transition: all 0.2s ease;
}

.score-input:hover {
  border-color: var(--primary-gold);
  box-shadow: 0 0 0 1px var(--primary-gold);
}

.score-input:focus {
  outline: none;
  border-color: var(--primary-gold);
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
}

/* Color coding for scores */
.score-input[data-score-range="good"] {
  color: var(--success);
}

.score-input[data-score-range="average"] {
  color: var(--warning);
}

.score-input[data-score-range="poor"] {
  color: var(--error);
}
```

### Button Styles
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary-gold), #B8941F);
  color: var(--primary-dark);
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-strong);
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--primary-gold);
  color: var(--primary-gold);
}
```

### Card Component
```css
.card {
  background: var(--surface-dark);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--border-strong);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}

.card-gold {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
  border-color: rgba(212, 175, 55, 0.3);
}
```

## Image Suggestions

### Hero Image Ideas
1. **Dramatic Dressage Shot**: Horse and rider in extended trot, side-lit with dramatic shadows on dark arena sand
2. **Close-up Excellence**: Detailed shot of braided mane with gold accents
3. **Arena Atmosphere**: Wide shot of competition arena with subtle lighting

### Supporting Images
- Gold medal close-up for achievement sections
- Elegant horse portrait for about sections
- Training session photos with morning mist
- Abstract geometric patterns inspired by dressage movements

## Animation Ideas

### Subtle Animations
```css
/* Score percentage animation */
@keyframes scoreReveal {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Gold shimmer effect */
@keyframes goldShimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Movement score fade-in */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

This design system creates an elegant, professional appearance that appeals to the dressage community while maintaining excellent usability and a modern feel.