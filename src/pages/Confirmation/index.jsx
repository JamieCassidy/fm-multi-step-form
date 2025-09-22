const Confirmation = ({clearFormState}) => (
  <>
    <img src="/images/icon-thank-you.svg" alt="Thank you" className="confirmation-icon" />
    <h1 className="form-content__title confirmation-title">Thank you!</h1>
    <p className="text-preset--3-regular form-content__subtitle confirmation-body">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    <button type="button" className="btn btn--primary btn--block" onClick={() => clearFormState()}>Start again</button>
  </>
);

export default Confirmation;