// skiils function
import React from "react";
function skillsSection(){
const skills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Writing', percentage: 85 },
    { name: 'Problem Solving', percentage: 95 },
  ];
  

  const skillsHtml = skills.map((skill) => {
    return `
      <div style="display: flex; flex-direction: column; align-items: center; margin: 16px;">
        <div style="position: relative;">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" style="fill: none; stroke: #ddd; stroke-width: 12px;" />
            <circle cx="60" cy="60" r="54" style="fill: none; stroke: #4CAF50; 8-width: 12px; stroke-dasharray: 339.292; stroke-dashoffset: ${339.292 - (339.292 * skill.percentage) / 100};" transform="rotate(-90 60 60)" />
          </svg>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; font-weight: bold;">
            ${skill.percentage}%
          </div>
        </div>
        <p style="font-size: 18px; margin-top: 8px;">${skill.name}</p>
      </div>
    `;
  }).join('');
  

   `
    <section style="text-align: center; padding: 48px;">
    >
      <div style="display: flex; flex-wrap: wrap; justify-content: center;">
        ${skillsHtml}
      </div>
    </section>
  `;}
 export default skillsSection