export const Formaciones = () => {
  return (
    <section id="formaciones" className="w-full py-20 px-6 sm:px-8 flex justify-center bg-[#FFF9F4]">
      <div className="plans max-w-[1100px] w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#474747] mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-[#656c7c]">No contracts. No surprise fees.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
          {/* Free plan */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center h-full">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold">Free</h2>
              <p className="text-sm text-[#656c7c] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
            </div>
            <div className="text-3xl font-bold text-[#ea4c89] mb-4">$0<span className="text-base font-medium">/ month</span></div>
            <ul className="text-sm space-y-2 mb-6">
              <li>2 links</li>
              <li>Own analytics platform</li>
              <li className="text-[#B1B8C9] line-through">Chat support</li>
              <li className="text-[#B1B8C9] line-through">Mobile application</li>
              <li className="text-[#B1B8C9] line-through">Unlimited users</li>
            </ul>
            <button className="animated-button">
              <span className="circle"></span>
              <svg className="arr-1" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <svg className="arr-2" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <span className="text">Get Started</span>
            </button>
          </div>

          {/* Pro plan */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center border-[3px] border-[#ea4c89] h-full">
            <div className="mb-6 text-center relative">
              <h2 className="text-2xl font-semibold">Pro</h2>
              <div className="absolute top-0 right-0 bg-[#ea4c89] text-white px-2 py-1 text-xs font-bold rounded">Best Value</div>
              <p className="text-sm text-[#656c7c] mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div className="text-3xl font-bold text-[#ea4c89] mb-4">$18<span className="text-base font-medium">/ month</span></div>
            <ul className="text-sm space-y-2 mb-6">
              <li>2 links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li className="text-[#B1B8C9] line-through">Mobile application</li>
              <li className="text-[#B1B8C9] line-through">Unlimited users</li>
            </ul>
            <button className="animated-button">
              <span className="circle"></span>
              <svg className="arr-1" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <svg className="arr-2" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <span className="text">Get Started</span>
            </button>
          </div>

          {/* Enterprise plan */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col items-center h-full">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold">Enterprise</h2>
              <p className="text-sm text-[#656c7c] mt-2">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
            </div>
            <div className="text-3xl font-bold text-[#1769ff] mb-4">Let's Talk</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>2 links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Mobile application</li>
              <li>Unlimited users</li>
              <li>Customize Panel</li>
            </ul>
            <button className="animated-button">
              <span className="circle"></span>
              <svg className="arr-1" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <svg className="arr-2" viewBox="0 0 19 14"><path d="M12.438 0 11 1.438l4.564 4.562H0v2h15.564L11 12.562 12.438 14 19 7.438 12.438 0Z"/></svg>
              <span className="text">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
