'use client'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { CircleCheckBig, Loader2Icon } from 'lucide-react'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'

declare global {
  interface Window {
    Razorpay: any
  }
}

const MonthlyCard = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useUser()
  const context = useContext(UserSubscriptionContext)
  const userSubscription = context?.userSubscription
  const setUserSubscription = context?.setUserSubscription

  const CreateSubscription = () => {
    setLoading(true)
    axios.post('/api/create-subscription', {})
      .then(resp => {
        console.log(resp.data)
        OnPayment(resp.data.id)
      })
      .catch(error => {
        console.error('Subscription creation failed:', error)
        setLoading(false)
      })
  }

  const OnPayment = (subID: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subID,
      name: 'Content Generator',
      description: 'Monthly Subscription',
      handler: async (resp: any) => {
        if (resp?.razorpay_payment_id) {
          await SaveSubscription(resp.razorpay_payment_id)
        }
        console.log(resp)
        setLoading(false)
      },
      theme: {
        color: '#6366f1'
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  const SaveSubscription = async (paymentId: string) => {
    try {
      const res = await axios.post('/api/save-subscription', {
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        paymentId,
        joinDate: moment().format('DD/MM/YYYY')
      })
      if (res?.data?.success && setUserSubscription) {
        setUserSubscription(true)
        window.location.reload()
      }
    } catch (error) {
      console.error('Save subscription failed:', error)
    }
  }

  return (
    <div>
      <div className="shadow-xl shadow-white p-5 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10">
        <h3 className="text-xl font-bold text-gray-800">Professional</h3>
        <div className="text-sm text-gray-500">Everything is unlimited.</div>
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">Most popular</span>
        
        <div className="mt-5">
          <span className="text-6xl font-bold text-gray-800">$9</span>
          <span className="text-lg font-bold text-gray-800">.99</span>
          <span className="ms-3 text-gray-500">USD / monthly</span>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 sm:gap-x-6 sm:gap-y-0">
          <ul className="space-y-2 text-sm sm:text-base">
            {['Up to 10 people', 'Collect data', 'Code extensibility'].map((text, idx) => (
              <li key={idx} className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                </span>
                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 text-sm sm:text-base">
            {['Custom reports', 'Product support', 'Activity reporting'].map((text, idx) => (
              <li key={idx} className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <CircleCheckBig />
                </span>
                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-4 py-4">
          <div>
            <p className="text-sm text-gray-500">Cancel anytime.</p>
            <p className="text-sm text-gray-500">No card required.</p>
          </div>

          <div className="flex justify-end">
            <Button
              disabled={loading}
              onClick={CreateSubscription}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {userSubscription ? 'Active Plan' : 'Start Buy now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyCard
