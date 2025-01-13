"use client";

import listOfCategories from "@/data/listOfCategories";
import { CategoryCard } from "@/components";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const func = async () => {
      const listing = {
        title: "Antique Canon Camera",
        images: [
          "https://summerschool.lsr7.org/wp-content/uploads/sites/13/2021/12/product-g.jpg",
        ],
        price: 160,
        zip: 84103,
        timePosted: "04/26/2024",
        description: "Doesn't work, but body is in mint condition.",
        condition: "good",
        category: "Antiques",
        categoryLink: "/for-sale?subcategory=Antiques",
        contactId: 234567,
      };
      const docRef = await addDoc(collection(db, "listing"), listing);
      console.log(docRef);
    };
    func();
  }, []);
  return (
    <div className="text-center flex flex-col gap-4 mt-4">
      <h3>Select a category</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {listOfCategories.map((category, index) => (
          <CategoryCard key={category.category + index} {...category} />
        ))}
      </div>
    </div>
  );
}
