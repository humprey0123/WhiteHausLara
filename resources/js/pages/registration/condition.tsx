import { Button } from "@/components/ui/button";


interface ConditionProps {
    onAccept: () => void;
}

export default function Condition({ onAccept }: ConditionProps) {
    return(
        <div className="modal-container modal-content">
            <p>
                <h3>Data Privacy Statement</h3>

                The Company ("we," "us," or "our") respects your privacy and is committed to protecting your personal data in compliance with the Data Privacy Act of 2012 and its Implementing Rules and Regulations (IRR). This privacy statement describes our policies regarding the collection, use, storage, sharing, and disposal of personal information.

                As we may collect and process various type of personal information, we will ONLY use these information for the following purpose/s:
                <ol>
                    <li>Service Provision: to process your orders, provide customer service and fulfill your orders</li>
                    <li>Business Operations: to evaluate business partnerships and manage workforce</li>
                    <li>Marketing & Promotions: to keep you in the loop with our products, promotions and services</li>
                    <li>Legal Compliance: to comply with applicable legal requirements</li>
                </ol>

                We will retain personal information for as long as it is necessary to fulfill the purposes outlined in this statement, or as required by applicable laws. When no longer needed, we securely dispose of personal information to prevent unauthorized access or use.


                We may share your information to our affiliates and subsidiaries for operations and promotions, and to our service providers: third-party companies that provide services on our behalf, such as payment processing, data storage, and delivery services.


                Our third-party providers are mandated to implement similar levels of protection for your data and adhere to this privacy statement.
            </p>
                <Button onClick={onAccept} variant={"secondary"} className="mt-3 w-1/2"> Accept Condition</Button>
        </div>
    )
}