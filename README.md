
# formik-error-scroll

> Scroll to the first error in your Formik form and set focus

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Install](#install)

## About

Wrapper around [scroll-to-element](https://www.npmjs.com/package/scroll-to-element) that scrolls to the first error element in Formik.

## Usage

```js
import React from 'react'
import { Formik, Field, Form } from 'formik'
import FormikErrorScroll from 'formik-error-scroll'

export const Signup = () =>
  <div>
    <h1>My Uncool Persisted Form</h1>
    <Formik
      onSubmit={values => console.log(values)}
      initialValues={{ firstName: '', lastName: '', email: '' }}
      render={props =>
        <Form>
          <Field name="firstName" placeholder="First Name" />
          <Field name="lastName" placeholder="Last Name" />
          <Field name="email" type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
          <FormikErrorScroll
            offset={0}
            align={'top'}
            focusDelay={200}
            ease={'linear'}
            duration={1000}
          />
        </Form>}
    />
  </div>;
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install formik-error-scroll
$ # OR
$ yarn add formik-error-scroll
```