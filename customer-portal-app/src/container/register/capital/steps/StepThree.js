import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Col from 'react-bootstrap/Col';

function StepThree({ previous, next, initialRegisterValues, handleSubmitRegisterValues }) {
    const validationSchema = Yup.object({
        didAgreeTerms: Yup.boolean(),
        didUnderstandInfo: Yup.boolean(),
    });
    // todo controle op booleans allebei aangevinkt voordat je verder mag

    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                onSubmit={function(values, actions) {
                    handleSubmitRegisterValues(values);
                    next();
                }}
                initialValues={initialRegisterValues}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                    <>
                        <Row>
                            <Col xs={12} md={10}>
                                <p>
                                    Om deel te kunnen nemen dien je akkoord te gaan met de algemene voorwaarden en dien
                                    je te bevestigen dat je de projectinformatie hebt gelezen en begrepen.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10}>
                                <Field
                                    name="didAgreeTerms"
                                    render={({ field }) => (
                                        <label className="w-checkbox checkbox-fld">
                                            <input
                                                type="checkbox"
                                                {...field}
                                                id="did_agree_terms"
                                                checked={field.value}
                                                className="w-checkbox-input checkbox"
                                            />
                                            <span htmlFor="did_agree_terms" className="checkbox-label w-form-label">
                                                Ik ga akkoord met de <a href="#">voorwaarden</a>
                                            </span>
                                        </label>
                                    )}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10}>
                                <Field
                                    name="didUnderstandInfo"
                                    render={({ field }) => (
                                        <label className="w-checkbox checkbox-fld">
                                            <input
                                                type="checkbox"
                                                {...field}
                                                id="did_understand_info"
                                                checked={field.value}
                                                className="w-checkbox-input checkbox"
                                            />
                                            <span htmlFor="did_understand_info" className="checkbox-label w-form-label">
                                                Ik heb de <a href="#">projectinformatie</a> (inclusief de daarin
                                                beschreven risico’s) behorende bij het project gelezen en begrepen
                                            </span>
                                        </label>
                                    )}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={10}>
                                <ButtonGroup aria-label="Steps" className="float-right">
                                    <Button className={'w-button'} size="sm" onClick={previous}>
                                        Terug
                                    </Button>
                                    <Button className={'w-button'} size="sm" onClick={handleSubmit}>
                                        Ga naar inschrijfformulier
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </>
                )}
            </Formik>
        </div>
    );
}

export default StepThree;
