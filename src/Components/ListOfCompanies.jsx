import React, { useState } from 'react'
import Navbar from './Navbar';
import DashboardImg from '../assets/DashboadImg.png';
import HexImg from '../assets/HexImg.png';
import AIChat from '../assets/AIChat.png';
import filterIcon from '../assets/filterIcon.png';
import uploadIcon from '../assets/uploadIcon.png';
import searchIcon from '../assets/searchIcon.png';
import greenArrow from '../assets/greenArrow.png';
import { CompanyData } from './Data';

const ListOfCompanies = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = CompanyData.filter((elem) =>
        elem.CompanyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const rangeStart = indexOfFirstItem + 1;
    const rangeEnd = Math.min(indexOfLastItem, filteredData.length)

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const getPageNumbers = () => {
        let pages = [];

        if (currentPage === 1) {
            pages = [1, 2];
        } else {
            pages = [currentPage - 1, currentPage];
        }

        pages = pages.filter((p) => p <= totalPages);

        return pages;
    };

    return (
        <div className='flex'>
            <Navbar />
            <div>
                <div className='flex justify-between items-center lg:w-[1300px] 2xl:w-[1420px] border-y border-gray-300'>
                    <div className='flex items-center gap-4'>
                        <img src={DashboardImg} alt='HexImg' />
                        <div className='text-lg font-bold'>List of Companies</div>
                        <select className='bg-white border border-gray-500 rounded-md text-xs text-gray-700'>
                            <option>FY(2024-2025)</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={HexImg} alt='HexImg' />
                            <div >Quben Infra</div>
                        </div>
                        <img src={AIChat} alt='AIChat' className='h-10' />
                    </div>
                </div>

                <div className='flex justify-between items-center lg:w-[1300px] 2xl:w-[1420px] p-4'>
                    <div className='flex items-center gap-4'>
                        <div className="relative w-full">
                            <img
                                src={searchIcon}
                                alt="searchIcon"
                                className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                            />
                            <input
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                type="text"
                                placeholder="Search Companies"
                                className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>

                        <img src={filterIcon} alt='filterIcon' className='h-10' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 border border-blue-300 rounded-md p-1'>
                            <img src={uploadIcon} alt='uploadIcon' className='h-4' />
                            <div className='text-blue-400'>Export</div>
                        </div>
                        <div className='flex items-center gap-2 border border-blue-300 rounded-md p-1'>
                            <div className='text-blue-400'>+</div>
                            <div className='text-blue-400'>Add Company</div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center lg:w-[1300px] 2xl:w-[1420px]'>
                    <div></div>
                    <div className="flex items-center gap-2">
                        <span className="self-center">
                            <span> {rangeStart}–{rangeEnd}</span>  of {filteredData.length}
                        </span>
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="p-1"
                        >
                            {`< Previous`}
                        </button>


                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => handleClick(page)}
                                className={`px-3 py-1 rounded-lg ${page === currentPage
                                    ? "bg-gray-200 hover:bg-gray-300"
                                    : "border border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        {getPageNumbers().slice(-1)[0] < totalPages && (
                            <span className="px-2">...</span>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="p-1"
                        >
                            {`Next >`}
                        </button>
                    </div>
                </div>

                <table className='w-full '>
                    <thead>
                        <tr className='border-b border-gray-300 '>
                            <th className='text-gray-700 text-xs text-left font-medium p-4 w-1/5'>Company Name</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4 w-1/6'>CEO/Key Person</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4 w-1/8'>Revenue</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4  '>Profit</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4'>EBITDA</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4 w-1/8'>GrossMargin</th>
                            <th className='text-gray-700 text-xs text-left font-medium p-4'>Key Insight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((elem, ind) => <tr key={ind} className='border-b border-gray-300 '>
                                <td className='flex items-center gap-2 text-xs text-left font-medium p-4'>
                                    <img src={elem.img} alt='img' />
                                    <div>{elem.CompanyName}</div>
                                </td>
                                <td >
                                    <div className='flex items-center gap-2 text-xs text-left font-medium p-4'>
                                        <img src={elem.Profile} alt='img' />
                                        <div>{elem.name}</div>
                                    </div>
                                </td>
                                <td className='text-xs text-left font-medium p-4'>{elem.Revenue}</td>
                                <td className={`text-xs text-left font-medium p-4 ${elem.isProfit === false ? 'text-red-500' : 'text-green-500'}`}>{elem.Profit}</td>
                                <td className='text-xs text-left font-medium p-4'>{elem.Ebit}</td>
                                {/* <td className='text-xs text-left font-medium p-4'>{elem.GrossMargin}</td> */}
                                <td >
                                    <div className='text-xs text-left font-medium p-4 flex items-center gap-2 '>
                                        <img src={elem.icon} alt='img' className='h-4' />
                                        <div className={`${elem.icon === greenArrow ? 'text-green-500' : 'text-red-500'}`}>{elem.Ebit}</div>
                                    </div>
                                </td>
                                <td className='flex items-center gap-2'>
                                    {elem.KeyInsight.map((itm, ind) => <div className='text-xs text-left font-medium p-4  '>{itm}</div>)}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListOfCompanies