import React from 'react'
import { Button } from '../ui/button'
import { CircleCheckBig } from 'lucide-react'
import { useRouter } from 'next/navigation'

const MonthlyCard = () => {

    const router = useRouter();
  return (
    <div>
         <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10">
            <h3 className="text-xl font-bold text-gray-800">Professional</h3>
            <div className="text-sm text-gray-500">Everything are used Unlimited.</div>
            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white 
            py-1.5 px-3">Most popular</span>
            <div className="mt-5">
              <span className="text-6xl font-bold text-gray-800">$9</span>
              <span className="text-lg font-bold text-gray-800">.99</span>
              <span className="ms-3 text-gray-500">USD / monthly</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
             
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Up to 10 people
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Collect data
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Code extensibility
                  </span>
                </li>
              </ul>
             
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                     <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Custom reports
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                     <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Product support
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                     <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Activity reporting
                  </span>
                </li>
              </ul>
              
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-gray-500">Cancel anytime.</p>
                <p className="text-sm text-gray-500">No card required.</p>
              </div>

              <div className="flex justify-end">
                <Button onClick={()=> router.push('/dashboard/billing')} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">Start Buy now

                </Button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MonthlyCard