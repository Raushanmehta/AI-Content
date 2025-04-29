import React from 'react';
import CountUp from 'react-countup';

const CounterUser: React.FC = () => {
  const stats = [
    { title: 'Downloads', value: 2700, suffix: 'K', icon: 'download' },
    { title: 'Users', value: 1300, suffix: 'K', icon: 'users' },
    { title: 'Files', value: 74, suffix: '', icon: 'files' },
    { title: 'Places', value: 46, suffix: '', icon: 'shield' },
  ];

  const renderIcon = (icon: string) => {
    const baseStyle = "text-[#FF9400] w-12 h-12 mb-3 inline-block";
    switch (icon) {
      case 'download':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9" />
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
          </svg>
        );
      case 'users':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
        );
      case 'files':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6" />
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
          </svg>
        );
      case 'shield':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
      <div className="containerde px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat) => (
            <div key={stat.title} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="counter-border px-4 py-6 rounded-lg">
                {renderIcon(stat.icon)}
                <h2 className="title-font font-bold text-3xl text-white">
                  <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />
                </h2>
                <p className="leading-relaxed">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterUser;
