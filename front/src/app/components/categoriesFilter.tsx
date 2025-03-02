"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ICategory } from "../types";

interface Props {
  categories: ICategory[];
}

const CategoriesFilter: React.FC<Props> = ({ categories }) => {
  console.log("Categories recibidas:", categories);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [currentCategory, setCurrentCategory] = useState<number | null>(
    categoryId ? Number(categoryId) : null
  );

  const generatenewUrl = (
    pathname: string,
    query: Record<string, string | boolean | number>
  ): string => {
    const url = new URL(window.location.origin + pathname);
    Object.keys(query).forEach((key) => {
      url.searchParams.set(key, String(query[key]));
    });
    return url.toString();
  };
  const resetFilter = () => {
    return router.replace(generatenewUrl(pathname, {}), {});
  };

  useEffect(() => {
    if (currentCategory !== null && currentCategory !== undefined) {
      router.replace(generatenewUrl(pathname, { categoryId: currentCategory }));
    }
  }, [currentCategory, pathname, router]);

  return (
    <div className="bg-blackP rounded-lg shadow-md p-4 space-y-4 font-poppins">
      <button
        onClick={resetFilter}
        className="w-full py-2 bg-blackP text-white rounded-lg hover:bg-blueP transition-colors"
      >
        Reset Filtros
      </button>
      <div className="space-y-2">
        {categories?.map((cat) => (
          <span
            key={cat.id}
            onClick={() => {
              setCurrentCategory(cat.id);
            }}
            className={`block py-1 px-4 rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out 
            ${
              cat.id === currentCategory
                ? "bg-blueP text-white"
                : "bg-blackP text-foreground border border-background"
            } 
            hover:bg-blueP hover:text-white`}
            style={{
              fontWeight: cat.id === currentCategory ? "bold" : "normal",
            }}
          >
            {cat.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default CategoriesFilter;
