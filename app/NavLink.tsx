import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/new/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-sky-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
