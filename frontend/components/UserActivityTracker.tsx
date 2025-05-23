'use client'

import { useEffect } from 'react';
import useNotificationLogger from '../lib/useNotificationLogger';

export default function UserActivityTracker() {
  const { log } = useNotificationLogger();

  useEffect(() => {
    const url = window.location.pathname;

    // Derive a default context and action from URL segments
    const segments = url.split('/').filter(Boolean);
    const context = segments[0] || 'unknown';
    const action = segments[1] || 'view';

    const message = `User visited ${action} in ${context}`;
    log('user', message, url, '👣');
  }, [log]);

  return null;
}
