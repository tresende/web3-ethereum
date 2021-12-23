import React from 'react'
// import React, { useEffect } from 'react'
// import Web3 from 'web3'

import * as S from './styles'

const Container = () => {
  // const providerUrl = process.env.PROVIDER_URL

  // useEffect(() => {
  //   const web3 = new Web3()
  // }, [])

  return <S.Wrapper>{process.env.PROVIDER_URL}</S.Wrapper>
}

export default Container
