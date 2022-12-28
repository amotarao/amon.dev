import { ArrowIcon } from '../icons/ArrowIcon';

export const Services: React.FC<{
  onView?: (view: string) => void;
}> = ({ onView = () => null }) => {
  return (
    <section className="grid h-full w-full grid-cols-1 grid-rows-1 p-[10%]">
      <div className="self-center">
        <h2 className="mb-16 text-32 font-bold">サービス</h2>
        <ul className="grid grid-cols-1 gap-16">
          {[
            { name: 'ゆくくる', href: 'https://yukukuru.app' },
            { name: 'DBA', href: 'https://dba.amon.dev' },
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
                  <span className="block text-32 leading-none">{item.name}</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-32">
          <li>
            <button className="flex w-max max-w-[100%] gap-16 no-underline" onClick={() => onView('accounts')}>
              <ArrowIcon className="h-32 w-32 rotate-[135deg]" />
              <p className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
                <span className="block font-sans-serif text-32 font-medium leading-none">アカウント</span>
              </p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
