import Link from "next/link";
import Image from "next/image";
export default function SidebarItem({
  categories = [
    "Get the Look",
    "Clothing",
    "Shoes",
    "Sports",
    "Accessories",
    "Beauty",
    "Designer",
    "Brands",
    "Sale %",
    "Pre-owned",
  ],
}) {
  return (
    <div className='grid grid-cols-2 gap-4 h-auto my-8'>
      {categories.map((el) => {
        return (
          <Link key={el} href='#'>
            <section className='w-full'>
              <div className='w-full'>
                <Image
                  alt='Picture of the author'
                  width={250}
                  height={150}
                  src='https://via.placeholder.com/250x150/ffcc66'
                />
              </div>
              <p className='ml-2'>{el}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
}
