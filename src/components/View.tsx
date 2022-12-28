import classNames from 'classnames';
import { useEffect, useState } from 'react';

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
      children: (
        <section className="grid h-full w-full grid-cols-1 grid-rows-1 p-[10%]">
          <div className="self-center">
            <h1 className="flex items-baseline gap-8 self-center">
              <span className="text-48 leading-none">あもん</span>
              <span className="text-32 leading-none">@amon</span>
            </h1>
          </div>
        </section>
      ),
    },
    {
      x: 20,
      y: 100,
      children: (
        <section className="grid h-full w-full grid-cols-1 grid-rows-1 p-[10%]">
          <div className="self-center">
            <h2 className="mb-24 text-32 font-bold">アカウント</h2>
            <ul className="grid grid-cols-1 gap-16">
              {[
                { service: 'Twitter', screenName: '@amotarao', href: 'https://twitter.com/amotarao' },
                { service: 'GitHub', screenName: '@amotarao', href: 'https://github.com/amotarao' },
                { service: 'Instagram', screenName: '@amon_dayoo', href: 'https://www.instagram.com/amon_dayoo/' },
                { service: 'Zenn', screenName: 'amon', href: 'https://zenn.dev/amon' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    className="flex w-max items-center gap-16 no-underline"
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <svg className="block h-32 w-32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M63.1127 32.4558L57.4558 38.1127L37.6569 57.9117L32 52.2548L48.2548 36H0V28H47.3431L32 12.6569L37.6569 7L57.4558 26.799L63.1127 32.4558Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="flex items-baseline gap-8">
                      <span className="block text-32 leading-none">{item.service}</span>
                      <span className="block text-16 leading-none">{item.screenName}</span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ),
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
                  <div className="h-[100dvh] max-h-[200dvmin] w-[100dvw] max-w-[200dvmin]">
                    {cell.children}
                    {DEVELOPMENT_MODE &&
                      cells.map((cell, i) => (
                        <button key={i} className="rounded-full bg-white p-10" onClick={() => setCurrentCell(cell)}>
                          x:{cell.x} y:{cell.y}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
