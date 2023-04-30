'use client';

import { Children, HTMLAttributes, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

import { Bar } from '@/components';

type TabsContextProps = {
  tab: number | string;
  tabs: Array<number | string>;
  register: (id: number | string) => void;
  select: (id: number | string) => void;
};

const TabsContext = createContext({} as TabsContextProps);

const useTabs = () => useContext(TabsContext);

export const Tabs = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const [tab, setTab] = useState<number | string>('');
  const [tabs, setTabs] = useState<Array<number | string>>([]);

  const register = (id: number | string) => {
    setTabs((prev) => [...prev, id]);
  }

  const select = (id: number | string) => {
    setTab(id);
  }

  useEffect(() => {
    setTab(tabs[0]);
  }, [tabs]);

  return (
    <TabsContext.Provider value={{ tab, tabs, register, select }}>
      <div className="flex flex-col">
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export const TabsItems = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const elements = Children.toArray(children)?.reduce((acc: ReactNode[], child, idx) => {
    return [...acc, child, <Bar key={idx} className="w-auto h-5 text-lime-500" />];
  }, []).slice(0, -1);

  return (
    <div className={clsx('flex items-center justify-evenly relative z-10', className)} {...props}>
      {elements}
    </div>
  )
};

export const TabsPanels = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} />
  )
}

export const TabPanel = ({ id, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { tab } = useTabs();
  return (
    <div className={clsx(className, { 'hidden': tab !== id })} {...props} />
  )
}

export const TabItem = ({ children, id }: { children: ReactNode, id: number | string }) => {
  const { tab, register, select } = useTabs();

  useEffect(() => {
    register(id);
  }, []);

  return (
    <button
      className={clsx('transition relative p-3 hover:text-lime-500', {
        'text-lime-500': tab === id,
        'text-white': tab !== id,
      })}
      onClick={() => select(id)}
    >
      {children}
      {tab === id && (
        <motion.div layoutId="jobs" className="absolute left-0 right-0 h-px -bottom-px bg-gradient-to-r from-lime-500/0 via-lime-500 to-lime-500/0" />
      )}
    </button>
  )
}