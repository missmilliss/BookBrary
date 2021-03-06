import React from 'react';

import locales from '../../translations';

import { FormattedMessage } from 'react-intl';

const Footer = ({ onLocalChange }) => {
  return (
    <div className=' bg-primary navbar fixed-bottom pt-2'>
      <div className='row container'>
        <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
          <div className='d-flex justify-content-between  align-items-center'>
            <div className='rights'>
              <p className='h6'>
                <FormattedMessage
                  id='footer.right-text'
                  defaultMessage='© All right Reversed:'
                  description='All rights reserved'
                />

                <a
                  className='text-white ml-2'
                  href='https://github.com/CasperCarver'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <i className='fab fa-github'></i> CasperCarver
                </a>
              </p>
            </div>
            <div className=' mb-1 d-flex  justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='form-group'>
                  <select
                    style={{ height: '30px' }}
                    className='form-control'
                    id='lang'
                    value={localStorage.getItem('lang')}
                    onChange={(e) => {
                      onLocalChange(e.target.value);
                      localStorage.setItem('lang', e.target.value);
                    }}>
                    <option value={locales.EN}>En</option>
                    <option value={locales.RU}>Ru</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
