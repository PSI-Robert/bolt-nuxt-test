import type { H3Event } from 'h3';

export function useCacheKey(key: string) {
   return `cache:${key}`;
}

export async function getFromCache<T>(event: H3Event, key: string): Promise<T | null> {
   const storage = useStorage();
   const cacheKey = useCacheKey(key);
   return await storage.getItem<T>(cacheKey);
}

export async function setToCache<T>(
   event: H3Event,
   key: string,
   data: T,
   ttl: number = 3600,
): Promise<void> {
   const storage = useStorage();
   const cacheKey = useCacheKey(key);
   await storage.setItem(cacheKey, data, { ttl });
}
