import React from 'react'
import Stepper from './components/Stepper'
import YourInfo from './pages/YourInfo'
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import Confirmation from './pages/Confirmation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const savedState = localStorage.getItem('formState');
    if (savedState) {
      try {
        return JSON.parse(savedState);
      } catch (e) {
        console.warn("Failed to parse saved state:", e);
      }
    }

    return {
      step: "info",
      personalInfo: {
        name: null,
        email: null,
        telephone: null
      },
      plans: [
        { id: 0, name: "Arcade", monthlyCost: 9 },
        { id: 1, name: "Advanced", monthlyCost: 12 },
        { id: 2, name: "Pro", monthlyCost: 15 },
      ],
      addons: [
        { id: 0, name: "Online service", monthlyCost: 1, description: "Access to multiplayer games" },
        { id: 1, name: "Larger storage", monthlyCost: 2, description: "Extra 1TB of cloud save" },
        { id: 2, name: "Customizable profile", monthlyCost: 2, description: "Custom theme on your profile" },
      ],
      yearlyPricing: false,
      selectedPlan: null,
      selectedAddons: []
    }
  }

  steps = [
    "info",
    "plan",
    "addons",
    "summary",
    "confirmation"
  ]

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('formState', JSON.stringify(this.state));
    }
  }

  clearFormState = () => {
    localStorage.removeItem('formState');
    this.setState(this.getInitialState());
  }

  setStep = step => {
    this.setState({
      step
    })
  }

  goToStep = step => {
    this.setState({
      step
    });
  }

  goNext = () => {
    const index = this.steps.indexOf(this.state.step)
    if (index < this.steps.length - 1) this.setStep(this.steps[index + 1])
  }

  goBack = () => {
    const index = this.steps.indexOf(this.state.step)
    if (index > 0) this.setStep(this.steps[index - 1])
  }

  setPersonalInfo = (name, email, telephone) => {
    this.setState({
      personalInfo: {
        name,
        email,
        telephone
      }
    },
    this.goNext);
  }

  toggleYearlyPricing = () => {
    this.setState({
      yearlyPricing: !this.state.yearlyPricing
    });
  }

  setPlan = selectedPlan => {
    this.setState({
      selectedPlan
    },
    this.goNext())
  }

  setAddons = selectedAddons => {
    this.setState({
      selectedAddons
    },
    this.goNext())
  }

  render() {
    return(
      <>
        <form className="form">
          <Stepper step={this.state.step} />
          <section className={`form-content ${this.state.step === "confirmation" && `form-content__confirmation`}`}>
            <div className="form-content__container">
              {this.state.step === "info" && 
                <YourInfo 
                  setPersonalInfo={this.setPersonalInfo} 
                  personalInfo={this.state.personalInfo} />}
              {this.state.step === "plan" && 
                <SelectPlan 
                  plans={this.state.plans} 
                  selectedPlan={this.state.selectedPlan}
                  yearlyPricing={this.state.yearlyPricing} 
                  setPlan={this.setPlan}
                  toggleYearlyPricing={this.toggleYearlyPricing}
                  goBack={this.goBack}/>}
              {this.state.step === "addons" && 
                <AddOns 
                  addons={this.state.addons}
                  selectedAddons={this.state.selectedAddons}
                  yearlyPricing={this.state.yearlyPricing}
                  setAddons={this.setAddons}
                  goBack={this.goBack} />}
              {this.state.step === "summary" && 
                <Summary 
                  selectedPlan={this.state.selectedPlan}
                  addons={this.state.addons}
                  selectedAddons={this.state.selectedAddons}
                  yearlyPricing={this.state.yearlyPricing}
                  goToStep={this.goToStep}
                  goBack={this.goBack}
                  goNext={this.goNext} />}
              {this.state.step === "confirmation" && 
                <Confirmation
                  clearFormState={this.clearFormState} />}
            </div>
          </section>
        </form>
      </>
    );
  }
}

export default App
