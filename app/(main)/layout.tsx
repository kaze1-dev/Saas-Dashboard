import React from 'react'
import Navbar from '../../components/navbar'
import { ReactNode } from 'react'
import Providers from '../providers'
import AiAssistant from "@/components/ai/aiAssistant";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <Navbar />
      {children}
      <AiAssistant />
    </Providers>
  )
}

export default MainLayout