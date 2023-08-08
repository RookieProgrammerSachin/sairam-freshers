import React from 'react'
import MainLayout from '@/components/MainLayout'
import PageMenu from '../components/PageMenu'
import PageContent from '../components/PageContent'

export default function Portal() {
  return (
    <MainLayout>
      <PageMenu currentPage={2} />
      <PageContent>
        Admission
      </PageContent>
    </MainLayout>
  )
}
