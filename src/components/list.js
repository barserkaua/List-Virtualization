import data from "../generated.json";
import { useState, Suspense, lazy, useEffect } from "react";
import { Spinner } from "./spinner";

const Item = lazy(() => import("./Item"));

const List = () => {
  const [choosenUser, setChoosenUser] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(50);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  };

  const fetchMoreListItems = () => {
    setNumberOfItems((prev) => prev + 50);
    setIsFetching(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  return (
    <div className="overflow-y-auto relative">
      <ul className="w-full text-md text-left min-w-[320px]">
        {data.slice(0, numberOfItems).map((item, index) => (
          <li
            onClick={() => setChoosenUser(index)}
            key={index}
            className="cursor-pointer flex items-center group"
          >
            <Suspense fallback={<Spinner />}>
              <Item item={item} index={index} choosenUser={choosenUser} />
            </Suspense>
          </li>
        ))}
        {isFetching && <Spinner />}
      </ul>
    </div>
  );
};

export default List;
