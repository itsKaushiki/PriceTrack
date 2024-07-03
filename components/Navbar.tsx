import Image from 'next/image';
import Link from 'next/link';

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="nav container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/assets/icons/logo.svg"
            width={32}
            height={32}
            alt="logo"
          />

          <p className="nav-logo text-xl font-bold text-gray-800">
            Price<span className="text-primary">Track</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain cursor-pointer"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
