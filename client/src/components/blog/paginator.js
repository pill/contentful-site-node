import React, { Component } from 'react'
import { range } from '../../utils'

export default ({ totalPages, p, rpp, basePath = '/blog' }) => {
  const padding = 5
  const start = (p - padding) > 0 ? (p - padding) : 1
  const end = (p + padding) <= totalPages ? (p + padding) : totalPages

  console.log(totalPages, start, end)

  return (
    <div id="paginator">
    {
      range(start, end+1, 1).map(i => {
        return <a href={`${basePath}?p=${i}&rpp=${rpp}`} key={i}>{i}</a>
      })
    }
    </div>
  )
}