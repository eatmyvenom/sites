import '#/styles/ui/InfoContainer.css';
import React from 'react';

export interface InfoContainerProps {
  rows: number;
  columns: number;
  children: React.ReactNode;
}

function createAuto(n: number) {
  let s = '';
  for (let i = 0; i < n; i++) {
    s += 'auto ';
  }

  return s.trim();
}

export default function InfoContainer({
  rows,
  columns,
  children,
}: InfoContainerProps) {
  return (
    <div
      className="infoContainer"
      style={{
        gridTemplateRows: createAuto(rows),
        gridTemplateColumns: createAuto(columns),
      }}
    >
      {children}
    </div>
  );
}
