import { useState } from 'react'
import cn from 'classnames'
import s from './home.page.module.scss'
import reactLogo from '@general/assets/react.svg'
import { TestHeading } from '@components/test-heading/test-heading'

export default function HomePage() {
   const [count, setCount] = useState(0)

   return (
      <>
         <div>
            <a href="https://react.dev" target="_blank">
               <img
                  src={reactLogo}
                  className={cn(s.logo, s.react)}
                  alt="React logo"
               />
            </a>
         </div>

         <TestHeading />

         <h1>Vite + React</h1>

         <div className={s.card}>
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>

            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>

         <p className={s.readTheDocs}>
            Click on the Vite and React logos to learn more
         </p>
      </>
   )
}
