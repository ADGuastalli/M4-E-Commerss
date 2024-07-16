"use client";
import { useState } from "react";
import { IAccordionProps } from "@/interfece/Interface";

const Accordion: React.FC<IAccordionProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item) => (
        <div key={item.id}>
          <h3 id={`accordion-collapse-heading-${item.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 text-xl font-medium rtl:text-right text-white border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-300 hover:text-black hover:shadow-md hover:shadow-white focus:bg-gray-300/70 focus:text-black"
              data-accordion-target={`#accordion-collapse-body-${item.id}`}
              aria-expanded={expandedItem === item.id}
              aria-controls={`accordion-collapse-body-${item.id}`}
              onClick={() => handleToggle(item.id)}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  expandedItem === item.id ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h3>
          <div
            id={`accordion-collapse-body-${item.id}`}
            className={`${expandedItem === item.id ? "" : "hidden"}`}
            aria-labelledby={`accordion-collapse-heading-${item.id}`}
          >
            <div className="p-5 border border-b-1 border-gray-200 bg-slate-200/20">
              <p className="mb-2 text-white">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
