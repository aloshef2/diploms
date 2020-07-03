import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";

const { Title } = Typography;

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

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : ' ';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email не правильный')
          .required('Email не веден'),
        password: Yup.string()
          .min(6, 'Пароль должен быть не мешь 6 символов')
          .required('Пароль не веден'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/roboshop");
              } else {
                setFormErrorMessage('Проверти правильность написания пароля')
              }
            })
            .catch(err => {
              setFormErrorMessage('Проверти правильность написания пароля')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
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
          <div >
            <div className="text-center">
            <div class="container-fluid register">
                <div class="row">
                    <div class="col-md-3 md-hidden register-left">
                        <a href="/roboshop">  <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/></a>
                        <h3 className="text-white">Добро пожаловать</h3>
                        <p>В мир робототехники</p>
                        <a href="/register" class="btn btn-outline-light">Зарегистрироваться</a>
                    </div>
                    <div class="col-md-9 register-right">
                        <Form method="POST" {...formItemLayout} onSubmit={handleSubmit}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                                <h3 class="register-heading">Вход</h3>
                                <div class="row register-form">
                                    <div class="col-12 ">
                                        <div className="zone">
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
                                          {formErrorMessage && (
                                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            {formErrorMessage}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          
                                        )}
                                        </div>
                                        
                                        

                                        <div className="form-group">
                                        <Form.Item label="Email" required>
                                          <Input
                                            id="email"
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Введите вашь email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.email && touched.email ? 'text-input ' : 'text-input'
                                            }
                                          />
                                        </Form.Item>
                                        </div>
                                        <div className="form-group">

                                        </div>
                                        <Form.Item label="Пароль" required>
                                          <Input
                                            id="password"
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Введите вашь пароль"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                              errors.password && touched.password ? 'text-input ' : 'text-input'
                                            }
                                          />
                                          
                                        </Form.Item>

                                          <Form.Item {...tailFormItemLayout}>
                                            <div className="row">
                                              <div className="col-6 text-left">
                                              <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Запомнить</Checkbox>
                                              </div>
                                              <div className="col-6">
                                                <a className="login-form-forgot" href="#" style={{ float: 'right' }}>
                                                  забыл пароль
                                                </a>
                                              </div>
                                            </div>
                                            
                                            
                                            <div>
                                              <Button type="primary" htmlType="submit" style={{ minWidth: '100%', background: "#FBB034", color: "white", border: "1px solid " }} disabled={isSubmitting} onSubmit={handleSubmit}>
                                                Вход
                                              </Button>
                                            </div>
                                            <div className="d-md-none">
                                               <a href="/register">Зарегистрироваться</a>
                                            </div>
                                            
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
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);


