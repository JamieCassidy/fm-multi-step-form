import React from 'react';

const Stepper = ({step}) => (
  <section className="form-stepper">
    <ol className="form-stepper__steps">
      <li className={`form-stepper__step ${step === "info" && `form-stepper__step--active`}`}>
        <div>
          <span className="form-stepper__step-number">Step 1</span>
          <span className="form-stepper__step-title">Your info</span>
        </div>
      </li>
      <li className={`form-stepper__step ${step === "plan" && `form-stepper__step--active`}`}>
        <div>
          <span className="form-stepper__step-number">Step 2</span>
          <span className="form-stepper__step-title">Select plan</span>
        </div>
      </li>
      <li className={`form-stepper__step ${step === "addons" && `form-stepper__step--active`}`}>
        <div>
          <span className="form-stepper__step-number">Step 3</span>
          <span className="form-stepper__step-title">Add-ons</span>
        </div>
      </li>
      <li className={`form-stepper__step ${step === "summary" && `form-stepper__step--active`}`}>
        <div>
          <span className="form-stepper__step-number">Step 4</span>
          <span className="form-stepper__step-title">Summary</span>
        </div>
      </li>
    </ol>
  </section>
);

export default Stepper;