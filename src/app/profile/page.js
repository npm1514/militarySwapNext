import Link from "next/link";

export default function Profile() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <h2>Profile</h2>
      <h4>Name: Nick Marucci</h4>
      <h4>Email: npm1514@gmail.com</h4>
      <h4>Phone: 7164502362</h4>
      <h2>My Listings</h2>
      {[0, 1, 2].map((value, index) => (
        <Link key={index} href={`/listing/12345`} className="text-blue underline">
          <h4>Listing {index}</h4>
        </Link>
      ))}
    </div>
  );
}
