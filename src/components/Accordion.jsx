import React, { useMemo, useState, useId, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const itemBase =
  "rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow";
const btnBase =
  "w-full flex items-center gap-3 text-left p-4 md:p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl";
const titleBase = "text-slate-800 text-base md:text-lg font-medium";
const iconBase =
  "ml-auto shrink-0 transition-transform duration-200 group-aria-expanded:rotate-180";
const panelBase = "px-4 pb-4 md:px-5 md:pb-5 text-slate-600 leading-relaxed";

function useFocusList(count) {
  const refs = useRef([]);
  useEffect(() => {
    refs.current = refs.current.slice(0, count);
  }, [count]);
  return refs;
}

function Accordion({
  items,
  type = "single", // 'single' | 'multiple'
  defaultOpen = type === "single" ? 0 : [], // number | number[]
  className = "",
}) {
  const isMultiple = type === "multiple";
  const initial = useMemo(() => {
    if (isMultiple) {
      return new Set(Array.isArray(defaultOpen) ? defaultOpen : []);
    }
    return new Set(
      typeof defaultOpen === "number" && defaultOpen >= 0 ? [defaultOpen] : []
    );
  }, [defaultOpen, isMultiple]);

  const [openSet, setOpenSet] = useState(() => initial);
  const focusRefs = useFocusList(items.length);

  const toggle = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(idx);
      if (isMultiple) {
        if (isOpen) next.delete(idx);
        else next.add(idx);
      } else {
        next.clear();
        if (!isOpen) next.add(idx);
      }
      return next;
    });
  };

  const onKeyDown = (e, idx) => {
    const key = e.key;
    if (key === " " || key === "Enter") {
      e.preventDefault();
      toggle(idx);
    } else if (key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1) % items.length;
      focusRefs.current[next]?.focus();
    } else if (key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + items.length) % items.length;
      focusRefs.current[prev]?.focus();
    } else if (key === "Home") {
      e.preventDefault();
      focusRefs.current[0]?.focus();
    } else if (key === "End") {
      e.preventDefault();
      focusRefs.current[items.length - 1]?.focus();
    }
  };

  return (
    <div className={` md:max-w-2xl mx-auto `}>
      <div className="grid gap-3 md:gap-4">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            index={idx}
            title={item.title}
            content={item.content}
            isOpen={openSet.has(idx)}
            onToggle={() => toggle(idx)}
            onKeyDown={(e) => onKeyDown(e, idx)}
            focusRef={(el) => (focusRefs.current[idx] = el)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ index, title, content, isOpen, onToggle, onKeyDown, focusRef }) {
  const panelId = useId();
  const buttonId = `${panelId}-button`;

  return (
    <div className={`${itemBase} group`}>
      <button
        id={buttonId}
        ref={focusRef}
        className={btnBase}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={onKeyDown}
      >
        <span className={titleBase}>{title}</span>
        <ChevronDown className={iconBase} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={panelBase}>{typeof content === "function" ? content() : content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Demo component ---
export default function App() {
  const items = [
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind is a utility-first CSS framework that lets you build modern UIs quickly using composable classes.",
    },
    {
      title: "Can multiple items stay open?",
      content:
        () => (
          <div>
            <p className="mb-3">
              Yes! Change the <code className="px-1 py-0.5 rounded bg-slate-100">type</code> prop to
              <code className="px-1 py-0.5 rounded bg-slate-100 ml-1">\"multiple\"</code>.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Keyboard: ↑/↓ to move, Home/End to jump</li>
              <li>Space/Enter toggles</li>
              <li>Accessible labels & regions</li>
            </ul>
          </div>
        ),
    },
    {
      title: "Is it customizable?",
      content:
        "Absolutely. Tweak the classes or replace the icon/animation to match your design system.",
    },
    {
        title: "Do you provide certificates after course completion?",
        content:
          "Yes, we provide certificates upon successful completion of our courses.",
    },
  ];

  return (
    <div className="h-full rounded-xl md:w-1/2 bg-gradient-to-b from-slate-50 to-white py-10 px-8">
      <div className="mx-auto  text-center md:text-start mb-8">
        <h1 className="text-green-500 text-xl mb-5 font-extralight">Faqs</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
          Frequently asked <span className="text-green-500">questions</span>
        </h1>
        <p className="text-slate-600 mt-2">
          Accessible, animated, and configurable (single or multiple).
        </p>
      </div>
      <Accordion items={items} className="mb-10" />
    </div>
  );
}
