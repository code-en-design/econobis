import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import InputText from '../../../components/form/InputText';
import ButtonText from '../../../components/button/ButtonText';
import FormLabel from 'react-bootstrap/FormLabel';
import TextBlock from '../../../components/general/TextBlock';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Geen geldig e-mailadres')
        .required('Verplicht'),
});

function ChangeAccountEmail({ portalUserEmail }) {
    // function handleSubmitChangeEmail

    return (
        <Formik
            initialValues={{ email: '', changePrimaryEmailAddress: false }}
            validationSchema={validationSchema}
            onSubmit={function(values, actions) {
                // handleSubmitChangeEmail(values);
            }}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                    <Row>
                        <Col xs={12}>
                            <FormLabel className={'field-label'}>Huidig e-mailadres</FormLabel>
                            <TextBlock>{portalUserEmail}</TextBlock>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={9}>
                            <Form.Label className={'field-label pt-1'}>Nieuw e-mailadres</Form.Label>
                            <Field
                                name="email"
                                render={({ field }) => (
                                    <InputText field={field} errors={errors} touched={touched} id="email" />
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={9}>
                            <Field
                                name="changePrimaryEmailAddress"
                                render={({ field }) => (
                                    <label className="w-checkbox checkbox-fld">
                                        <input
                                            type="checkbox"
                                            {...field}
                                            id="change-primary-email-address"
                                            checked={field.value}
                                            className="w-checkbox-input checkbox"
                                        />
                                        <span
                                            htmlFor="change-primary-email-address"
                                            className="checkbox-label w-form-label"
                                        >
                                            Wijziging ook doorvoeren op huidig correspondentie e-mailadres?
                                        </span>
                                    </label>
                                )}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6}>
                            <ButtonText
                                buttonText={'Wijzig e-mailadres'}
                                size="sm"
                                type={'submit'}
                                loading={isSubmitting}
                            />
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default ChangeAccountEmail;