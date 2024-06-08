// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CalendarSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex gap-8 w-full max-w-6xl">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  <div className="text-center text-gray-500 dark:text-gray-400 font-medium">
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-gray-500 dark:text-gray-400">
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
