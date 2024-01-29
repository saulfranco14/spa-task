import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <Link
        className="flex items-center justify-center"
        href="https://github.com/saulfranco14"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desarrollado por Saúl Franco
        <Image
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          width={48}
          height={48}
          alt="GitHub Logo"
        />
      </Link>
    </footer>
  );
};

export default Footer;
