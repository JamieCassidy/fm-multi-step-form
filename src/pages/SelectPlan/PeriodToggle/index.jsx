const PeriodToggle = ({yearlyPricing, toggleYearlyPricing}) => {
  return (
    <label className="period-toggle">
      <span className={`period-toggle__label ${!yearlyPricing && `period-toggle__label--active`}`}>Monthly</span>
      <input type="checkbox" name="period" id="period" checked={yearlyPricing} onChange={() => toggleYearlyPricing()} className="period-toggle__checkbox" />
      <div className="period-toggle__switch"></div>
      <span className={`period-toggle__label ${yearlyPricing && `period-toggle__label--active`}`}>Yearly</span>
    </label>
  )
}

export default PeriodToggle;