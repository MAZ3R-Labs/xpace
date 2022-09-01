import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Soon = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <p className='text-4xl text-white font-semibold'>{t('comingSoon')}</p>
    </div>
  )
}

export default Soon

export const getStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['menu', 'common'])),
      // Will be passed to the page component as props
    },
  }
}