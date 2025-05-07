interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown =({ value, onChange}: SortDropdownProps) => (
  <div className="flex flex-row items-center">
    <label className="font-(family-name:--font-afacad) text-black font-medium text-base mb-1 underline underline-offset-[7.8px] decoration-2">
      Sort:
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-0 border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 text-black text-base font-(family-name:--font-afacad) pl-2"
    >
      <option value="relevance">Relevance</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="az">Title: A–Z</option>
      <option value="za">Title: Z–A</option>
    </select>
  </div>
);

export default SortDropdown;