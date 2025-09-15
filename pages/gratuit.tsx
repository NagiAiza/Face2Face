import Head from 'next/head';
import React from 'react'
import {Button} from 'semantic-ui-react'
import Carte from 'components/TestCarte';
import Dropdown from 'components/Dropdown';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import NextLink from 'next/link';
import Buton from 'components/Button';

export default function Homepage() {

  const [file, setFile] = React.useState(null);
  const [fileURL, setFileURL] = React.useState('');
  const [BaseSentence, setBaseSentence] = React.useState('Importez une image (png, jpg, jpeg)');

  const onImageChange = (e: any) => {
    if (e.target.files[0]!=null) {
    setFile(e.target.files[0]);
    setBaseSentence(e.target.files[0].name);}
  };

  React.useEffect(() => {
    if (!file) return;
    let newFileURL = '';
    newFileURL = window.URL.createObjectURL(file);
    setFileURL(newFileURL);
  }, [file]);


  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <div style={{display: "flex",height: '50%'}} >
        <Carte style={{height: '50%'}} >
          <div>
            <h1 style={{color:'black', fontSize:'3rem'}}>Façonnez vous une nouvelle image !</h1>
            <div style={{textAlign: 'center'}}>
              <div style={{height:'4em'}}>
                <div style={{height:'inherit',marginLeft:'1.5em',position: 'absolute',left: '2em',border: 'thin solid rgb(113, 218, 252)',borderBottomLeftRadius: '10px',borderTopLeftRadius: '10px',padding: '1em',backgroundColor: 'rgb(113, 218, 252)',width: '5em'}}>
                  <img style={{width:'1.8em',marginLeft:'0.6em',position: 'sticky', float:'left', cursor:'pointer'}} src="https://cdn-icons-png.flaticon.com/512/4366/4366909.png" alt="Ajoutez une image" />
                </div>
                <input type="file" accept="image/jpeg" style={{display: 'none'}} onChange={onImageChange}/>
                <p style={{ width:'95%',paddingLeft: '6%', margin:'3% 1rem 1rem', lineHeight:'3em', fontSize: '1.3rem', border : 'thin solid',borderRadius:'10px', height: 'inherit'}}>
                  {BaseSentence}
                </p>
              </div>
                <div  style={{height:'4em'}}>
                  <div style={{height:'inherit',marginLeft:'1.5em',position: 'absolute',left: '2em',border: 'thin solid rgb(113, 218, 252)',borderBottomLeftRadius: '10px',borderTopLeftRadius: '10px',padding: '1em',backgroundColor: 'rgb(113, 218, 252)',width: '5em'}}>                    <img style={{width:'1.8em',marginLeft:'0.6em',position: 'sticky', float:'left', cursor:'pointer'}} src="https://cdn-icons-png.flaticon.com/512/4366/4366909.png" alt="Ajoutez une image" />
                  </div>
                  <input type="file" accept=".png, .jpg, .jpeg" style={{display: 'none'}}/>
                  <p style={{ width:'95%',paddingLeft: '6%', margin:'3% 1rem 1rem', lineHeight:'3em', fontSize: '1.3rem', border : 'thin solid',borderRadius:'10px', height: 'inherit'}}>
                    Importez une image (png, jpg, jpeg)
                  </p>
                </div>
            </div>
            <div style={{marginTop:'1em'}}>
              <input type="text" placeholder="Adresse mail" name='email' style={{width:'95%', height:'4.5em', border:'none', borderTop:'1px solid', borderBottom:'1px solid', backgroundColor:'#F2F2F2'}}/>
              <input type="text" placeholder="Prénom" name='prenom' style={{width:'95%', height:'4.5em', border:'none', borderBottom:'1px solid', backgroundColor:'#F2F2F2'}}/>
              <input type="text" placeholder="Titre" name='titre' style={{width:'95%', height:'4.5em', border:'none', borderTop:'1px solid', borderBottom:'1px solid', backgroundColor:'#F2F2F2'}}/>
            </div>
          </div>
          <div style={{textAlign: 'left', paddingLeft:'3%', paddingTop:'5%', height:'16em'}}>
          <Dropdown/>
          <Dropdown/>
          <NextLink href="/gratuit" passHref >
            <Buton style={{display:'inline', position:'absolute', right:'4%'}}>
              Swapper <span>&rarr;</span>
            </Buton>
          </NextLink>
          <Dropdown/>

          </div>

        </Carte>
            <Carte style={{width: '65%',height: '50%'}}>
              <div style={{textAlign: 'center'}}>
                <h1 style={{color:'black'}}>Résultat</h1>
              </div>
              <div style={{display: "flex"}}>
                <Carte style={{width: '50%', backgroundColor: '#ddd', margin: "2em 1em 0 1em",height: '50%'}}>
                  <div style={{textAlign: 'center'}}>
                    <h1 style={{color:'black'}}>Image rentrée !</h1>
                    <img src={fileURL} style={{width: '100%'}}/>
                  </div>
                </Carte>

                <Carte style={{width: '50%', backgroundColor: '#ddd', margin: "2em 1em 0 1em",height: '50%'}}>
                  <div style={{textAlign: 'center'}}>
                    <h1 style={{color:'black'}}>Image finale !</h1>
                  </div>
                </Carte>
              </div>

              <div style={{margin: "2em"}}>
                <Button primary>Télécharger</Button>
                <Button primary>Partager</Button>
                <Button primary>Passer à la version pro</Button>
                <Button primary>Passer à la version pro</Button>
              </div>

            </Carte>
          </div>

      </>



  );
}



export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
