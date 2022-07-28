export default function Footer() {
  return (
    <>
      <footer className="bg-black py-6 lg:py-8 xl:py-10">
        <div className="ml-5  md:flex md:items-center md:justify-between container sm-down:max-w-none">
          <div>
            <span class="flex items-center space-x-4 text-[color:var(--hue-1000)]">
              <img
                className="w-[70px] rounded-full"
                src="https://github.com/Wth10.png"
                alt="logo"
              />
              <span class="text-2xl font-bold font-display">DEV.MOVIE</span>
            </span>
            <div className="mt-10 space-y-10 md:space-y-0 md:mt-6">
              <p className="text-base">
                Maker by
                <a
                  target="_blank"
                  href="https://github.com/Wth10"
                  className="ml-1 italic text-blue-400 hover:text-indigo-500"
                >
                  Wth10
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="mt-[6em] text-center">© 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
}
