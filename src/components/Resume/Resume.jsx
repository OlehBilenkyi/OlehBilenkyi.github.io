import React from "react";
import { resume } from "../../data/resume";

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{skill}</span>
      <span className="text-gray-600">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Резюме</h2>

        <div className="md:flex md:space-x-12">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
              Опыт работы
            </h3>
            {resume.experience.map((item, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-medium">{item.role}</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">@ {item.company}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 mt-12 md:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                Навыки
              </h3>
              {resume.skills.map((skill, i) => (
                <SkillBar key={i} skill={skill.name} level={skill.level} />
              ))}

              <h3 className="text-2xl font-semibold mt-8 mb-4">Образование</h3>
              {resume.education.map((edu, idx) => (
                <div key={idx} className="mb-6">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
