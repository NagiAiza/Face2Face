import React from "react"

import {Form} from  'semantic-ui-react'
import Page from 'components/Page'




export default function ContactPage() {

  return (

    <Page title="sign up">

      <div className="ui justified container" >
      <Form className="ui massive form">
        <div className="two fields" >


          <div className="required field">
            <label>first Name</label>
          <input type="text" name="first-name" placeholder="First Name" required/>
        </div>
        <div className="required field">
          <label>last Name</label>
          <input type="text" name="name" placeholder="Last Name" required/>
        </div>

        </div>
        <div className="two fields" >
        <div className="required field">
          <label>Mail</label>
          <input type="text" name="email" placeholder="Mail" required/>

        </div>
          <div className="required field">
            <label>Phone</label>
            <input type="text" name="phone" placeholder="Phone" required  pattern="[0-9]{7,15}"/>
          </div>
        </div>
        <div className="two fields" >
          <div className="required field">
            <label>Password</label>
            <input type="password" name="Confirm Password" placeholder="Password" required/>

          </div>
          <div className="required field">
            <label>Confirm Password</label>
            <input type="password" name="Confirm Password" placeholder="Confirm Password" required/>
          </div>
        </div>
        <div className="required field">
          <div className="ui toggle checkbox">
            <input type="checkbox" name="terms" required/>
              <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui primary submit button" type="submit">Submit</button>

      </Form>
      </div>

    </Page>



  )}
