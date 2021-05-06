import Link from "next/link";
export const Logo = () => {
  return (
    <div className='h-full w-full flex-grow flex xl:w-1/6'>
      <Link href='/'>
        <div className='bg-logo bg-no-repeat bg-left m-auto bg-contain max-h-full h-3/4 w-full' />
      </Link>
    </div>
  );
};
