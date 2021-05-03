import Link from "next/link";
export const Logo = () => {
  return (
    <div className='h-full w-full flex-grow px-2 flex'>
      <Link href='/'>
        <div className='bg-logo bg-no-repeat bg-center m-auto bg-contain max-h-full h-3/4 w-full' />
      </Link>
    </div>
  );
};
