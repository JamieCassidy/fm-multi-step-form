const Addon = ({toggleAddon, chosenAddons = [], addon, yearlyPricing}) => {
  const isChecked = chosenAddons.includes(addon.id);

  return (
    <li className="addon">
      <label className="addon-button">
        <input 
          className="addon-checkbox"
          type="checkbox" 
          id={`addon${addon.id}`}
          name={addon.name} 
          value={addon.id} 
          checked={isChecked}
          onChange={() => toggleAddon(addon.id)}
        />
        <div className="addon-info">
          <span className="addon-name">{addon.name}</span>
          <span className="addon-description">{addon.description}</span>
        </div>
        <span className="addon-cost">${yearlyPricing ? `${addon.monthlyCost*10}/yr` : `${addon.monthlyCost}/mo`}</span>
      </label>
    </li>
  )
}

export default Addon;