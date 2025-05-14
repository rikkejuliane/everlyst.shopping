interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="flex flex-row items-end">
    <label className="font-(family-name:--font-afacad) text-black font-medium text-base underline underline-offset-[5px] decoration-2">Search:</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=""
      className="w-[100px] sm:w-full border-0 border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-base placeholder:font-(family-name:--font-afacad) pl-2"
    />
  </div>
);

export default SearchBar;
