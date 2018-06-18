import axios from 'axios';

const URL_API = process.env.URL_API;
const URL_REVENUE = `${URL_API}/api/production-project/revenue`;

export default {
    fetchProductionProjectRevenue: (id) => {
        const requestUrl = `${URL_REVENUE}/${id}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.get(requestUrl)
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    updateProductionProjectRevenue: (id, data) => {
        const requestUrl = `${URL_REVENUE}/${id}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl, data)
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    storeProductionProjectRevenue: (data) => {
        const requestUrl = `${URL_REVENUE}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl, data)
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    deleteProductionProjectRevenue: (id) => {
        const requestUrl = `${URL_REVENUE}/${id}/delete`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl)
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    createParticipantRevenueReport: (templateId, emailTemplateId, subject, distributionIds) => {
        const requestUrl = `${URL_REVENUE}/create-participant-revenue-report/${templateId}/${emailTemplateId}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl, {distributionIds: distributionIds, subject: subject})
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    createEnergySupplierReport: (revenueId, templateId, energySupplierId, documentName) => {
        const requestUrl = `${URL_REVENUE}/create-energy-supplier-report/${revenueId}/${templateId}/${energySupplierId}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl, {documentName: documentName})
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    createEnergySupplierCsv: (revenueId, templateId, energySupplierId, documentName) => {
        const requestUrl = `${URL_REVENUE}/create-energy-supplier-csv/${revenueId}/${energySupplierId}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.post(requestUrl, {documentName: documentName, templateId: templateId})
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },

    createPaymentInvoices: (revenueId) => {
        const requestUrl = `${URL_REVENUE}/create-payment-invoices/${revenueId}`;
        const AUTH_TOKEN = `Bearer ${localStorage.getItem('access_token')}`;
        axios.defaults.headers.common.Authorization = AUTH_TOKEN;

        return axios.get(requestUrl)
            .then(response => response.data.data)
            .catch((error) => {
                    console.log(error);
                },
            );
    },
};
