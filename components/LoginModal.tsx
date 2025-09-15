import React from 'react';
import { Button, Form} from 'semantic-ui-react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Overlay from './Overlay';






export interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {

  useEscClose({ onClose });
  return (
          <Overlay>
            <Container>
              <Card>
              <CloseIconContainer>
                <CloseIcon color="red" onClick={onClose} />
              </CloseIconContainer>

                  <Form>
                    <img src='Logo Face to Face.png' alt='logo' style={{margin: 'auto', marginBottom: '4em', width: '65px', borderRadius: '50%'}}/>
                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      placeholder='Username'
                      size='big'
                    />
                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      type='password'
                      placeholder='Password'
                      size='big'
                    />
                    <Button content='Login' size='big' style={{backgroundColor: 'rgb(147, 109, 229)', color: 'white'}} />
                    <a href='/forgotpassword' style={{float: "right"}}>Forgot Password?</a>
                    <Button className="ui button" content='Sign up' icon='signup' size='big' href='/signup' />
                  </Form>

              </Card>
            </Container>
          </Overlay>
  );
}



const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: white;
  border-radius: 0.6rem;
 
  margin: 30%;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
    margin:5%;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  svg {
    color: #e0e1e2;

    cursor: pointer;
    width: 2rem;
  }
`;


