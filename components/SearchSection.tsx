import { Search } from "lucide-react";

const SearchSection = ({onSearchInput} : any) => {
  return (
    <div className="p-10 flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-bold">Browse your Fitness Goals.</h2>
      <p>Start Hustling today.</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white mt-5 w-[35%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
