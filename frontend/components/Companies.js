import Link from "next/link";

const Companies = () => (
    <div className="w-full h-44 pl-30 pr-30  flex justify-center mt-5">
        <div className="w-full flex">
            <div className="w-full h-44 ">
                <div className="w-full h-1/2 flex ">
                    <Link className="w-1/6  bg-netapp bg-fit bg-no-repeat bg-center rounded cursor-pointer" href={"/brands/netapp"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-vmware bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"/brands/vmware"}>
                        <div ></div>
                    </Link>
                    <Link  className="w-1/6  bg-citrix bg-50%  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/citrix"}>
                        <div></div>
                    </Link>
                    <Link className="w-1/6  bg-cisco bg-50% bg-no-repeat bg-center rounded cursor-pointer" href={"brands/cisco"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-fortinet bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/fortinet"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-newlett bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/newlett"}>
                        <div ></div>
                    </Link>
                </div>
                <div className="w-full h-1/2 flex ">
                    <Link className="w-1/6  bg-veeam bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/veeam"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-IBM bg-50%  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/ibm"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-hp bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/hp"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-microsoft bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/microsoft"}>
                        <div
                            ></div>
                    </Link>
                    <Link className="w-1/6  bg-lifeison bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/lifeison"}>
                        <div ></div>
                    </Link>
                    <Link className="w-1/6  bg-grandstream bg-fit  bg-no-repeat bg-center rounded cursor-pointer" href={"brands/grandstream"}>
                        <div
                            ></div>
                    </Link>
                </div>
                <div></div>
            </div>


        </div>
    </div>
);   

export default Companies;