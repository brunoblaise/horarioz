import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import i18n from '../../configs/i18n';

const queryClient = new QueryClient();

export const renderWrapper = (children: React.ReactNode): RenderResult =>
  render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </QueryClientProvider>
    </Router>
  );