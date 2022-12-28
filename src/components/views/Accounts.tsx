import { ArrowIcon } from '../icons/ArrowIcon';

export const Accounts: React.FC<{
  onView?: (view: string) => void;
}> = ({ onView = () => null }) => {
  return (
    <section className="grid h-full w-full grid-cols-1 grid-rows-1 p-[10%]">
      <div className="self-center">
        <h2 className="mb-16 text-32 font-bold">アカウント</h2>
        <ul className="grid grid-cols-1 gap-16">
          {[
            { service: 'Twitter', screenName: '@amotarao', href: 'https://twitter.com/amotarao' },
            { service: 'GitHub', screenName: '@amotarao', href: 'https://github.com/amotarao' },
            { service: 'Instagram', screenName: '@amon_dayoo', href: 'https://www.instagram.com/amon_dayoo/' },
            { service: 'Zenn', screenName: 'amon', href: 'https://zenn.dev/amon' },
            { service: 'TravellerAPI', screenName: 'ADDress@amon', href: 'https://traveller-api.amon.dev/a/amon' },
          ].map((item, i) => (
            <li key={i}>
              <a
                className="flex w-max max-w-[100%] gap-16 no-underline"
                href={item.href}
                target="_blank"
                rel="noopener"
              >
                <ArrowIcon className="block h-32 w-32 shrink-0" />
                <p className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
                  <span className="block font-sans-serif text-32 font-medium leading-none">{item.service}</span>
                  <span className="block font-sans-serif text-16 font-medium leading-none">{item.screenName}</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-48">
          <li>
            <button className="flex w-max max-w-[100%] gap-16 no-underline" onClick={() => onView('services')}>
              <ArrowIcon className="h-32 w-32 -rotate-45" />
              <p className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
                <span className="block font-sans-serif text-32 font-medium leading-none">サービス</span>
              </p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
