import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { update } from "lodash";
import { setPath } from "@/slices/breadcrumbSlice";

const Path = () => {
  const path = useSelector((state) => state.breadcrumb.path);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(path, "PATH");
  }, [path]);

  if (!Array.isArray(path)) {
    return <></>;
  }

  const handleThePath = (index) => {
    if (path.length - 1 !== index) {
      const updatedPath = path.slice(0, index + 1);
      console.log("Path after:", updatedPath);
      dispatch(setPath(updatedPath));
    }
  };
  
  
  return (
    <div className="flex align-middle mt-4">
      {path.map((element, index) => (
        <div key={index} className="flex">
           <Link href={`/${element}`} className="text-[#1075B2] cursor-pointer hover:underline" onClick={() => handleThePath(index)}>
            {element}
          </Link>
          {path.length - 1 !== index && <h2 className="text-[#1075B2] text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2>}
        </div>
      ))}
    </div>
  );
};

export default Path;
