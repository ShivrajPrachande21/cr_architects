import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/ContactsPage.css';
import { submitContactRequest } from './contactsSaga';
import { componentKey } from './contactsSlice';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const submitLoadingState = useSelector(
    (state) => state[componentKey]?.submitLoadingState ?? { state: 'idle', message: '' },
  );

  const [formData, setFormData] = useState({
    name: '',
    countryCode: 'US (+1)',
    phone: '',
  });

  const countryCodes = [
    'US (+1)', 'RU (+7)', 'GB (+44)', 'DE (+49)', 'FR (+33)',
    'IT (+39)', 'ES (+34)', 'CA (+1)', 'AU (+61)', 'JP (+81)',
    'CN (+86)', 'IN (+91)', 'BR (+55)', 'MX (+52)', 'AE (+971)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactRequest({
      ...formData,
      onSuccess: () => {
        setFormData({ name: '', countryCode: 'US (+1)', phone: '' });
      },
    }));
  };

  const isSubmitting = submitLoadingState.state === 'loading';
  const isSubmitted = submitLoadingState.state === 'success';

  return (
    <div className="contacts-page">
      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Left: Form */}
          <div className="contact-form-side">
            <div className="contact-header">
              <h1>Leave a request</h1>
              <p className="description">
                We will contact you, discuss the objectives of your project and
                <span className="highlight"> propose an individual scenario </span>
                for its realisation
              </p>
            </div>

            <div className="form-instructions">
              <p>Fill out the form and our manager will contact you</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Your name</label>
              </div>

              <div className="form-group-inline">
                <div className="form-group country-select">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="form-input select-input"
                  >
                    {countryCodes.map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group flex-grow">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting
                  ? 'Sending...'
                  : isSubmitted
                    ? 'Request sent!'
                    : 'Request a manager\'s consultation'}
              </button>

              <p className="privacy-note">
                I accept the <a href="#privacy">Privacy Policy</a>
              </p>
            </form>
          </div>

          {/* Right: Image/Photo */}
          <div className="contact-image-side">
            <div className="image-placeholder">
              <div className="image-content">
                <p>Team Photo</p>
                <p className="small-text">Your team image here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map / Info Section */}
      <section className="info-section">
        <div className="info-item">
          <div className="info-icon">🌍</div>
          <h3>ALL WORLD</h3>
          <p>We work all over the world</p>
          <button className="write-btn">Write us</button>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
        <div className="social-container">
          <div className="social-links">
            <a href="https://instagram.com" className="social-link">Instagram</a>
            <a href="https://pinterest.com" className="social-link">Pinterest</a>
            <a href="https://vk.com" className="social-link">VKontakte</a>
            <a href="https://youtube.com" className="social-link">YouTube</a>
            <a href="https://facebook.com" className="social-link">Facebook</a>
          </div>
        </div>
      </section>
    </div>
  );
}
