# The World in One Frame — 18 November 2026

A make.fun entry for **news-image-20261118**: one 1024×1024 poster that sums
up the world news of Wednesday 18 November 2026.

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory; the image is the whole entry.

## What the poster shows

A front-page layout: a masthead naming the day, four illustrated panels,
and a news ticker along the bottom.

- **GULF STRIKES** — US jets bombed a Revolutionary Guard missile-launch
  site on Qeshm Island in the Strait of Hormuz; Iran answered with drones
  and missiles against US-linked bases in Bahrain and Kuwait.
- **CRIMEA BRIDGE DOWN** — Ukraine struck the Kerch Bridge for a second
  straight day and part of its road span collapsed into the strait.
- **SHENZHEN SUMMIT** — Xi Jinping hosted Vladimir Putin in Shenzhen ahead
  of a planned three-way meeting with Donald Trump, who was travelling in
  for the APEC gathering.
- **NVIDIA'S RECORD DAY** — Nvidia reported a record quarter, revenue
  roughly doubling year on year on AI demand, days after CEO Jensen Huang's
  resignation.

Ticker: Democrats take the Senate 56–44 after Mary Peltola's Alaska win •
the Ebola outbreak in DR Congo more than doubled in three months •
Cambridge Dictionary's Word of the Year 2026 is "Human".

## How it was made

The four panels are AI-generated flat news illustrations with no text in
them; every word on the poster is typeset programmatically (Python + PIL,
DejaVu Sans Bold) so the type stays crisp and legible down to ~300 px wide.
The composition script and panel sources live in `build/`; the shipped
`entry.png` is a 256-colour palette PNG of 199,632 bytes.
