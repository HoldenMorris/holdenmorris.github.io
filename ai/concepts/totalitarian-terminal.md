Concept 1: The Totalitarian Terminal

This concept leans heavily into the "Matrix" and 1930s industrial aesthetic, creating a sense of a high-security, vintage government terminal.

Typography: Uses UnifrakturCook for high-impact, all-caps headings to evoke a rigid, historical authority, paired with Jost or Archivo Narrow for technical body data.

Visual Environment: A full-screen <canvas> renders "Matrix" digital rain where the leading characters are pure white ($#fff$) and the trails are "Matrix Green" ($#00FF41$), but viewed through a "heavy" rusted steel frame generated via SVG feTurbulence with a baseFrequency of $0.05$.

Interactive Elements: A central terminal component (implemented via xterm.js) that handles site navigation. Projects are "unlocked" via terminal commands, mimicking an encrypted file system.

Atmospheric Effects: A global CRT overlay using CSS linear-gradient for scanlines and an infinite $0.15$s @keyframes animation to simulate $133$fps screen flicker.