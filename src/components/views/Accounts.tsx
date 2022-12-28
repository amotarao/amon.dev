export const Accounts: React.FC = () => {
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
  );
};
