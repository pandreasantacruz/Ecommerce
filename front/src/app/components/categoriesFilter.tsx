"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ICategory } from "../types";

interface Props {
  categories: ICategory[];
}

const CategoriesFilter: React.FC<Props> = ({ categories }) => {
  //console.log("Categories recibidas:", categories);
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

  useEffect(() => {
    console.log("Current Category:", currentCategory);
    if (currentCategory !== null && currentCategory !== undefined) {
      router.replace(generatenewUrl(pathname, { categoryId: currentCategory }));
    }
  }, [currentCategory, pathname, router]);

  return (
    <div>
      {categories?.map((cat) => (
        <span
          key={cat.id}
          onClick={() => {
            setCurrentCategory(cat.id);
          }}
          style={{
            color: cat.id == currentCategory ? "blue" : "black",
            cursor: "pointer",
          }}
        >
          {cat.name}
        </span>
      ))}
    </div>
  );
};

export default CategoriesFilter;
