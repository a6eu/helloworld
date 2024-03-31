import Link from "next/link";

const Companies = () => (
    <div className="w-full h-44 flex justify-center mt-5">
        <div className="w-full flex">
            <div className="w-full flex-wrap flex">
                <div className="w-full h-1/2 flex-wrap flex">
                        <Link className="w-1/6 bg-netapp bg-70% bg-fit bg-no-repeat bg-center rounded cursor-pointer"
                              href={{
                                  pathname: "/brands/netapp"
                              }}>
                        </Link>
                        <Link className="w-1/6 bg-vmware bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                              href={"/brands/vmware"}>
                        </Link>
                        <Link className="w-1/6 bg-citrix bg-70% bg-no-repeat bg-center rounded cursor-pointer"
                              href={"brands/citrix"}>
                        </Link>
                        <Link className="w-1/6 bg-cisco bg-70% bg-no-repeat bg-center rounded cursor-pointer"
                              href={"brands/cisco"}>
                        </Link>
                        <Link className="w-1/6 bg-fortinet bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                              href={"brands/fortinet"}>
                        </Link>
                        <Link className="w-1/6 bg-newlett bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                              href={"brands/hewlett"}>
                        </Link>
                </div>
                <div className="w-full h-1/2 flex flex-wrap ">
                    <Link className="w-1/6 bg-veeam bg-70% bg-fit bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/veeam"}>
                    </Link>
                    <Link className="w-1/6 bg-IBM bg-50% bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/ibm"}>
                    </Link>
                    <Link className="w-1/6 bg-hp bg-50% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/hp"}>
                    </Link>
                    <Link className="w-1/6 bg-microsoft bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/microsoft"}>
                    </Link>
                    <Link className="w-1/6 bg-lifeison bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/lifeison"}>
                    </Link>
                    <Link className="w-1/6 bg-grandstream bg-70% bg-fit  bg-no-repeat bg-center rounded cursor-pointer"
                          href={"brands/grandstream"}>
                    </Link>
                </div>
            </div>
        </div>
    </div>);

export default Companies;
