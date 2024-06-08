/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yp0WHfA0kfQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import CardInfo from '@/app/ui/users/card'


export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handlePreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
  }
  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))
  }
  const handleDateClick = (date) => {
    setSelectedDate(date)
  }
  const currentMonth = selectedDate.getMonth()
  const currentYear = selectedDate.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const [notes, setNotes] = useState({})
  const handleNoteChange = (date, note) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [date.toISOString().slice(0, 10)]: note,
    }))
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex gap-8 w-full max-w-6xl">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={handlePreviousMonth}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="text-lg font-medium">
              {new Intl.DateTimeFormat("default", { month: "long", year: "numeric" }).format(selectedDate)}
            </div>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={handleNextMonth}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-gray-500 dark:text-gray-400 font-medium">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }, (_, i) => (
              <div key={`empty-${i}`} className="text-center text-gray-400 dark:text-gray-600" />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = new Date(currentYear, currentMonth, i + 1)
              const isToday =
                date.getFullYear() === new Date().getFullYear() &&
                date.getMonth() === new Date().getMonth() &&
                date.getDate() === new Date().getDate()
              const isSelected =
                date.getFullYear() === selectedDate.getFullYear() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getDate() === selectedDate.getDate()
              return (
                <div
                  key={`date-${i}`}
                  className={`text-center cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isToday
                      ? "bg-blue-500 text-white dark:bg-blue-600"
                      : isSelected
                      ? "bg-gray-200 dark:bg-gray-700"
                      : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  <div className="font-medium">{date.getDate()}</div>
                  <textarea
                    className="text-xs mt-1 w-full bg-transparent border-none focus:outline-none resize-none"
                    placeholder="Add note"
                    value={notes[date.toISOString().slice(0, 10)] || ""}
                    onChange={(e) => handleNoteChange(date, e.target.value)}
                  />
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-gray-500 dark:text-gray-400">
              Today: {new Intl.DateTimeFormat("default", { dateStyle: "full" }).format(new Date())}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {new Intl.DateTimeFormat("default", { month: "long", year: "numeric" }).format(selectedDate)}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
