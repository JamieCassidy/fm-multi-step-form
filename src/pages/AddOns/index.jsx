import { useState, useEffect } from 'react';
import Addon from './Addon';

const AddOns = ({addons, selectedAddons = [], yearlyPricing, setAddons, goBack}) => {
  const [chosenAddons, setChosenAddons] = useState(selectedAddons);
  
  useEffect(() => setChosenAddons(selectedAddons), [selectedAddons]);

  const toggleAddon = (id) => {
    setChosenAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const submitAddons = () => {
    setAddons(chosenAddons);
  }

  return (
    <>
      <h1 className="form-content__title">Pick add-ons</h1>
      <p className="text-preset--3-regular form-content__subtitle">Add-ons help enhance your gaming experience.</p>
      
      <ul className="addons">
        { addons.map(addon => (
          <Addon 
            key={addon.id}
            addon={addon}
            chosenAddons={chosenAddons}
            yearlyPricing={yearlyPricing}
            toggleAddon={toggleAddon}  
          />
        ))}
      </ul>

      <section className="form-buttons">
        <button type="button" className="btn btn--link" onClick={() => goBack()}>Go back</button>
        <button type="button" className="btn btn--primary form-buttons__continue" onClick={() => submitAddons()}>Next Step</button>
      </section>
    </>
  );
}

export default AddOns;