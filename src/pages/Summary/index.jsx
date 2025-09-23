const Summary = ({selectedPlan, addons, selectedAddons, yearlyPricing, goToStep, goBack, goNext}) => {
  const multiplier = yearlyPricing ? 10 : 1;
  const period = yearlyPricing ? "/yr" : "/mo";
  
  const formatPrice = value => {
    return `$${value}${period}`;
  }

  const chosenAddons = addons.filter(addon => selectedAddons.includes(addon.id));

  const planPrice = selectedPlan.monthlyCost * multiplier;
  const addonsTotal = chosenAddons.reduce((sum, a) => sum + a.monthlyCost * multiplier, 0);
  const grandTotal = planPrice + addonsTotal;

  return (
    <>
      <h1 className="form-content__title">Finishing up</h1>
      <p className="text-preset--3-regular form-content__subtitle">Double-check everything looks OK before confirming.</p>
      
      <ul className="summary">
        <li>
          <div className="summary-plan">
            <div>
              <span className="summary-plan__name">{selectedPlan.name} {yearlyPricing ? `(Yearly)` : `(Monthly)`}</span>
              <button className="summary-plan__change" type="button" onClick={() => goToStep("plan")}>Change</button>
            </div>
            <div className="summary-plan__cost">
              {formatPrice(planPrice)}
            </div>
          </div>
          { chosenAddons.length > 0 && 
            <>
              <hr className="summary-separator" />
              <ul className="summary-addons">
                {chosenAddons.map(addon => (
                  <li key={addon.id} className="summary-addon">
                    <span className="summary-addon__name">{addon.name}</span>
                    <span className="summary-addon__cost">+{formatPrice(addon.monthlyCost * multiplier)}</span>
                  </li>
                ))}
              </ul>
            </>
          }
        </li>
      </ul>

      <div className="summary-total">
        <span className="summary-total__label">Total (per {yearlyPricing ? "year" : "month"})</span>
        <span className="summary-total__value">{formatPrice(grandTotal)}</span>
      </div>

      <section className="form-buttons">
        <button type="button" className="btn btn--link" onClick={() => goBack()}>Go back</button>
        <button type="button" className="btn btn--primary form-buttons__continue" onClick={() => goNext()}>Confirm</button>
      </section>
    </>
  );
}

export default Summary;