"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  let id = useParams().id[1]

  let showData = () => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((ress) => {
        console.log(ress.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    showData()
  }, [id])



  return (
    <div>
      hello class
    </div>
  )
}
