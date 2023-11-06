import { formatDistanceToNow } from 'date-fns';

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })

export function formatDistance(data) {
  return formatDistanceToNow(new Date(data));
}
