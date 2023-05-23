'use client';

import { Provider } from 'react-redux';
import { store } from 'state/store';

/**
 * Renders a Redux Provider component that wraps around the given children,
 * providing access to the global store.
 *
 * @param {React.ReactNode} children - The children to be wrapped by the Provider.
 * @return {JSX.Element} The Provider component containing the children.
 */

const ReduxProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviders;
