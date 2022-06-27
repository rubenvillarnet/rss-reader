import StyledSearch from "./Search.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

type Inputs = {
  searchQuery: string;
};

interface SearchProps {
  handleSearch: (arg0: string | null) => void;
}

export default function Search({ handleSearch }: SearchProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleSearch(data.searchQuery);
  };

  const clearSearch = () => {
    reset({ searchQuery: "" });
    handleSearch(null);
  };

  console.log(watch("searchQuery"));

  return (
    <StyledSearch onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <input {...register("searchQuery")} />
        <FaSearch className="search" />
        {watch("searchQuery") && <FaTimes className="clear" onClick={clearSearch} />}
      </div>
      <button type="submit">Search</button>
      {errors.searchQuery && <span>This field is required</span>}
    </StyledSearch>
  );
}
