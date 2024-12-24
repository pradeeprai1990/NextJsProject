"use client";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import React, { useState } from 'react'
import LoginModal from "../Model/LoginModal";

export default function Header() {
    let [loginModalStaus, setLoginModalStatus] = useState(false)

    let [megaMenustatus, setMengamenuStatus] = useState(-1)

    let openMegamenu = () => {

    }
    return (
        <header className="grid grid-cols-[52%_auto] shadow-lg items-center relative">
            {
                loginModalStaus && <LoginModal setLoginModalStatus={setLoginModalStatus} />
            }

            <Navbar className="p-0" >
                <Navbar.Brand href="https://flowbite-react.com">
                    <Image

                        src="/images/logo.png"

                        width={180}
                        height={38}
                        alt=""
                        title=""

                    />



                </Navbar.Brand>

                <Navbar.Collapse>
                    <li className=" text-[16px] text-black  py-[20px]" >
                        <a href="#"> Home </a>
                    </li>
                    <li className=" text-[16px] py-[20px] text-black" onMouseEnter={() => setMengamenuStatus(1)} onMouseLeave={() => setMengamenuStatus(-1)}>
                        <a href="#"> Sale </a>


                        {
                            megaMenustatus == 1 &&

                            <div className="w-[100%]  shadow-lg absolute left-0 top-[100%] p-4">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="p-3">
                                        <h3 className="font-bold text-[20px"> Featured</h3>
                                        <ul>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-bold text-[20px"> Featured</h3>
                                        <ul>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-bold text-[20px"> Featured</h3>
                                        <ul>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                        </ul>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-bold text-[20px"> Featured</h3>
                                        <ul>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                            <li className="my-4">Sale</li>
                                            <li className="my-4">New In</li>
                                            <li className="my-4"> Best Sellers</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile_d2ea1390-d13b-4749-bf11-4545bbb42f85_600x.jpg?v=1733503908" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://ca.frankandoak.com/cdn/shop/files/Menu_tile_d2ea1390-d13b-4749-bf11-4545bbb42f85_600x.jpg?v=1733503908" alt="" />
                                    </div>

                                </div>
                            
                            </div>

                        }


                    </li>
                    <li className=" text-[16px] text-black  py-[20px]" onMouseEnter={() => setMengamenuStatus(2)} onMouseLeave={() => setMengamenuStatus(-1)}>Women

                        {megaMenustatus == 2 && <div className="w-[100%] h-[300px] bg-red-500 absolute left-0 top-[100%]"></div>}

                    </li>
                    <li className=" text-[16px] text-black  py-[20px]" onMouseEnter={() => setMengamenuStatus(3)} onMouseLeave={() => setMengamenuStatus(-1)}>Men

                        {megaMenustatus == 3 && <div className="w-[100%] h-[300px] bg-red-500 absolute left-0 top-[100%]"></div>}

                    </li>
                    <li className=" text-[16px] text-black  py-[20px]">The Holiday Shop</li>
                    <li className=" text-[16px] text-black  py-[20px]">About Us</li>
                </Navbar.Collapse>
            </Navbar>
            <div className="flex justify-end pr-[40px] gap-3">
                <CiSearch className="text-2xl font-bold" />
                <FaRegUserCircle onClick={() => setLoginModalStatus(true)} className="text-2xl" />

                <CiHeart className="text-2xl" />

            </div>
        </header>
    )
}
