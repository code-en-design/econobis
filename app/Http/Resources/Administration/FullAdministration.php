<?php

namespace App\Http\Resources\Administration;

use App\Http\Resources\EmailTemplate\FullEmailTemplate;
use App\Http\Resources\GenericResource;
use App\Http\Resources\Product\FullProduct;
use App\Http\Resources\User\FullUser;
use Illuminate\Http\Resources\Json\Resource;

class FullAdministration extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return
            [
                'id' => $this->id,
                'name' => $this->name,
                'administrationNumber' => $this->administration_number,
                'address' => $this->address,
                'postalCode' => $this->postal_code,
                'city' => $this->city,

                'countryId' => $this->country_id,
                'country' => GenericResource::make($this->whenLoaded('country')),
                'ledgers' => GenericResource::make($this->whenLoaded('ledgers')),

                'emailTemplateIdCollection' => $this->email_template_id_collection,
                'emailTemplateCollection' => FullEmailTemplate::make($this->whenLoaded('emailTemplateCollection')),

                'emailTemplateIdTransfer' => $this->email_template_id_transfer,
                'emailTemplateTransfer' => FullEmailTemplate::make($this->whenLoaded('emailTemplateTransfer')),

                'emailTemplateReminderId' => $this->email_template_reminder_id,
                'emailTemplateReminder' => FullEmailTemplate::make($this->whenLoaded('emailTemplateReminder')),

                'emailTemplateExhortationId' => $this->email_template_exhortation_id,
                'emailTemplateExhortation' => FullEmailTemplate::make($this->whenLoaded('emailTemplateExhortation')),

                'kvkNumber' => $this->kvk_number,
                'btwNumber' => $this->btw_number,
                'IBAN' => $this->IBAN,
                'ibanAttn' => $this->iban_attn,
                'email' => $this->email,
                'website' => $this->website,
                'bic' => $this->bic,
                'sepaContractName' => $this->sepa_contract_name,
                'sepaCreditorId' => $this->sepa_creditor_id,
                'rsinNumber' => $this->rsin_number,
                'defaultPaymentTerm' => $this->default_payment_term,
                'logoFilename' => $this->logo_filename,
                'logoName' => $this->logo_name,

                'createdById' => $this->created_by_id,
                'createdBy' => FullUser::make($this->whenLoaded('createdBy')),

                'users' => FullUser::collection($this->whenLoaded('users')),

                'products' => FullProduct::collection($this->whenLoaded('products')),

                'sepas' => FullSepa::collection($this->whenLoaded('sepas')),

                'totalOrders' => $this->total_orders,
                'totalOrdersConcepts' => $this->total_orders_concepts,
                'totalOrdersUpcoming' => $this->total_orders_upcoming,
                'totalOrdersToCreateInvoices' => $this->total_orders_to_create_invoices,
                'totalOrdersToSendInvoices' => $this->total_orders_to_send_invoices,
                'totalOrdersClosed' => $this->total_orders_closed,

                'totalInvoices' => $this->total_invoices,
                'totalInvoicesToSendCollection' => $this->total_invoices_to_send_collection,
                'totalInvoicesToSendTransfer' => $this->total_invoices_to_send_transfer,
                'totalInvoicesSent' => $this->total_invoices_sent,
                'totalInvoicesExported' => $this->total_invoices_exported,
                'totalInvoicesReminder' => $this->total_invoices_reminder,
                'totalInvoicesExhortation' => $this->total_invoices_exhortation,
                'totalInvoicesPaid' => $this->total_invoices_paid,
                'totalInvoicesIrrecoverable' => $this->total_invoices_irrecoverable,

                'totalPaymentInvoices' => $this->total_payment_invoices,
                'totalPaymentInvoicesConcepts' => $this->total_payment_invoices_concepts,
                'totalPaymentInvoicesSent' => $this->total_payment_invoices_sent,
                'totalPaymentInvoicesNotPaid' => $this->total_payment_invoices_not_paid,

                'canCreateInvoices' => $this->can_create_invoices,
                'canCreatePaymentInvoices' => $this->can_create_payment_invoices,

                'usesTwinfield' => $this->uses_twinfield,
                'twinfieldUsername' => $this->twinfield_username,
                'twinfieldPassword' => $this->twinfield_password,
                'twinfieldOrganizationCode' => $this->twinfield_organization_code,
                'twinfieldOfficeCode' => $this->twinfield_office_code,
                'twinfieldIsValid' => $this->twinfield_is_valid,
                'defaultInvoiceTemplate' => $this->default_invoice_template,
                'btwCodeSalesNull' => $this->btw_code_sales_null,
                'btwCodeSales0' => $this->btw_code_sales_0,
                'btwCodeSales6' => $this->btw_code_sales_6,
                'btwCodeSales21' => $this->btw_code_sales_21,

                'createdAt' => $this->created_at,
                'updatedAt' => $this->updated_at,

                'mailboxId' => $this->mailbox_id,
                'mailboxEmail' => optional($this->mailbox)->email,
            ];
    }
}
