const Plan = ({plan, chosenPlan, setChosenPlan, yearlyPricing, setError}) => {
  const renderPlanPricing = (plan) => {
    return yearlyPricing ? `$${plan.monthlyCost*10}/yr` : `$${plan.monthlyCost}/mo`;
  }

  return (
    <li className={`plan ${chosenPlan && chosenPlan.id === plan.id && `plan--selected`}`}>
      <button type="button" className="plan-button" onClick={() => {
        setChosenPlan(plan); 
        setError(null)
      }}>
        <img src={`/images/icon-${plan.name.toLowerCase()}.svg`} alt="Arcade" className="plan-button__icon" />
        <div className="plan-button__text">
          <span className="plan-name text-preset--3">{ plan.name }</span>
          <span className="plan-price text-preset--4">{ renderPlanPricing(plan) }</span>
          { yearlyPricing && <span className="plan-saving text-preset--5">2 months free</span> }
        </div>
      </button>
    </li>
  )
}

export default Plan;