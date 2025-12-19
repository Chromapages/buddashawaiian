'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import '../../../sanity/studio.css';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-buddas-cream">
      <NextStudio config={config} />
    </div>
  );
}
