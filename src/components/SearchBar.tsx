interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="flex flex-row items-center">
    <label className="font-(family-name:--font-afacad) text-black font-medium text-base mb-1 underline underline-offset-[7.8px] decoration-2">Search:</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=""
      className="w-full border-0 border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-base placeholder:font-(family-name:--font-afacad) pl-2"
    />
  </div>
);

export default SearchBar;
