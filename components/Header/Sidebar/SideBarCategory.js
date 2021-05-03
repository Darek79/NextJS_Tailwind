import Link from "next/link";
export default function SidebarCategory({
  categories = ["MEN", "WOMAN", "KIDS"],
}) {
  return (
    <section className='flex'>
      {categories.map((el) => (
        <Link key={el} href='#'>
          <p className='w-full p-2 bg-gray-100 text-center border border-gray-300'>
            {el}
          </p>
        </Link>
      ))}
    </section>
  );
}
