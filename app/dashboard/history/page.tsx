'use client'

import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { TEMPLATE } from '../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'

export interface HISTORY {
  id: number
  formData: string
  aiResponse: string
  templateSlug: string
  createdAt: string
  createdBy: string
}

function History() {
  const [historyList, setHistoryList] = useState<HISTORY[]>([])
  const [loading, setLoading] = useState(true)

  const getTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates.find((item) => item.slug === slug)
    return template ? template.name : 'Unknown Template'
  }

  const totalWordCount = (text: string) => {
    return text.trim().split(/\s+/).length
  }

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/history')
        const data = await response.json()
        setHistoryList(data)
      } catch (error) {
        console.error('Failed to fetch history:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-center">
          <div className="loader  mx-auto"></div>
          <p className="mt-4 text-[#FF9400] font-semibold">Loading History...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-gray-100 m-5 p-5 shadow-lg rounded-lg bg-white overflow-x-auto">
      <h2 className="font-bold text-3xl mb-4">History</h2>
      <p className="text-gray-400 mb-4">Search your resolved queries</p>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TEMPLATE</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">AI RESPONSE</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">WORDS</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DATE</th>
          </tr>
        </thead>
        <tbody>
          {historyList.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">No history found</td>
            </tr>
          ) : (
            historyList.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-4 py-3 text-sm text-gray-700">{getTemplateName(item.templateSlug)}</td>
                <td className="px-4 py-3 line-clamp-2 w-md text-sm text-gray-700">{item.aiResponse}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{totalWordCount(item.aiResponse)}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{moment(item.createdAt).format('DD/MM/YYYY')}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default History
