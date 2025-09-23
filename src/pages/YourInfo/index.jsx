import { useEffect, useState } from 'react';

const YourInfo = ({setPersonalInfo, personalInfo}) => {
  const [name, setName] = useState(personalInfo.name || "");
  const [email, setEmail] = useState(personalInfo.email || "");
  const [telephone, setTelephone] = useState(personalInfo.telephone || "");
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    telephone: null
  });

  useEffect(() => {
    setName(personalInfo.name || "");
    setEmail(personalInfo.email || "");
    setTelephone(personalInfo.telephone || "");
  }, [personalInfo]);

  const validateName = (name) => {
    return name.trim() ? null : "Name is required"
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim()) return "Email is required";
    if(!emailRegex.test(email)) return "Enter a valid email address";
    return null;
  }

  const validateTelephone = (telephone) => {
    const digits = telephone.replace(/\D/g, "");
    if (!telephone.trim()) return "Phone number is required";
    if (digits.length < 10 || digits.length > 15) return "Enter a valid phone number";
    return null;
  };

  const validate = () => {
    const errors = {
      name: validateName(name),
      email: validateEmail(email),
      telephone: validateTelephone(telephone),
    };
    setErrors(errors);
    
    return !Object.values(errors).some(Boolean);
  };

  const submitPersonalInfo = (name, email, telephone) => {
    if(!validate()) {
      return
    }
    setPersonalInfo(name, email, telephone);
  }

  return (
    <>
      <h1 className="form-content__title">Personal info</h1>
      <p className="text-preset--3-regular form-content__subtitle">Please provide your name, email address, and phone number.</p>
      
      <div className={`form-group ${errors.name && `form-group--error`}`}>
        <div className="form-group__labels">
          <label className="form-control__label" htmlFor="fname">Name</label>
          <span className="form-control__error">{errors.name}</span>
        </div>
        <input type="text" name="fname" id="fname" className="form-control" placeholder="e.g. Stephen King" enterkeyhint="next" value={name ? name : ''} onChange={event => setName(event.target.value)} />
      </div>
      <div className={`form-group ${errors.email && `form-group--error`}`}>
        <div className="form-group__labels">
          <label className="form-control__label" htmlFor="email">Email address</label>
          <span className="form-control__error">{errors.email}</span>
        </div>
        <input type="email" name="email" id="email" className="form-control" placeholder="e.g. stephenking@lorem.com" enterkeyhint="next" value={email ? email : ''} onChange={event => setEmail(event.target.value)} />
      </div>
      <div className={`form-group ${errors.telephone && `form-group--error`}`}>
        <div className="form-group__labels">
          <label className="form-control__label" htmlFor="telephone">Phone number</label>
          <span className="form-control__error">{errors.telephone}</span>
        </div>
        <input type="tel" name="telephone" id="telephone" className="form-control" placeholder="e.g. +1 234 567 890" enterkeyhint="done" value={telephone ? telephone : ''} onChange={event => setTelephone(event.target.value)} />
      </div>

      <section className="form-buttons">
        <button type="button" className="btn btn--primary form-buttons__continue" onClick={() => submitPersonalInfo(name, email, telephone)}>Next Step</button>
      </section>
    </>
  );
};

export default YourInfo;