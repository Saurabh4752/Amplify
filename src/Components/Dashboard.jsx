import React from 'react';
import DashboardImg from '../assets/DashboadImg.png';
import HexImg from '../assets/HexImg.png';
import AIChat from '../assets/AIChat.png';
import greenArrow from '../assets/greenArrow.png';
import redArrow from '../assets/redArrow.png';
import Entity from '../assets/Entity.png';
import AI1 from '../assets/AI1.png';
import AI2 from '../assets/AI2.png';
import resize1 from '../assets/resize1.png';
import resize2 from '../assets/resize2.png';
import Bargraph from './Bargraph';
import LineChartGraph from './LineChartGraph';
import TableData from './Data';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div>
                <div className='flex justify-between items-center w-[1420px] border-y border-gray-300'>
                    <div className='flex items-center gap-4'>
                        <img src={DashboardImg} alt='HexImg' />
                        <div className='text-lg font-bold'>Dashboard</div>
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

                <div className='flex gap-4 justify-between items-center w-[1420px] p-4' >
                    <div className='border border-gray-300 rounded-md w-1/4 p-4'>
                        <div className='text-md text-gray-700'>Consolidated Revenue</div>
                        <div className='text-xl font-bold'>€24.5B</div>
                        <div className='flex item-center gap-1'>
                            <img src={greenArrow} alt='greenArrow' className='h-4' />
                            <div className='text-xs text-green-700 mt-[1px]'>+12.5%</div>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-md w-1/4 p-4'>
                        <div className='text-md text-gray-700'>Net Profit</div>
                        <div className='text-xl font-bold'>€40.5M</div>
                        <div className='flex item-center gap-1'>
                            <img src={greenArrow} alt='greenArrow' className='h-4' />
                            <div className='text-xs mt-[1px] text-green-700'>+8.3% YoY</div>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-md w-1/4 p-4'>
                        <div className='text-md text-gray-700'>EBITDA Margin</div>
                        <div className='text-xl font-bold'>14.6%</div>
                        <div className='flex item-center gap-1'>
                            <img src={redArrow} alt='redArrow' className='h-4' />
                            <div className='text-xs mt-[1px] text-red-700'>-3.3% YoY</div>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-md w-1/4 p-4'>
                        <div className='text-md text-gray-700'>Working Capital</div>
                        <div className='text-xl font-bold'>€25.7B</div>
                        <div className='flex item-center gap-1'>
                            <img src={redArrow} alt='redArrow' className='h-4' />
                            <div className='text-xs mt-[1px] text-red-700'>-3.6% YoY</div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 justify-between items-center w-[1420px] px-4'>
                    <LineChartGraph />
                    <Bargraph />
                </div>
                <div className='flex'>
                    <div className=' w-[990px] border border-gray-300 mt-8 p-4 mx-4 rounded-md'>
                        <div className='flex justify-between items-center w-full my-2'>
                            <div className='flex gap-2 items-center '>
                                <img src={Entity} alt='img' />
                                <div className='font-bold text-md'>Entity Wise Performance</div>
                            </div>
                            <img src={resize1} alt='img' className='h-8' />
                        </div>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-gray-300 '>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>Company Name</th>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>Revenue</th>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>Net Profit</th>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>EBITDA</th>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>Cash Flow(EM)</th>
                                    <th className='text-gray-700 text-xs text-left font-medium p-4'>WC Cycle(days)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    TableData.map((elem, ind) => <tr key={ind} className='border-b border-gray-300 '>
                                        <td className='flex items-center gap-2 text-xs text-left font-medium p-4'>
                                            <img src={elem.img} alt='img' />
                                            <div>{elem.name}</div>
                                        </td>
                                        <td className='text-xs text-left font-medium p-4'>{elem.revenue}</td>
                                        <td className='text-xs text-left font-medium p-4'>{elem.netProfit}</td>
                                        <td className='text-xs text-left font-medium p-4 flex items-center gap-2 '>
                                            <img src={elem.icon} alt='img' className='h-4' />
                                            <div className={`${elem.icon === greenArrow ? 'text-green-700' : 'text-red-700'}`}>{elem.Ebit}</div>
                                        </td>
                                        <td className='text-xs text-left font-medium p-4'>{elem.Cash}</td>
                                        <td className='text-xs text-left font-medium p-4'>{elem.WC}</td>

                                    </tr>)
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className='w-[400px] bg-orange-50 border border-gray-300 mt-8 p-4 rounded-md'>
                        <div >
                            <div className='flex justify-between items-center w-full my-2'>
                                <div className='flex gap-2 items-center '>
                                    <img src={AI1} alt='img' className='h-6' />
                                    <div className='font-bold text-xl'>Insights</div>
                                </div>
                                <img src={resize2} alt='img' className='h-8' />
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <div className='mt-1'>
                                    <img src={AI2} alt='img' className='h-6 w-12' />
                                </div>
                                <div>
                                    <div className='text-md text-gray-700 font-medium'>Monthly Variance Summaries</div>
                                    <div className='text-sm text-gray-700'>
                                        <span className='text-orange-600 font-medium'>Helix Digital Innovations</span> reported an 8% decline in profit this month, primarily driven by increased logistics expenses.
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='mt-1'>
                                    <img src={AI2} alt='img' className='h-6 w-12' />
                                </div>
                                <div>
                                    <div className='text-md text-gray-700 font-medium'>Monthly Variance Summaries</div>
                                    <div className='text-sm text-gray-700'>
                                        <span className='text-orange-600 font-medium'>Helix Digital Innovations</span> reported an 8% decline in profit this month, primarily driven by increased logistics expenses.
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='mt-1'>
                                    <img src={AI2} alt='img' className='h-6 w-12' />
                                </div>
                                <div>
                                    <div className='text-md text-gray-700 font-medium'>Monthly Variance Summaries</div>
                                    <div className='text-sm text-gray-700'>
                                        <span className='text-orange-600 font-medium'>Helix Digital Innovations</span> reported an 8% decline in profit this month, primarily driven by increased logistics expenses.
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='mt-1'>
                                    <img src={AI2} alt='img' className='h-6 w-12' />
                                </div>
                                <div>
                                    <div className='text-md text-gray-700 font-medium'>Monthly Variance Summaries</div>
                                    <div className='text-sm text-gray-700'>
                                        <span className='text-orange-600 font-medium'>Helix Digital Innovations</span> reported an 8% decline in profit this month, primarily driven by increased logistics expenses.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;