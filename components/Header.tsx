import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center max-sm:flex-col max-sm:gap-2">
      <div className="flex gap-2 items-center p-2 border rounded-md w-1/3">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none bg-transparent"/>
      </div>
      <h2 className="bg-primary p-2 rounded-full text-sm text-white">
        Join Full Membership for just 1k INR per month.
      </h2>
    </div>
  );
};

export default Header;
