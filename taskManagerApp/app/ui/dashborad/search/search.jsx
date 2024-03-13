"use client";

import { MdSearch } from "react-icons/md";
import styles from "@/app/ui/dashborad/search/search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
 const handleSearch = (e) => {
  const params = new URLSearchParams(searchParams);
  const searchValue = e.target.value;

  if (searchValue) {
    // Set the search parameter if there's a value
    params.set("search", searchValue);
    replace(`${pathname}?${params}`);
  } else {
    // Remove the search parameter if the search box is cleared
    params.delete("search");
    replace(`${pathname}${params.toString() ? `?${params}` : ''}`);
  }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
      </div>
    </div>
  );
};

export default Search;
