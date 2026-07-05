import React from 'react';
import Arjun from '../templates/Arjun';
import Krutagya from '../templates/Krutagya';
import Mayank from '../templates/Mayank';
import Priyasha from '../templates/Priyasha';
import Dev from '../templates/Dev';
import Jagjeet from '../templates/Jagjeet';
import Kalpan from '../templates/Kalpan';
import Priy from '../templates/Priy';
import Ridham from '../templates/Ridham';
import Sujal from '../templates/Sujal';
import SimpleTemplateOne from '../templates/SimpleTemplateOne';

const TemplateRenderer = ({ templateName }) => {
  const templates = {
    Arjun,
    Krutagya,
    Mayank,
    Priyasha,
    Dev,
    Jagjeet,
    Kalpan,
    Priy,
    Ridham,
    Sujal,
    SimpleTemplateOne,
  };

  const Component = templates[templateName] || Arjun;

  return <Component />;
};

export default TemplateRenderer;
