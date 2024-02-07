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
    params.set("search", e.target.value);
    if(e.target.value){
    replace(`${pathname}?${params}`);
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
