import { useEffect, useRef } from 'react';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';

type AppRoute = '/' | '/api-demo' | '/gesture-demo' | '/modal';

function getRouteFromUrl(url: string | null): AppRoute | null {
  if (!url) return null;

  const parsed = Linking.parse(url);
  const rawPath = (parsed.path ?? '').replace(/^\/+/, '');
  const normalizedPath = rawPath.replace(/^--\//, '');

  if (!normalizedPath || normalizedPath === 'home') return '/';
  if (normalizedPath === 'api-demo') return '/api-demo';
  if (normalizedPath === 'gesture-demo') return '/gesture-demo';
  if (normalizedPath === 'modal') return '/modal';

  return null;
}

export function useDeepLinking() {
  const router = useRouter();
  const isInitialLinkHandled = useRef(false);
  const lastHandledUrl = useRef<string | null>(null);

  useEffect(() => {
    const handleUrlNavigation = (url: string | null) => {
      if (!url || lastHandledUrl.current === url) return;

      const route = getRouteFromUrl(url);
      if (!route) return;

      lastHandledUrl.current = url;
      router.push(route);
    };

    // Handle closed state (app launched from a deep link).
    const getInitialLink = async () => {
      if (isInitialLinkHandled.current) return;

      const initialUrl = await Linking.getInitialURL();
      handleUrlNavigation(initialUrl);
      isInitialLinkHandled.current = true;
    };

    getInitialLink();

    // Handle foreground/background state (incoming link while app is running).
    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleUrlNavigation(url);
    });

    return () => {
      subscription.remove();
    };
  }, [router]);
}
