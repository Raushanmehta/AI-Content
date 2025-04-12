import React from 'react'
import { Button } from '../ui/button'
import { CircleCheckBig, CircleX } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FreeCard = () => {
    const router = useRouter();
  return (
    <div>
         <div className="p-4 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10">
            <h3 className="text-xl font-bold text-gray-800">For Free</h3>
            <div className="text-sm text-gray-500">Everything is Limited.</div>

            <div className="mt-5">
              <span className="text-6xl font-bold text-gray-800">$0</span>
              <span className="text-lg font-bold text-gray-800">.00</span>
              <span className="ms-3 text-gray-500">USD / monthly</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
             
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                  </span>
                  <span className="text-gray-800">
                    Up to 10000 Words
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
                  <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500">
                  <CircleX/>
                  </span>
                  <span className="text-gray-800">
                    Custom reports
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500">
                  <CircleX />
                  </span>
                  <span className="text-gray-800">
                    Product support
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500">
                  <CircleX />
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
                <Button onClick={() => router.push('/dashboard')}  type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 cursor-pointer">Start free trial</Button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FreeCard