import React, { FormEvent, useRef, useState } from "react";

const ContactForm = () => {
  type ContractType = {
    name: string;
    phoneNumber: number;
    email: string;
    address: string;
    contractStartDate: Date;
    contractEndDate: Date;
    paymentTerms: string;
    companyName: string;
    emergencyContact: number;
    notes: string;
  };

  const [contractData, setContractData] = useState<ContractType>({
    name: "",
    phoneNumber: 0,
    email: "",
    address: "",
    contractStartDate: new Date(),
    contractEndDate: new Date(),
    paymentTerms: "",
    companyName: "",
    emergencyContact: 0,
    notes: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const contractStartDateRef = useRef<HTMLInputElement>(null);
  const contractEndDateRef = useRef<HTMLInputElement>(null);
  const paymentTermsRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const emergencyContactRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setContractData({
      name: nameRef.current!.value,
      phoneNumber: Number(phoneNumberRef.current!.value),
      email: emailRef.current!.value,
      address: addressRef.current!.value,
      contractStartDate: new Date(contractStartDateRef.current!.value),
      contractEndDate: new Date(contractEndDateRef.current!.value),
      paymentTerms: paymentTermsRef.current!.value,
      companyName: companyNameRef.current!.value,
      emergencyContact: Number(emergencyContactRef.current!.value),
      notes: noteRef.current!.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={nameRef} />
        <input
          type="number"
          placeholder="Enter Phone Number"
          ref={phoneNumberRef}
        />
        <input type="email" placeholder="Enter Email" ref={emailRef} />
        <input type="text" placeholder="Enter Address" ref={addressRef} />
        <input
          type="date"
          placeholder="Contract Start Date"
          ref={contractStartDateRef}
        />
        <input
          type="date"
          placeholder="Contract End Date"
          ref={contractEndDateRef}
        />
        <input
          type="text"
          placeholder="Enter Payment Terms"
          ref={paymentTermsRef}
        />
        <input
          type="text"
          placeholder="Enter Company Name"
          ref={companyNameRef}
        />
        <input
          type="number"
          placeholder="Enter Emergency Contact"
          ref={emergencyContactRef}
        />
        <input type="text" placeholder="Enter Notes" ref={noteRef} />
        <button type="submit">Submit</button>

        <section>
          <h2>Name: {contractData.name}</h2>
          <h2>Phone Number: {contractData.phoneNumber}</h2>
          <h2>Email: {contractData.email}</h2>
          <h2>Address: {contractData.address}</h2>
          <h2>
            Contract Start Date: {contractData.contractStartDate.toDateString()}
          </h2>
          <h2>
            Contract End Date: {contractData.contractEndDate.toDateString()}
          </h2>
          <h2>Payment Terms: {contractData.paymentTerms}</h2>
          <h2>Company Name: {contractData.companyName}</h2>
          <h2>Emergency Contact: {contractData.emergencyContact}</h2>
          <h2>Notes: {contractData.notes}</h2>
        </section>
      </form>
    </div>
  );
};

export default ContactForm;
