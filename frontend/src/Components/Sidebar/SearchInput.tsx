import { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { ConvoContext } from "../../context/ConvoContext";
import toast from "react-hot-toast";
import useConversation from "../../hooks/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConvo } = useContext(ConvoContext);
  const { conversations } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) return toast.error("min 3 letters required!!!");
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (!conversation) return toast.error("No such User Exists...");
    setSelectedConvo(conversation);
    setSearch("");
  };
  return (
    <>
      <p className="fs-3 text-start pt-1" style={{ height: "44px" }}>
        QuackQuack
      </p>
      <hr />
      <form onSubmit={handleSubmit} className="d-flex items-center mb-3 mt-2">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "150px" }}
        />
        <button className="btn btn-secondary ms-2 rounded-circle pb-2">
          <IoSearchSharp />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
