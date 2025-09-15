import React, { useState } from 'react';
import styled from 'styled-components';
import { EnvVars } from 'env';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import CloseIcon from './CloseIcon';
import Input from './Input';
import Overlay from './Overlay';
import Container from './Container';
import { Button, Divider, Form, Grid} from 'semantic-ui-react';
import { useSignUpModalContext } from '../contexts/signup-modal.context';

export interface SignUpModalProps {
  onClose: () => void;
}

export default function SignUpModal({ onClose }: SignUpModalProps) {

  useEscClose({ onClose });
  return (
    <Overlay>
      <Container>
        <Card>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input label='First name' placeholder='First name' />
              <Form.Input label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='Address' placeholder='Address' />
              <Form.Input label='Phone' placeholder='Phone' />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
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
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
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

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)`
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CustomInput = styled(Input)`
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;
