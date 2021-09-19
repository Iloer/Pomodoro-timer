import React from 'react'

export function withKey(key?: string ) {
  return <E, T extends React.ComponentType<E>>(componen: T) =>
    (props: E, index: number) => 
      React.createElement(
        componen,
        //{ ...props, key: key ? props[key as keyof E] : index },
        { ...props, key: key ? key : index },
        [],
      )
}