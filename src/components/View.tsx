import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Accounts } from './views/Accounts';
import { Top } from './views/Top';

const DEVELOPMENT_MODE = false;

export type ViewProps = {
  className?: string;
};

export const View: React.FC<ViewProps> = ({ className }) => {
  const cells: {
    x: number;
    y: number;
    rotate?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }[] = [
    {
      x: 0,
      y: 100,
      children: <Top />,
    },
    {
      x: 20,
      y: 100,
      children: <Accounts />,
    },
    {
      x: 25,
      y: 75,
      rotate: 10,
    },
    {
      x: 25,
      y: 125,
      rotate: -10,
    },
  ];
  const [currentCell, setCurrentCell] = useState(cells[0]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentCell(cells[1]);
    }, 1500);
  }, []);

  return (
    <div
      className={classNames('h-[100dvh] w-[100dvw] overflow-hidden bg-[#FFF8E1]', className)}
      style={
        {
          '--cell-size': '10vmin',
          '--col-count': '200',
          '--row-count': '200',

          '--rotate': `${currentCell.rotate || 0}deg`,
          '--x': currentCell.x,
          '--y': currentCell.y,
        } as React.CSSProperties
      }
    >
      {/* デバッグで全体を把握する用 */}
      <div
        className="h-full w-full outline outline-8 outline-red-500"
        style={
          DEVELOPMENT_MODE
            ? {
                transform: 'scale(0.2)',
              }
            : undefined
        }
      >
        <div
          className="h-full w-full"
          style={
            {
              transform:
                'translateX(calc(var(--x) * var(--cell-size) * -1)) translateY(calc(var(--y) * var(--cell-size) * -1))',
              transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.6, 1)',
            } as React.CSSProperties
          }
        >
          <div
            className="h-full w-full"
            style={
              {
                transformOrigin: 'calc(var(--x) * var(--cell-size)) calc(var(--y) * var(--cell-size))',
                transform: 'rotate(calc(var(--rotate) * -1))',
                transition:
                  'transform 1.5s cubic-bezier(0.4, 0, 0.6, 1), transform-origin 1.5s cubic-bezier(0.4, 0, 0.6, 1)',
              } as React.CSSProperties
            }
          >
            <div
              className={classNames(
                'h-[calc(var(--cell-size) * var(--row-count))] w-[calc(var(--cell-size) * var(--col-count))] grid grid-cols-[repeat(var(--col-count),var(--cell-size))] grid-rows-[repeat(var(--row-count),var(--cell-size))]',
                className
              )}
            >
              <svg
                className="col-span-full col-start-[1] row-span-full row-start-[1]"
                viewBox="0 0 2000 2000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              {cells.map((cell, i) => (
                <div
                  key={i}
                  className="col-start-[1] row-start-[1]"
                  style={{
                    gridColumnStart: cell.x + 1,
                    gridRowStart: cell.y + 1,
                    transformOrigin: 'top left',
                    transform: `rotate(${cell.rotate || 0}deg)`,
                    ...cell.style,
                  }}
                >
                  <div className="h-[100dvh] max-h-[200dvmin] w-[100dvw] max-w-[200dvmin]">{cell.children}</div>
                </div>
              ))}
              {DEVELOPMENT_MODE &&
                cells.map((cell, i) => (
                  <button key={i} className="rounded-full bg-white p-10" onClick={() => setCurrentCell(cell)}>
                    x:{cell.x} y:{cell.y}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
