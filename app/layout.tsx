import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a [locale] layout, this root layout 
// just renders the children it receives.
export default function RootLayout({ children }: Props) {
  return children;
}