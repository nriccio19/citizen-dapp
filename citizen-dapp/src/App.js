import React, { useContext, useState, useEffect } from 'react'
import { Text, Button, HStack, Input, VStack } from '@chakra-ui/core'
import { ethers } from 'ethers'
import { Web3Context } from './hooks/useWeb3'
import {
  Citizen_address,
  Citizen_abi,
} from './contracts/Citizen'

function App() {
  const [web3State, login] = useContext(Web3Context)
  const [citizen, setCitizen] = useState(null)
  const [getValue, setGetValue] = useState(null)
  const [inputValue, setInputValue] = useState('0x000000')
  const [inputValue1, setInputValue1] = useState('enter the vote number')
  const [inputValue2, setInputValue2] = useState('press 0 for yes or 1 for no')
  const [inputValue3, setInputValue3] = useState('enter the vote number')
  const [inputValue4, setInputValue4] = useState('0x000000')

  const handleOnClickGetSage = async () => {
    const res = await citizen.se_presenter_sage()
  }

  const handleOnClickRegister = async () => {
    const tx = await citizen.register(inputValue)
  }

  const handleOnClickVote = async () => {
    const voting = await citizen.vote(inputValue1, inputValue2)
  }

  const handleOnClickGestionSage = async () => {
    const gestionsage = await citizen.gestionSage(inputValue3)
  }

  const handleOnClickAdmin = async () => {
    const adminstatut = await citizen.admin(inputValue4)
    setInputValue4(adminstatut.toString())
  }

  useEffect(() => {
    if (web3State.signer !== null) {
      setCitizen(
        new ethers.Contract(
          Citizen_address,
          Citizen_abi,
          web3State.signer
        )
      )
    }
  }, [web3State.signer])

  return (
    <>
      <Text>Web3: {web3State.is_web3 ? 'injected' : 'no-injected'}</Text>
      <Text>Network id: {web3State.chain_id}</Text>
      <Text>Network name: {web3State.network_name}</Text>
      <Text>MetaMask installed: {web3State.is_metamask ? 'yes' : 'no'}</Text>
      <Text>logged: {web3State.is_logged ? 'yes' : 'no'}</Text>
      <Text>{web3State.account}</Text>
      {!web3State.is_logged && (
        <>
          <Button onClick={login}>login</Button>
        </>
      )}
      {citizen !== null && web3State.chain_id === 4 && (
        <>
        <VStack>
          <HStack>
            <Button onClick={handleOnClickGetSage}>Se presenter</Button>
            <Text>{getValue}</Text>
          </HStack>
          <HStack>
            <Button onClick={handleOnClickRegister}>Register</Button>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value)
              }}
            />
          </HStack>
          <HStack>
            <Button onClick={handleOnClickVote}>Vote</Button>
            <Input
              value={inputValue1}
              onChange={(e) => {
                setInputValue1(e.currentTarget.value)
              }}
            />
                        <Input
              value={inputValue2}
              onChange={(e) => {
                setInputValue2(e.currentTarget.value)
              }}
            />
          </HStack>
          <HStack>
            <Button onClick={handleOnClickGestionSage}>Gestion Sage</Button>
            <Input
              value={inputValue3}
              onChange={(e) => {
                setInputValue3(e.currentTarget.value)
              }}
            />
          </HStack>
          <HStack>
            <Button onClick={handleOnClickAdmin}>Admin</Button>
            <Input
              value={inputValue4}
              onChange={(e) => {
                setInputValue4(e.currentTarget.value)
              }}
            />
          </HStack>
          </VStack>
          
        </>
      )}
    </>
  )
}

export default App;
