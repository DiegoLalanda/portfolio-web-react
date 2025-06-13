
import React, { useState, type FormEvent } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import { FiSend, FiMapPin } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Simulate API call
    console.log('Form data submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Simulate success/error
    const success = Math.random() > 0.2; // 80% chance of success
    if (success) {
      setStatusMessage(t('formSuccess'));
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatusMessage(t('formError'));
    }
    setIsSubmitting(false);
  };

  return (
    <SectionWrapper id="contact" title={t('contactTitle')}>
      <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-xl mx-auto">
        {t('contactSubtitle')}
      </p>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <AnimatedCard className="md:col-span-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formName')}</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-slate-400 dark:placeholder-slate-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formEmail')}</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-slate-400 dark:placeholder-slate-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formMessage')}</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-slate-400 dark:placeholder-slate-500"
                placeholder={t('formMessage')}
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                <FiSend className="mr-2 h-5 w-5" /> 
                {isSubmitting ? 'Sending...' : t('formSend')}
              </button>
            </div>
            {statusMessage && (
              <p className={`text-sm text-center ${statusMessage.includes('Error') || statusMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </AnimatedCard>

        <AnimatedCard className="md:col-span-1 flex flex-col items-center justify-center">
            <FiMapPin className="w-16 h-16 text-blue-500 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">My Location</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">{t('mapDescription')}</p>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-inner">
                 <img 
                    src="https://picsum.photos/600/400?grayscale&blur=2&text=Map+Placeholder" 
                    alt="Map placeholder showing a generic location" 
                    className="w-full h-full object-cover"
                />
            </div>
             <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 text-center">
                (This is a placeholder image. Real map integration would require an API key.)
            </p>
        </AnimatedCard>
      </div>
    </SectionWrapper>
  );
};
