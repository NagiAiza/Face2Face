import NextLink from 'next/link';
import React from 'react'
import Page from 'components/Page';
import ArrowIcon from '../components/ArrowIcone';
import Buton from '../components/Button';
import Carte from '../components/TestCarte';




let LinkLowPrize = "https://buy.stripe.com/00g2an9IldmYdl6dQR"
let LinkHighPrize = 'https://buy.stripe.com/cN216j6w94Qs3Kw002'
let Style = {width:"40%",margin:"1rem", borderRight : 'none', borderLeft :'none', borderTop : 'thin solid blue',  borderBottom : 'thin solid blue', padding:"2%",cursor:'pointer', borderRadius:"2px"}

export default function PaymentPage() {

  const [selected, setSelected] = React.useState(1);

  const changeStyle = (id:number) =>
  {
    setSelected(id);
  }


  return (
    <Page title="Le futur est la" description="On ne paye pas, on investit">
      <ArrowIcon/>
      <Carte style={{width: '60%', borderRadius: '3px'}}>
        <h2 style={{fontSize: '15px', textAlign:'left',marginLeft:"1em", lineHeight:"20px"}}>Votre forfait</h2>
        <div style={{ display: "flex", justifyContent:"space-evenly"}}>
        <button style={selected === 1 ? SelectedStyle : Style} onClick={() => changeStyle(1)} >
          <h1 style={{fontSize:'15px',padding:"2%", lineHeight:"15px"}}> Engagement mensuel</h1>
          <p >
            59,99€ <h1 style={{fontSize:"8px"}}> /mois</h1>
            <p style={{fontSize:"7px"}}> Prix annuel : 500,99 € </p>
          </p>
        </button>
        <button style={selected === 2 ? SelectedStyle : Style} onClick={() => changeStyle(2)} >
          <h1 style={{fontSize:'15px',padding:"2%", lineHeight:"15px"}}>Engagement annuel</h1>
          <p >
            49,99€ <h1 style={{fontSize:"8px"}}> /mois</h1>
            <p style={{fontSize:"7px"}}> Prix annuel : 449,99 € </p>
          </p>
        </button>
        </div>

        <NextLink href={selected=== 1? LinkLowPrize : LinkHighPrize} passHref>
          <Buton >
            Informations et Paiement <span>&rarr;</span>
          </Buton>
        </NextLink>

      </Carte>
    </Page>
  );
}

const SelectedStyle = {width:"40%",margin:"1rem",padding:"2%",cursor:'pointer',borderLeft :'none', borderRight : 'none', borderTop : '3px solid blue', borderBottom:" 3px solid blue", borderRadius:"2px"};




