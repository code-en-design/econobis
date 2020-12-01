import axiosInstance from '../../default-setup/AxiosInstance';
import axios from 'axios';

const URL_FINANCIAL_OVERVIEW = `financial-overview`;

export default {
    fetchFinancialOverviewDetails: id => {
        const requestUrl = `jory/financial-overview/${id}`;

        return axiosInstance.get(requestUrl, {
            params: {
                jory: {
                    fld: ['id', 'administrationId', 'year', 'definitive'],
                    rlt: {
                        administration: { fld: ['id', 'name'] },
                        financialOverviewProjects: {
                            fld: ['id', 'projectId'],
                            rlt: {
                                project: {
                                    fld: ['id', 'code', 'name'],
                                    rlt: { projectType: { fld: ['id', 'codeRef', 'name'] } },
                                },
                            },
                        },
                    },
                },
            },
        });
    },

    newFinancialOverview: financialOverview => {
        const requestUrl = URL_FINANCIAL_OVERVIEW;
        financialOverview.jory = JSON.stringify({
            fld: ['id'],
        });

        return axiosInstance.post(requestUrl, financialOverview);
    },

    updateFinancialOverview: financialOverview => {
        const requestUrl = `${URL_FINANCIAL_OVERVIEW}/${financialOverview.id}`;

        return axiosInstance.post(requestUrl, financialOverview);
    },

    deleteFinancialOverview: id => {
        const requestUrl = `${URL_FINANCIAL_OVERVIEW}/${id}/delete`;

        return axiosInstance.post(requestUrl);
    },
};
