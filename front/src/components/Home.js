import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import {
    Bars3Icon,
    CalendarIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    XMarkIcon,
    WrenchIcon,
    VideoCameraIcon,
    TicketIcon
  } from '@heroicons/react/24/outline'
  

const stats = [
  { id: 1, name: 'Total de Videos', stat: '71,897', icon: VideoCameraIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Senha', stat: '58.16%', icon: TicketIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Total de Chamadas', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Ultimos 30 dias</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Ver Todos<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
