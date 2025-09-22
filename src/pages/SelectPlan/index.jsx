import {useState, useEffect} from 'react';
import Plan from './Plan';
import PeriodToggle from './PeriodToggle';

const SelectPlan = ({plans, selectedPlan, yearlyPricing, setPlan, toggleYearlyPricing, goBack}) => {
  const [chosenPlan, setChosenPlan] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setChosenPlan(selectedPlan || null);
  }, [selectedPlan]);

  const validate = () => {
    const isValid = chosenPlan !== null;
    setError(isValid ? null : "Please choose a plan to continue");
    return isValid;
  };

  const submitPlan = (plan) => {
    const ok = validate();
    if(!ok) {
      return
    }
    setPlan(plan);
  }

  return (
    <>
      <h1 className="form-content__title">Select your plan</h1>
      <p className="text-preset--3-regular form-content__subtitle">You have the option of monthly or yearly billing.</p>
      
      { error && <span className="validation-error">{error}</span>}

      <ul className="plans">
        { plans.map(plan => (
          <Plan key={plan.id} plan={plan} chosenPlan={chosenPlan} setChosenPlan={setChosenPlan} yearlyPricing={yearlyPricing} setError={setError} />
        ))}
      </ul>

      <PeriodToggle yearlyPricing={yearlyPricing} toggleYearlyPricing={toggleYearlyPricing} />

      <section className="form-buttons">
        <button type="button" className="btn btn--link" onClick={() => goBack()}>Go back</button>
        <button type="button" className="btn btn--primary form-buttons__continue" onClick={() => submitPlan(chosenPlan)}>Next Step</button>
      </section>
    </>
  );
}

export default SelectPlan;