import React from 'react';
import { categories } from '../constants'


export default function NavLinks() {
  return (
    <nav>
{categories.map((categories)=> (
    <NavLink key={category} category ={category}/>
))}
    </nav>
  )
}
