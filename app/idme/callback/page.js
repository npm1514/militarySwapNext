"use client";
import { redirect } from 'next/navigation'
import listOfCategories from "../../data/listOfCategories";
import { CategoryCard } from "../../components";
import { useEffect } from "react";

const IdMeReturnPage = () => {
  useEffect(() => {
   redirect("/");
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
};

export default IdMeReturnPage;
