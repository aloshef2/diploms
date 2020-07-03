import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        lastName: '',
        firstName: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required('Имя не введено'),
        lastName: Yup.string()
          .required('Фамилия не введена'),
        email: Yup.string()
          .email('Email не правильный')
          .required('Email не веден'),
        password: Yup.string()
          .min(6, 'Пароль должен быть не мешь 6 символов')
          .required('Пароль не веден'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'пароли не совпадают')
          .required('Повторный пароль не введен')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastname: values.lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="text-center">
            <div class="container-fluid register">
                <div class="row">
                    <div class="col-md-3 md-hidden register-left">
                        <a href="/roboshop">  <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/></a>
                        <h3 className="text-white">Добро пожаловать</h3>
                        <p>В мир робототехники</p>
                        <a href="/login" class="btn btn-outline-light">Войти</a>
                    </div>
                    <div class="col-md-9 register-right">
                        <Form method="POST" {...formItemLayout} onSubmit={handleSubmit}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                                <h3 class="register-heading">Регистрация</h3>
                                <div class="row register-form">
                                    <div class="col-12 ">
                                        <div className="zone">
                                          {errors.firstName && touched.firstName && (
                                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            {errors.firstName}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          )}
                                          
                                          {errors.lastName && touched.lastName && (
                                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            {errors.lastName}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          )}

                                          {errors.email && touched.email && (
                                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            {errors.email}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                          )}

                                          {errors.password && touched.password && (
                                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            {errors.password}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                          )}

                                          {errors.confirmPassword && touched.confirmPassword && (
                                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            {errors.confirmPassword}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                          )}
                                        </div>
                                          
                                        <div class="form-group">
                                        <Form.Item required label="Имя">
                                          <Input
                                            id="firstName"
                                            placeholder="Введите имя"
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.firstName && touched.firstName ? 'text-input' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>
                                        </div>
                                        <div class="form-group">
                                        <Form.Item required label="Фамилия">
                                          <Input
                                            id="lastName"
                                            placeholder="Введите фамилию"
                                            type="text"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.lastName && touched.lastName ? 'text-input' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>
                                        </div>
                                        <div class="form-group">
                                        <Form.Item  required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                          <Input
                                            id="email"
                                            placeholder="Введите ваш Email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.email && touched.email ? 'text-input' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>
                                        </div>
                                        <div class="form-group">
                                        <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                                          <Input
                                            id="password"
                                            placeholder="Пароль"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.password && touched.password ? 'text-input' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>
                                        </div>

                                        <div class="form-group">
                                        <Form.Item required label="Confirm" hasFeedback>
                                          <Input
                                            id="confirmPassword"
                                            placeholder="Повторите пароль"
                                            type="password"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.confirmPassword && touched.confirmPassword ? 'text-input' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>
                                        </div>
                                        <Form.Item {...tailFormItemLayout}>
                                          <Button onClick={handleSubmit} style={{ minWidth: '100%', background: "#FBB034", color: "white", border: "1px solid " }} disabled={isSubmitting}>
                                            Регистрация
                                          </Button>
                                          <a href="/login" className="d-md-none">Войти</a>
                                        </Form.Item>
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        </Form>
                    </div>
                    
                </div>

            </div>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage
