import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="w-full flex flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <div className="mr-5 hover:text-gray-900">Inicio</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
