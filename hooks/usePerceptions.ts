import { useEffect, useState, useMemo } from "react";
import { fetchPerceptions, Perception } from "@/services/mockFeed";

let cachedData: Perception[] | null = null;

export function usePerceptions(p0: (s: any) => any) {
  const [data, setData] = useState<Perception[]>(cachedData ?? []);
  const [loading, setLoading] = useState(!cachedData);

  useEffect(() => {
    if (!cachedData) {
      fetchPerceptions().then((res) => {
        cachedData = res;
        setData(res);
        setLoading(false);
      });
    }
  }, []);

  // Derived analytics (memoized)
  const analytics = useMemo(() => {
    if (!data.length) return null;

    const totalVotes = data.reduce(
      (sum, item) => sum + item.agree + item.disagree,
      0
    );

    const categoryMap: Record<string, number> = {};

    data.forEach((item) => {
      const votes = item.agree + item.disagree;
      categoryMap[item.category] =
        (categoryMap[item.category] || 0) + votes;
    });

    return {
      totalVotes,
      categoryMap,
    };
  }, [data]);

  return { data, loading, analytics };
}