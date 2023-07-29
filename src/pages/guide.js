import React from 'react'
import Navbar from '../components/Navbar'
import PageMenu from '../components/PageMenu'
import PageContent from '../components/PageContent'
import BodyContainer from '../components/BodyContainer'

export default function Portal() {
  return (
    <>
        <Navbar />
        <BodyContainer>
            <PageMenu currentPage={0} />
            <PageContent>
                Guide
            </PageContent>
        </BodyContainer>
    </>
  )
}
