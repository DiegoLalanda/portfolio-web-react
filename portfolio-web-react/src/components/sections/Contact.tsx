import React, { useState, type FormEvent } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionWrapper } from '../common/SectionWrapper';
import { AnimatedCard } from '../common/AnimatedCard';
import { FiSend, FiMapPin } from 'react-icons/fi';


export const Contact: React.FC = () => {
  const { t } = useLanguage();
  // CAMBIO 1: Añadimos 'subject' al estado del formulario
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      // CAMBIO 2: Enviamos los datos a tu endpoint de Formspree
      const response = await fetch('https://formspree.io/f/mqabwolw', { // <-- ¡REEMPLAZA CON TU URL DE FORMSPREE!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            _replyto: formData.email,
            subject: formData.subject,
            message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage(t('formSuccess'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Formspree puede devolver errores en formato JSON
        const data = await response.json();
        if (data.errors) {
            setStatusMessage(data.errors.map((error: any) => error.message).join(', '));
        } else {
            setStatusMessage(t('formError'));
        }
      }
    } catch (error) {
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
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formEmail')}</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
            </div>
            {/* CAMBIO 3: Añadimos el campo "Asunto" */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formSubject')}</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder={t('formSubject')} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">{t('formMessage')}</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder={t('formMessage')} />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50">
                <FiSend className="mr-2 h-5 w-5" /> 
                {isSubmitting ? 'Sending...' : t('formSend')}
              </button>
            </div>
            {statusMessage && (
              <p className={`text-sm text-center ${statusMessage.includes('Error') || statusMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
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
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109287.66986650422!2d-58.07920170588636!3d-31.3995808383344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade6163359d959%3A0x6b44e3975a59c762!2sConcordia%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1689280790251!5m2!1ses-419!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Concordia, Entre Ríos"
                    className=""
                ></iframe>
            </div>
        </AnimatedCard>
      </div>
    </SectionWrapper>
  );
};