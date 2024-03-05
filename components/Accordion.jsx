"use client";
import React, { useState } from "react";
import { ACCORDION } from "@/constant/data";
import { Collapse } from "react-collapse";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

const Accordion = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      <div className="pt-6 max-w-[800px]">
        {ACCORDION.map((item, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ open, toggle, question, answer }) => {
  return (
    <div>
      <div
        onClick={toggle}
        className={`p-3 medium-16 flex items-center gap-x-4 cursor-pointer ring-1 ring-slate-900/10 bg-white transition-all duration-300 mb-2 ${
          open ? "!bg-tertiary text-white" : ""
        }`}
      >
        <div>{open ? <FaLockOpen /> : <FaLock />}</div>
        <h4>{question}</h4>
      </div>
      <div className="mb-2">
        <Collapse isOpened={open}>
          <p className="py-3 px-6 ring-1 ring-slate-900/10 bg-white">
            {answer}
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
