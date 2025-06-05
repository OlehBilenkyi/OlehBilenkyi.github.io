import React from "react";
import { resume } from "../data/resume";

export function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Резюме</h2>

        <div className="md:flex md:space-x-12">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Опыт работы</h3>
            {resume.experience.map((item, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-xl font-semibold">{item.company}</h4>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Образование</h3>
            {resume.education.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="text-xl font-semibold">{item.institution}</h4>
                <p className="text-sm text-gray-500">{item.period}</p>
                <p>{item.degree}</p>
              </div>
            ))}
            <h3 className="text-2xl font-semibold mt-6 mb-4">Навыки</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-white">
              {resume.skills.map((skill, idx) => (
                <li key={idx} className="bg-blue-600 px-3 py-1 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
