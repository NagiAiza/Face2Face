import styled from 'styled-components';
import React from 'react'


export default function Dropdown() {
  return (
   <select className="ui dropdown"  style={{margin:'2%', width:'55%',borderRadius:'10px', textAlign:'center' }}>
    <option value="">Choisir une zone à swaper</option>
    <option value="0">Visage</option>
    <option value="1">Bouche</option>
    <option value="2">Cheveux</option>
    <option value="3">Barbe</option>
    <option value="4">Oreilles</option>
    <option value="5">Nez</option>
    <option value="6">Sourcils</option>
    <option value="7">Machoire</option>
    <option value="8">Menton</option>
    <option value="9">Couvre-Chef</option>
   </select>
);}

