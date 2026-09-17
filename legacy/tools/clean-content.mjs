// Replaces unsupported corporate positioning with the client-approved wording.
// Operates on text nodes so markup whitespace can't defeat a match.
import fs from 'node:fs';
import { parse } from 'node-html-parser';

const R = [
  // --- about ---
  ['clean architecture', 'clear, maintainable design'],
  ['SYSTEMATIC EXECUTION', 'PRACTICAL DELIVERY'],
  ['Developing resilient architectures tailored to operational needs.', 'Built to suit the way the organization actually works.'],
  ['systematic execution', 'practical delivery'],

  // --- careers ---
  ['Machine learning architectures, algorithmic models, and foundational intelligence systems built for complex production environments.', 'Machine learning and computer vision applied to practical business problems.'],
  ['Technology Advisory', 'Technology Consulting'],
  ['AI-powered OHE inspection & catenary telemetry for uninterrupted operational transit lines.', 'AI-assisted inspection of railway overhead equipment imagery.'],
  ['AI-powered OHE inspection &amp; catenary telemetry for uninterrupted operational transit lines.', 'AI-assisted inspection of railway overhead equipment imagery.'],

  // --- case studies ---
  ['High-voltage lattice tower inspection leveraging high-definition zoom and infrared radiometric payload telemetry across crossarms and insulator strings.', 'Drone-captured imagery of power transmission towers and their components, reviewed with computer vision.'],
  ['Engineered as an advisory review layer to highlight frames requiring technician sign-off, maintaining human-in-the-loop governance.', 'Designed to highlight images for engineer review. People make the decisions.'],
  ['Workflow designed to augment utility field crews with pre-screened image data packs, not replace mandatory on-site physical compliance standards.', 'Intended to support field teams with pre-screened imagery, not to replace on-site inspection.'],

  // --- contact ---
  ['System Advisory Active', 'Contact'],
  ['Response turnaround: 1 business day', 'We read every enquiry.'],
  ['Enterprise Tier', ''],
  ['Identifying core technical constraints, operational integration points, throughput parameters, and quantifiable accuracy targets.', 'Identifying the technical constraints, integration points and what a good result looks like.'],

  // --- home ---
  ['Comprehensive technology capabilities built to drive enterprise evolution.', 'Technology capabilities across AI, software, automation and consulting.'],
  ['Digital technology solutions designed to improve learning and institutional workflows.', 'Digital solutions that support learning and administrative work.'],
  ['Practical digital transformation engineered for sustainable ROI.', 'Practical digital solutions built around business needs.'],
  ['A disciplined five-stage methodology that translates complex business requirements into high-impact operational systems.', 'Five stages that take a business requirement through to a working solution.'],

  // --- industries ---
  ['institutional workflows and information management', 'administrative workflows and information management'],
  ['Modern institutional portals and educational platforms.', 'Modern portals and learning platforms.'],
  ['Practical reporting and institutional information management.', 'Practical reporting and information management.'],
  ['Aligning technical engineering directly with operational context and institutional realities.', 'Matching the technology to how the organization actually operates.'],
  ['Institutional Software', 'Administrative Software'],
  ['SKY QUANTECH AI ADVISORY FRAMEWORK', 'SKY QUANTECH AI'],
  ['How our core computational competencies map to functional transformation across enterprise industries.', 'How our capabilities apply across the industries we work with.'],

  // --- process ---
  ['Deterministic Delivery', 'Practical Delivery'],
  ['Evaluating practical tools, deterministic models, compute footprints, and resilient architectures.', 'Evaluating practical tools, suitable approaches and the effort involved.'],
  ['Five cohesive stages designed to eliminate ambiguity, enforce technical validation, and guarantee dependable enterprise outcomes.', 'Five stages that keep requirements clear from the first conversation through to ongoing support.'],
  ['Telemetry Feedback', 'Feedback'],
  ['Algorithmic Architecture & Engineering', 'Software & AI Engineering'],
  ['Algorithmic Architecture &amp; Engineering', 'Software &amp; AI Engineering'],
  ['Underpinned By Technology Advisory & Objective Feasibility', 'Underpinned By Technology Consulting & Practical Feasibility'],
  ['Underpinned By Technology Advisory &amp; Objective Feasibility', 'Underpinned By Technology Consulting &amp; Practical Feasibility'],
  ['State: Production Ready', 'State: Ready for Use'],
  ['Does the software and algorithmic stack meet the agreed functional specs?', 'Does the software meet the agreed requirements?'],
  ['Pvt. Ltd. — Enterprise Artificial Intelligence & Quantitative Advisory engineering dependable systems for global computational scale.', 'Pvt. Ltd. — AI solutions, software development, automation and technology consulting.'],
  ['Pvt. Ltd. — Enterprise Artificial Intelligence &amp; Quantitative Advisory engineering dependable systems for global computational scale.', 'Pvt. Ltd. — AI solutions, software development, automation and technology consulting.'],

  // --- solutions ---
  ['Institutional Engineering', 'Business Software'],
  ['Algorithmic Basis', 'Approach'],
  ['Telemetry Node', 'Data Input'],
  ['Applies filtering, edge resolution, and noise normalization for algorithmic readiness.', 'Applies filtering and normalization to prepare images for analysis.'],
  ['This conceptual schematic demonstrates how optical data models transition from raw telemetry collection directly into automated enterprise validation.', 'This diagram shows how captured imagery moves through analysis to a reviewed result.'],

  // --- why us ---
  ['before recommending any algorithmic approach', 'before recommending any technical approach'],
  ['Predictive Models & Quantitative Analytics', 'Machine Learning & Data Analysis'],
  ['Predictive Models &amp; Quantitative Analytics', 'Machine Learning &amp; Data Analysis'],

  // --- careers: unsupported technical claims (§21) ---
  ['Innovation Lab Active // First-Principles Engineering', 'First-Principles Engineering'],
  ['System Engineering Streams', 'Areas of Work'],
  ['Automated visual inspection, multi-spectral imaging, and object classification pipelines applied directly to critical infrastructure assets.', 'Automated visual inspection and image classification applied to real-world equipment.'],
  ['Scalable enterprise applications, distributed backend services, and clean system integrations built with rigorous engineering standards.', 'Web, mobile and business applications, and the integrations that connect them.'],
  ['Operational pipelines, workflow orchestration, and high-throughput data processing to eliminate manual operational friction.', 'Workflow and business process automation that removes repetitive manual work.'],
  ['Submissions are reviewed by our engineering leadership. We respect your privacy and handle all data securely.', 'We read every profile that comes in.'],

  // --- case studies: unsupported specifics (§17.3, §17.4) ---
  ['Ground-track optical portal processing running train bogies, wheel profiles, and roof pantographs through synchronized frame analysis.', 'High-speed cameras capture images of rolling stock as it passes through an inspection environment, and computer vision analyzes the captured imagery.'],
  ['The High-Throughput Challenge', 'The Inspection Challenge'],
  ['Autonomous orbit and waypoint UAV image acquisition.', 'Drone image capture of transmission towers and their components.'],
  ['High-Res RGB, Radiometric Thermal', 'RGB and thermal imagery'],

  // --- industries: healthcare must not read as clinical (§14) ---
  ['Clinical Ops', 'Healthcare Operations'],
  ['Clinical Workflows & Operations', 'Healthcare Workflows & Operations'],
  ['Clinical Workflows &amp; Operations', 'Healthcare Workflows &amp; Operations'],

  // --- final claim pass ---
  ['Direct routing to our technology solutions desk', 'The best way to reach us'],
  ['Executive and technical operations', 'Our office'],
  ['Authenticated web infrastructure', 'Our official website'],
  ['Verified Social Channels:', 'Social Channels:'],
  ['Structured Governance', 'Clear Ownership'],
  ['ARCH-VERIFIED', 'APPROACH'],
  ['Secure, scalable applications designed for financial workflows.', 'Scalable applications designed for financial workflows.'],
  ['Proven Knowledge', 'Applied Knowledge'],
  ['verified geospatial metadata', 'recorded geospatial metadata'],

  ['Continuous System Verification', 'Ongoing Support'],
  ['Lifecycle Fidelity', 'Ongoing Involvement'],

  ['Prompt technical response from our architecture team.', 'Tell us what you are working on.'],

  // --- generic residue ---
  ['Enterprise Artificial Intelligence & Quantitative Advisory', 'AI, Software, Automation & Technology Consulting'],
  ['Enterprise Artificial Intelligence &amp; Quantitative Advisory', 'AI, Software, Automation &amp; Technology Consulting'],
];

const rx = R.map(([from, to]) => [
  new RegExp(from.trim().split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+'), 'gi'),
  to,
]);

const applied = new Map();
for (const file of fs.readdirSync('site/pages').filter(f => f.endsWith('.html'))) {
  const p = `site/pages/${file}`;
  let html = fs.readFileSync(p, 'utf8');
  const root = parse(html, { blockTextElements: { script: true, style: true } });

  const walk = node => {
    for (const child of node.childNodes) {
      if (child.nodeType === 3) {
        let t = child.rawText, before = t;
        rx.forEach(([re, to], i) => {
          t = t.replace(re, () => {
            const k = `${file} :: ${R[i][0].slice(0, 60)}`;
            applied.set(k, (applied.get(k) || 0) + 1);
            return to;
          });
        });
        if (t !== before) child.rawText = t;
      } else if (child.childNodes) walk(child);
    }
  };
  walk(root);
  fs.writeFileSync(p, root.toString());
}

console.log(`${applied.size} distinct replacements applied:`);
for (const [k, n] of [...applied].sort()) console.log(`  ${n}×  ${k}`);
